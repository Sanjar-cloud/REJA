// console.log("Jack ma maslahatlari");
// const list = [
//     "yaxshi talaba boling", //0-20
//     "togri boshliq tanlang va koproq hato qiling", //20-30
//     "ozingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan narsalarni qiling ", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling", //60
//  ];

 //callbakc function x  

//  function maslahatBering(a, callbeck) {
//     if (typeof a !== "number") callbeck("inseert a number", null);
//     else if (a <= 20) callbeck(null, list[0]);
//     else if (a > 20 &&a <= 30) callbeck(null, list[1]);
//     else if (a > 30 &&a <= 40) callbeck(null, list[2]);
//     else if (a > 40 &&a <= 50) callbeck(null, list[3]);
//     else if (a > 50 &&a <= 60) callbeck(null, list[4]);
//     else{
//         setTimeout(function ()  {
//              callbeck(null, list[5]);

//         },  5000);
       
//     }
       
//  };

//  console.log("passsed here o");
//  maslahatBering(70, (err, data) => {
//     if (err) console.log("ERROR:", err);
//     else {
//         console.log("javob:", data);
//     }
//  });
// console.log('passed here 1');



//asychronous functions 



// async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error ("inseert a number");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise ((resolve, reject) => {
//             setInterval(() => {
//                  resolve(list[5]);

//             }, 5000)
//         })
//     }
        
//  };

//asynchronous then/ catch 
//call via ( call qilish then/catch. orqali)

// console.log("passed here o");
//  maslahatBering(77) 
//  .then( (data) =>{
//     console.log("javob:", data);
//  })
//  .catch((err) => {
//     console.log("ERROR:", err);
//  });
//  console.log("passed here 1");



//async/await call via  ( call qilish await orqali )

// async function run() {
//     let javob = await maslahatBering(20);
//     console.log(javob);
//     javob = await maslahatBering(77);
//     console.log(javob);
//     javob = await maslahatBering(88);
//     console.log(javob);
//     javob = await maslahatBering(99);
//     console.log(javob);
   
// }
// run(); 



//mitask bzi qiymat qilib kiritkan xarf nehta ekanligini bilish 


// function countLetter(harf, soz) {
//   let son = 0;

//   for (let i = 0; i < soz.length; i++) {
//     if (soz[i] === harf) {
//       son++;
//     }
//   }

//   return son;
// }

// console.log(countLetter("a", "lalalalalalala")); // 


//B-task

// tepada xariflar topish uchun (countLetrer/functiondan foydalangan edik ) (raqamlar miqdorini topish uchun countNum dan foydalanamiz)
// function countDigits(soz) { 
//   let count = 0;
//   for (let letter of soz) {
//     if (letter >= 0) {
//       count++;
//     }
//   }
//   console.log(`Ushbu string ichidan ${count} dona raqamlar topildi`);
// }
// countDigits("ad2a54y79wet0sfgb900755213");





//MIT task-c 2ta argument beramiz misol ("mitgroup", "gmtiprou")  xarif va raqamlar sonlar teng yoki teng eamsligini bilish 


// 1- xolatda yechish usuli
// function count(soz1,soz2) {
//   const new_soz = soz1.split("");
//   if (soz1.length == soz2.length) {
//     return new_soz.every((x) => soz2.includes(x));
//   } else {
//     return "Harflar soni teng emas";
//   }
// }
// console.log(count("mitgroup", "gmtiprou"));


//2- xolatda yechish suli
// function count(soz1, soz2) {
//  if (soz1.length !== soz2.length) {
//    return "Harflar soni teng emas";
//  }
 
//  for (let i = 0; i < soz1.length; i++) {
//    if (!soz2.includes(soz1[i])) {
//      return false;
//    }
//  }
 
//  return true;
// }

// console.log(count("nimagap", "nmagap")); 

//3- xolatda yechish suli
// function count(soz1, soz2) {
//  if (soz1.length !== soz2.length) {
//    return "Harflar soni teng emas";
//  }
 
//  const sort1 = soz1.split("").sort().join("");
//  const sort2 = soz2.split("").sort().join("");
 
//  return sort1 === sort2;
// }

// console.log(count("mitgroup", "gmtiprou")); // true




//d-task

// class Shop {
//    constructor(non, lagmon, cola) {
//        this.non = non;
//        this.lagmon = lagmon;
//        this.cola = cola;
//    }

//    qoldiq() {
//        const vaqt = new Date().toLocaleTimeString();
//        console.log(`Hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`);
//    }

//    sotish(mahsulot, miqdor) {
//        this[mahsulot] = this[mahsulot] - miqdor;
//        console.log(`${miqdor}ta ${mahsulot} sotildi`);
//    }

//    qabul(mahsulot, miqdor) {
//        this[mahsulot] = this[mahsulot] + miqdor;
//        console.log(`${miqdor}ta ${mahsulot} qabul qilindi`);
//    }
// }

// // Ishlatish
// const shop = new Shop(4, 5, 2);

// shop.qoldiq();
// shop.sotish("non", 4);
// shop.sotish("lagmon", 3);
// shop.sotish("cola", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();


// e task 

// function getReverse(sanjar) {
//   return sanjar.split("").reverse().join("")
// }

// console.log(getReverse("sanjar"))

// function kattasi(a, b ) {
//     if(a < b ){
//         return b
//     } else {
//         return a 
//     }
// }

// console.log(kattasi(3, 7))  // 7
// console.log(kattasi(10, 4)) // 10



///task - F 


// function findDoublers(a=string) {
//   const arr = a.split("")
//   return arr.some(ele => {
//     return arr.filter(harf => harf === ele).length > 1
//   })
// }

// console.log(findDoublers("hello")) // true qaytaradi 


// G task 

// function getHighestIndex(arr) {
//     let maxValue = arr[0];
//     let maxIndex = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maxValue) {
//             maxValue = arr[i];
//             maxIndex = i;
//         }
//     }

//     return maxIndex;
// }

// const result = getHighestIndex([5, 21, 12, 21, 8]);
// console.log(result);  


// H-task

// function getPositive(arr) {
//     let result = "";

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             result += String(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(getPositive([1, -4, 2]));  // 12


//I-task 

// function majorityElement(arr) {
//   let count = {};

//   //  raqamni sanaymiz
//   arr.forEach(function(num) {
//     if (count[num]) {
//       count[num] = count[num] + 1;
//     } else {
//       count[num] = 1;
//     }
//   });

//   // kop takrorlangani topamiz
//   let maxNum = arr[0];
//   let maxCount = 0;

//   for (let num in count) {
//     if (count[num] > maxCount) {
//       maxCount = count[num];
//       maxNum = num;
//     }
//   }

//   return Number(maxNum);
// }

// console.log(majorityElement([1, 2, 3, 3, 5, 4, 3, 3])); //3 return qilafi 


//J-task

function findLongestWord(str) {
  
  // split qilib olamuz
  let words = str.split(" ");
 

  // eng uzun sozni topaman
  let longest = "";

  // check qiladi xar wordni 
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  // keyin javobni qaytaradi
  return longest;
}


let result = findLongestWord("i'm learning python");
console.log(result);
