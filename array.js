// // Array

// var scores = [100, 50, 75, 70, 35];

// // for(var i = 0; i < scores.length ; i++){
// //     console.log(scores[i]);
// // }

// // Study Case 1 : Hitung Jumlah total dari scores

// var total = 0;
// for (var i = 0; i < scores.length; i++) {
//     total += scores[i]
// }
// // console.log(total)

// // Study Case 2 : Hitung rata-rata dari scores di atas

// var mean = total / scores.length
// // console.log(mean)

// // Study Case 3

// var stats = [
//     [1, 2, 3],
//     [-1],
//     [10, 20, 30, 40, 50],
//     [-5, -7],
//     [15, 17, 19]
// ]

// // a. Hitung total semua angka 
// var jumlah = 0;
// for (var i = 0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         jumlah = jumlah + stats[i][j]
//     }
// }
// // b. Hitung angka yang mengandung belasan
// var jumlahBelasan = 0;
// for (var i = 0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         if(stats[i][j] < 20 && stats[i][j] >= 11){
//             jumlahBelasan = jumlahBelasan + stats[i][j]
//         }
//     }
// }

// // c. Kelompokkan angka yang minus
// var arrayMint = []
// for (var i = 0; i < stats.length; i++) {
//     for (var j = 0; j < stats[i].length; j++) {
//         if(stats[i][j] < 0 ){
//             arrayMint.push(stats[i][j])
//         }
//     }
// }

/**var murid = [
 *  [1, "Vincent", 3.5],
 *  [2, "Udin", 3.0],
 *  [3, "Mamang", 2.1]
 */

// var murid = [
//     [1, "Vincent", 3.5],
//     [2, "Udin", 3.0],
//     [3, "Mamang", 2.1]
// ]

// for(var i = 0 ; i < murid. length; i++){
//     if(murid[i][2] >= 3.0){
//         console.log(murid[i][0] + ". " +
//         murid [i][1] + ", Lulus")
//     } else {
//         console.log(murid[i][0] + ". " +
//         murid[i][1] + ", Tidak Lulus")
//     }
// }

/** Latihan ARRAY SOAL 1
 * 1. Arloji Collection
 *      A punya koleksi arloji yang dia banggakan, dan teman-temannya ingin bertanya koleksi arloji apa saja yang dia punya.
 * let watches = ['Swiss Army','Daniel Wellington','Dublot']
 * // Hasil yang diharapkan : Saya punya Swiss Army, Daniel Wellington, dan Dublot.
 * 
 * Hasil harus sama persis seperti yang dicontohkan, dimana:
 * 1. Result di print dalam 1 string
 * 2. Tanda ','(koma) dan '.'(titik) harus sesuai
 * 
 * Contoh lain:
 * let arloji = ['A', 'B', 'C', 'D', 'E']
 * // Hasil yang di harapkan : Saya punya A, B, C, D, dan E.
 * 
 * Buat Pseudocode dan solusi codingnya, rules : tidak boleh menggunakan built in function apapun!
 */

let Watches = ['Swiss Army','Daniel Wellington','Dublot'];

console.log("Saya Punya " + Watches) + ". ";
