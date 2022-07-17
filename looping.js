// LOOPING

// for (var i = 4; i < 100; i++){
//     console.log(i + 1)
// }

// var str = 'nasi kotak'
// str[0] -> n
// str[1] -> a 

// for (var i - 0; i <.length; i++){
//     console.log(str[i])
// }

/**
 * Study case 1
 * 
 * Tampilkan bilangan ganjil dan genap.
 * 
 * var num = 5;
 * 
 * Result:
 * 1 adalah ganjil
 * 2 adalah genap
 * 3 adalah ganjil
 * 4 adalah genap
 * 5 adalah ganjil
 */

// var num = 5;
// for (var i = 1 ; i <= num; i++){
//     if (i % 2 === 0) {
//         console.log(i + ' bilangan genap')
//     } else {
//         console.log(i + ' bilangan ganjil')
//     }
// }

/**
 * Study Case 2
 * 
 * Ubah huruf menjadi besar dan kecil.
 * 
 * var str = 'sarapan'
 * 
 * Result:
 * SaRaPaN
 */

// var str = "sarapan"
// var temp = ''

// for (var i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//         temp = temp + str[i].toUpperCase()
//         // console.log(str[i].toUpperCase())
//     } else {
//         temp = temp + str[i]
//         // console.log(str[i])
//     }
// }
// console.log(temp)

/**
 * Study Case 3
 * 
 * Buat kotak persegi
 * 
 * var num = 3
 * 
 * Result:
 * ###
 * ###
 * ###
 */

// var num = 3;
// var temp = ''
// for(var i = 0; i < num; i++){
//     for(var j = 0; j < num; j++){
//         temp += '#'
//     }
//     console.log(temp)
//     temp = ''
// }