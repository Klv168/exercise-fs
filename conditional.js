// var number = 15;

// if(number === 9){
//     console.log("Angka 9")
// } else if(number === 12){
//     console.log("Angka 12")
// } else {
//     console.log("Angka bukan 9 dan 12")
// }

// Terdapat 2 jenis minuman teh dan kopo, selain itu tidak ada,

// // var beverages = "seblak";
// // // .toLowerCase => membuat jadi huruf kecil

// // switch(beverages.toLowerCase()){
// //     case 'kopi':
// //         console.log('Kamu pilih kopi')
// //         break;
// //     case 'teh':
// //         console.log('Kamu pilih teh')
// //         break;
// //     default:
// //         console.log('Minuman tidak terseda oke, trms.')
// }

/**
 * Study Case 1
 * 
 * Grade Nilai
 * 
 * Jika nilai di antara 100 dan 85, maka grade A
 * Jika nilai di antara 84 dan 70, maka grade B
 * Jika nilai di antara 69 dan 50, maka grade C
 * Jika nilai di antara 49 dan 30, maka grade D
 * Jika nilai di antara 29 dan 0, maka grade E
 * 
 * Buatlah codingan untuk menyelesaikan soal diatas.
 */

// var score = 50;

// if(score <= 100 && score >= 85){
//     console.log("Grade A")
// } else if(score < 85 && score >=70){
//     console.log('Grade B')
// } else if(score < 70 && score >= 50){
//     console.log('Grade C')
// } else if(score < 50 && score >= 30){
//     console.log('Grade D')
// } else if(score < 30 && score >= 0){
//     console.log('Grade E')
// } else {
//     console.log("masukkan nilai antara 0 - 100")
// }

/**
 * Study Case 2
 * 
 * Cek bilangan ganjil dan genap
 * 
 * Ganjil adalah bilangan yang tidak habis dibagi 2
 * Genap adalah bilangan yang habis dibagi 2
 */

// var bilangan = 5;
// // modulus % => sisa bagi

// if (bilangan % 2 === 0) {
//     console.log(bilangan + ' bilangan genap')
// } else if (bilangan % 2 === 1) {
//     console.log(bilangan + ' bilangan ganjil')
// }

/**
 * Vending maching memberikan minuman input string
 * 
 * Jika minuman kosong, maka tampilkan "Input minuman"
 * Jika minuman diinput "Sweet Tea" , maka tampilkan "You choose Sweet Tea, thanks"
 * Jika minuman diinput "Plain Tea" , maka tampilkan "You choose Plain Tea, thanks"
 * Jika minuman diinput "Boba" , maka tampilkan "You choose Boba, thanks"
 * Jika minuman diinput "Milk Coffee" , maka tampilkan "You choose Milk Coffee, thanks"
 * Jika minuman diinput "Choco Ice" , maka tampilkan "You choose Choco Ice, thanks"
 * Jika minuman diinput salah, tampilkan "minuman is not defined"
 */

var minuman = "Choco Ice";

switch (minuman) {
    case 'Sweet Tea':
        console.log("You choose Sweet Tea, thanks")
        break;
    case 'Plain Tea':
        console.log("You Choose Plain Tea, thanks")
        break;
    case 'Boba':
        console.log("You Choose Boba, thanks")
        break;
    case 'Milk Coffee':
        console.log("You Choose Milk Coffee, thanks")
        break;
    case 'Choco Ice':
        console.log("You Choose Choco Ice, thanks")
        break;
    default:
        if (minuman === "") {
            console.log("Input minuman")
        } else {
            console.log("minuman is undefined")
        }
        break;
}