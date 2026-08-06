const Peserta = require("./Peserta");

// instantiasi normal
var peserta1 = new Peserta("Andi", 95);
peserta1.cekNilai();

// instantiasi nilai melebihi 100
var peserta2 = new Peserta("Budi", 120);
peserta2.cekNilai();

// instantiasi nilai kurang dari 0
var peserta3 = new Peserta("Citra", -10);
peserta3.cekNilai();
