import fungsiLuasPersegiPanjang from "./luasPersegiPanjang.js";
import fungsiLuasLingkaran from "./luas_lingkaran.js";
import fungsiLuasPersegi from "./luas_persegi.js";
import fungsiLuasJajarGenjang from "./luas_jajar_genjang.js";
import fungsiLuasSegitiga from "./luas_segitiga.js";

console.log("Ini Fungsi Luas Persegi Panjang -> PANJANG * LEBAR");
console.log(fungsiLuasPersegiPanjang(2, 2));
console.log("Ini fungsi luas lingkaran -> PHI * R Kuadrat");
console.log(fungsiLuasLingkaran(7));
console.log("Ini fungsi Luas persegi -> SISI * SISI");
console.log(fungsiLuasPersegi(4));
console.log("Ini fungsi Luas Jajar Genjang -> ALAS * TINGGI");
console.log(fungsiLuasJajarGenjang(3,5));
console.log("Ini fungsi luas segitiga -> 1/2 * ALAS * TINGGI");
console.log(fungsiLuasSegitiga(3,6));