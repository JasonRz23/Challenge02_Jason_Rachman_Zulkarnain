const dataPenjualanPakAldi = [
  // Index 0
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  // Index 1
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  // index 2
  {
    namaProduct: "Sepatu Warrior Tristan Black Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  // Index 3
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

// let dataPenjualan;
// for (let spt in dataPenjualanPakAldi) {
//   let dataPenjualan = dataPenjualanPakAldi[spt]["totalTerjual"];
//   document.write(`${dataPenjualan}`);
//   // console.log(dataPenjualanPakAldi[spt]["totalTerjual"]);
// }
const data1 = dataPenjualanPakAldi[0]["totalTerjual"];
const data2 = dataPenjualanPakAldi[1]["totalTerjual"];
const data3 = dataPenjualanPakAldi[2]["totalTerjual"];
const data4 = dataPenjualanPakAldi[3]["totalTerjual"];

const dataPenjualan = data1 + data2 + data3 + data4;

// let jumlah = 10;

// jumlah = jumlah + 20;
// document.write(`${jumlah}`);

function getTotalPenjualan(dataPenjualan) {
  hasil = dataPenjualan;
  return hasil;
}

console.log("Total Penjumlahan: ", getTotalPenjualan(dataPenjualan));
