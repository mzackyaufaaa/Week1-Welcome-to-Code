// ## Soal 5. Bintang asteriks
// ```js
// // Problem buatlah bintang seperti berikut
// let input = 5
// //hasilnya
// //*
// //**
// //***
// //****
// //*****
// ```

let input = 5;
let bintang = '';
for (let i = 0; i < input; i++) {
  bintang += '*'
  console.log(bintang)
}