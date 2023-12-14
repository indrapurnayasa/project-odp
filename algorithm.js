// function hitungFaktorial(nilaiInput) {

//     if (nilaiInput === 0 || nilaiInput === 1) {
//         return 1;
//     } else {
//         return nilaiInput * hitungFaktorial(nilaiInput - 1);
        
//     }
// }

// var hasil = hitungFaktorial(5);
// console.log(hasil);

// function createTriangle(rows) {
//     let triangle = '';
//     for (let i = 1; i <= rows; i++) {
//         for (let j = 1; j <= i; j++) {
//             triangle += '* ';
//         }
//         triangle += '\n';
//     }
//     return triangle;
// }

// var triangle = createTriangle(5);
// console.log(triangle);

// function createInvertedTriangle(rows) {
//     let invertedTriangle = '';
//     for (let i = rows; i >= 1; i--) {
//         for (let j = 1; j <= i; j++) {
//             invertedTriangle += '* ';
//         }
//         invertedTriangle += '\n';
//     }
//     return invertedTriangle;
// }

// var invertedTriangle = createInvertedTriangle(5);
// console.log(invertedTriangle);

// function kotak(baris) {
//     let hasil = '';
//     for (let i = 0; i < baris; i++){
//         for (let j = 0; j > baris; j++){
//             hasil += '*';
//         }
//         hasil += '\n'
//     }
//     return hasil;
// }
// console.log(kotak(5));

// function segitigaTerbalik(rows){
//     let hasil =''
//     for (let i = rows; i > 0; i--){
//         for (let j = rows; j > 0; j--){
//             if (j > i) {
//                 hasil += '';
//             } else {
//                 hasil += '* '
//             }
//         }
//         hasil += '\n'
//     }
//     return hasil;
// }
// console.log(segitigaTerbalik(5))

// function createTriangle(rows, condition) {
//     if (condition == "triangle") {
//         for (let i = 1; i <= rows; i++) {
//             let spasi = ' '.repeat(rows - i);
//             let bintang = '*'.repeat(i);
//             console.log(spasi + bintang);
//             }
//     } else {
//         for (let i = rows; i >= 1; i--) {
//             let spasi = ' '.repeat(rows - i);
//             let bintang = '*'.repeat(i);
//             console.log(spasi + bintang);
//             }
//         }   

//     }
      
// createTriangle(6);

