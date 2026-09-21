import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Selamat Datang</h1>
      <p className="text-muted-foreground mb-6">
        Sistem data siswa dan jurusan.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Murid</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/students">Kelola Murid</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Jurusan</CardTitle>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/majors">Kelola Jurusan</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
