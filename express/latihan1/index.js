const express = require("express");
const app = express();
const PORT = 3000;

// Soal 1: GET /lingkaran-tabung/:jariJari/:tinggi
// jari-jari & tinggi diambil dari parameter url
app.get("/lingkaran-tabung/:jariJari/:tinggi", (req, res) => {
  const jariJari = Number(req.params.jariJari);
  const tinggi = Number(req.params.tinggi);

  function luasLingkaran(r) {
    return Math.PI * r * r;
  }

  function kelilingLingkaran(r) {
    return 2 * Math.PI * r;
  }

  function volumeTabung(r, t) {
    return luasLingkaran(r) * t;
  }

  const luasAlas = luasLingkaran(jariJari);
  const keliling = kelilingLingkaran(jariJari);
  const volume = volumeTabung(jariJari, tinggi);

  res.send(
    `jariJari : ${jariJari}, tinggi: ${tinggi}, volume tabung : ${volume}, luas alas tabung : ${luasAlas}, keliling alas tabung : ${keliling}`,
  );
});

app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});
