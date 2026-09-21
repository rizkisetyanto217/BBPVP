import { useEffect, useState } from "react";
import api from "../api/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export default function Majors() {
  const [majors, setMajors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ kodeJurusan: "", namaJurusan: "" });
  const [saving, setSaving] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchMajors = () => {
    setLoading(true);
    api
      .get("/majors")
      .then((res) => {
        setMajors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal ambil data majors");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchMajors();
  }, []);

  const resetForm = () => {
    setForm({ kodeJurusan: "", namaJurusan: "" });
    setEditingId(null);
  };

  const handleAddClick = () => {
    resetForm();
    setOpen(true);
  };

  const handleEditClick = (major) => {
    setForm({ kodeJurusan: major.kodeJurusan, namaJurusan: major.namaJurusan });
    setEditingId(major.id);
    setOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        await api.put(`/majors/${editingId}`, form);
      } else {
        await api.post("/majors", form);
      }
      resetForm();
      setOpen(false);
      fetchMajors();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal simpan jurusan");
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteClick = (major) => {
    setDeleteTarget(major);
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await api.delete(`/majors/${deleteTarget.id}`);
      setDeleteOpen(false);
      setDeleteTarget(null);
      fetchMajors();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Gagal hapus jurusan");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) return <p className="p-6 text-muted-foreground">Loading...</p>;
  if (error) return <p className="p-6 text-destructive">{error}</p>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Jurusan</h1>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button onClick={handleAddClick}>+ Tambah Jurusan</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editingId ? "Edit Jurusan" : "Tambah Jurusan"}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="kodeJurusan">Kode Jurusan</Label>
                <Input
                  id="kodeJurusan"
                  value={form.kodeJurusan}
                  onChange={(e) =>
                    setForm({ ...form, kodeJurusan: e.target.value })
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="namaJurusan">Nama Jurusan</Label>
                <Input
                  id="namaJurusan"
                  value={form.namaJurusan}
                  onChange={(e) =>
                    setForm({ ...form, namaJurusan: e.target.value })
                  }
                  required
                />
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

      {majors.length === 0 ? (
        <p className="text-muted-foreground">Belum ada data majors</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Kode</TableHead>
              <TableHead>Nama Jurusan</TableHead>
              <TableHead>Jumlah Siswa</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {majors.map((major) => (
              <TableRow key={major.id}>
                <TableCell>{major.kodeJurusan}</TableCell>
                <TableCell>{major.namaJurusan}</TableCell>
                <TableCell>{major.students?.length ?? 0}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditClick(major)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteClick(major)}
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
            <AlertDialogTitle>Hapus Jurusan?</AlertDialogTitle>
            <AlertDialogDescription>
              Anda yakin ingin menghapus jurusan{" "}
              <strong>{deleteTarget?.namaJurusan}</strong>? Tindakan ini tidak
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
