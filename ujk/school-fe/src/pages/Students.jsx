import { useEffect, useState } from "react";
import api from "../api/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const emptyForm = {
  kodeSiswa: "",
  namaSiswa: "",
  alamatSiswa: "",
  tglSiswa: "",
  majorId: "",
};

export default function Students() {
  const [students, setStudents] = useState([]);
  const [majors, setMajors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyForm);
  const [saving, setSaving] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchStudents = () => {
    setLoading(true);
    api
      .get("/students")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal ambil data students");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
    api
      .get("/majors")
      .then((res) => setMajors(res.data))
      .catch((err) => console.error("Gagal ambil data majors:", err));
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleAddClick = () => {
    resetForm();
    setOpen(true);
  };

  const handleEditClick = (student) => {
    setForm({
      kodeSiswa: student.kodeSiswa,
      namaSiswa: student.namaSiswa,
      alamatSiswa: student.alamatSiswa || "",
      tglSiswa: student.tglSiswa ? student.tglSiswa.slice(0, 10) : "",
      majorId: student.majorId ? String(student.majorId) : "",
    });
    setEditingId(student.id);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...form, majorId: form.majorId || null };
      if (editingId) {
        await api.put(`/students/${editingId}`, payload);
      } else {
        await api.post("/students", payload);
      }
      resetForm();
      setOpen(false);
      fetchStudents();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal simpan siswa");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteClick = (student) => {
    setDeleteTarget(student);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await api.delete(`/students/${deleteTarget.id}`);
      setDeleteOpen(false);
      setDeleteTarget(null);
      fetchStudents();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal hapus siswa");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <p className="p-6 text-muted-foreground">Loading...</p>;
  if (error) return <p className="p-6 text-destructive">{error}</p>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Students</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddClick}>+ Add Student</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Siswa" : "Tambah Siswa"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="kodeSiswa">Kode Siswa</Label>
                <Input
                  id="kodeSiswa"
                  value={form.kodeSiswa}
                  onChange={(e) =>
                    setForm({ ...form, kodeSiswa: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="namaSiswa">Nama Siswa</Label>
                <Input
                  id="namaSiswa"
                  value={form.namaSiswa}
                  onChange={(e) =>
                    setForm({ ...form, namaSiswa: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="alamatSiswa">Alamat Siswa</Label>
                <Input
                  id="alamatSiswa"
                  value={form.alamatSiswa}
                  onChange={(e) =>
                    setForm({ ...form, alamatSiswa: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="tglSiswa">Tanggal</Label>
                <Input
                  id="tglSiswa"
                  type="date"
                  value={form.tglSiswa}
                  onChange={(e) =>
                    setForm({ ...form, tglSiswa: e.target.value })
                  }
                />
              </div>
              <div className="space-y-1">
                <Label>Jurusan</Label>
                <Select
                  value={form.majorId}
                  onValueChange={(value) =>
                    setForm({ ...form, majorId: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="-- Pilih Jurusan --" />
                  </SelectTrigger>
                  <SelectContent>
                    {majors.map((major) => (
                      <SelectItem key={major.id} value={String(major.id)}>
                        {major.namaJurusan}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={saving}>
                  {saving ? "Menyimpan..." : editingId ? "Update" : "Simpan"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {students.length === 0 ? (
        <p className="text-muted-foreground">Belum ada data students</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kode</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead>Alamat</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Jurusan</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.kodeSiswa}</TableCell>
                <TableCell>{student.namaSiswa}</TableCell>
                <TableCell>{student.alamatSiswa || "-"}</TableCell>
                <TableCell>
                  {student.tglSiswa ? student.tglSiswa.slice(0, 10) : "-"}
                </TableCell>
                <TableCell>{student.major?.namaJurusan || "-"}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditClick(student)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteClick(student)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Hapus Siswa?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda yakin ingin menghapus siswa{" "}
              <strong>{deleteTarget?.namaSiswa}</strong>? Tindakan ini tidak
              dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={deleting}>Batal</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDeleteConfirm}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? "Menghapus..." : "Hapus"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
