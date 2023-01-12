// const sum = (n) => {
//   if (typeof n !== "number") return false;
//   let total = 0;
//   for (let i = 1; i <= n; i++) { //Tính S(n) = 1^2 + 2^2 + … + n^2
//     // total += Math.pow(i, 2);
//     total += i * i;
//   }
//   return total;
// };
// console.log(sum(3));

// const sum = (n) => {
//   if (typeof n !== "number") return false;
//   let total = 0;
//   for (let i = 1; i <= n; i++) {  //Tính S(n) = 1 + ½ + 1/3 + … + 1/n
//     total += 1 / i;
//   }
//   return total;
// };
// console.log(sum(3));

// const sum = (n) => {
//   if (typeof n !== "number") return false;
//   let total = 0;
//   for (let i = 1; i <= n; i++) {  //Tính S(n) = ½ + ¼ + … + 1/2n
//     total += 1 / (2 * i);
//   }
//   return total;
// };
// console.log(sum(3));

// const sum = (n) => {
//   if (typeof n !== "number") return false;
//   let total = 1;
//   for (let i = 1; i <= n; i++) {
//     //Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
//     total += 1 / (2 * i + 1);
//   }
//   return total;
// };
// console.log(sum(2));

// const sum = (n) => {
//   if (typeof n !== "number") return false;
//   let total = 1;
//   for (let i = 1; i <= n; i++) {
//     //Tính T(n) = 1 x 2 x 3…x N
//     total *= i;
//   }
//   return total;
// };
// console.log(sum(4));

// const tong = (n) => {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 == 0) {
//       console.log(i);
//     }
//   }
// };
// tong(100);

// const fs = require("fs");// hàm require và thư viện fs chỉ nodejs có còn javascript thì không có

// // delete a file
// fs.unlink("file.txt", (err) => {
//   if (err) {
//     throw err;
//   }

//   console.log("File is deleted.");
// });

// const isIncreasingNumber = (n) => {
//   let myString = n.toString();

//   let myArr = myString.split("");

//   console.log(myArr); //Xet tắng dần từ trái qua phải

//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] > myArr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isIncreasingNumber(12312222));

// const isIncreasingNumber = (n) => {
//   let myString = n.toString();

//   let myArr = myString.split("");

//   console.log(myArr); //Xet giảm dần từ trái qua phải

//   for (let i = 0; i < myArr.length; i++) {
//     if (myArr[i] < myArr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isIncreasingNumber(987654321));

// const isIncreasing = (n, x) => {
//   let newString = n.toString();
//   let newArr = newString.split(""); //Xét n có phải là số tăng dần đều với khoảng cách giữa 2 chữ số là x

//   for (let i = 0; i < newArr.length; i++) {
//     let check = newArr[i + 1] - newArr[i];
//     if (newArr[i] < newArr[i + 1] && check === x) {
//       return true;
//     }
//   }

//   return false;
// };
// console.log(isIncreasing(135, 1));

// function isPrime(n) {
//   if (n < 2) return false; //Kiểm tra n có phải là số nguyên tố
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(5));

// const isPerfectSquare = (n) => {
//   if (n < 3) return false; //Kiểm tra n có phải là số chính phương
//   for (let i = 1; i <= n; i++) {
//     if (Math.pow(i, 2) == n) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(isPerfectSquare(25));

// const isPerfectNumber = (n) => {
//   let total = 0,
//     flag = 0;
//   for (i = 1; i < n; i++) {
//     if (n % i == 0) total += i;
//   }
//   if (total == n && n != 0) flag = 1; //1 là số nguyên tố và 0 là không phải số nguyên tố
//   return flag;
// };
// console.log(isPerfectNumber(3));

// const countWords = (str) => {
//   let myString = str.split(" "); //Ðếm số từ có trong câu
//   console.log(myString.length);
// };

// countWords("tại sao vậy trời ơi");

// const statisticsWords = (str) => {
//   let arr = str.split(" ");    //Thống kê số lượng từ trong câu
//   let obj = {};
//   arr.forEach((item) => {
//     if (obj[item]) {
//       obj[item]++;
//     } else {
//       obj[item] = 1;
//     }
//   });
//   return obj;
// };
// console.log(
//   statisticsWords(
//     "start frontend start frontend frontend frontend frontend hello"
//   )
// );

// const statisticsCharacters = (str) => {
//   let arr = str.split("");
//   let result = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (result[arr[i]]) {
//       result[arr[i]]++;
//     } else {
//       result[arr[i]] = 1;
//     }
//   }
//   return result;
// };
// console.log(statisticsCharacters("Hello Hello"));       //Thống kê ký tự có trong câu

// function statisticsCharacters(str) {
//   let result = {};
//   for (let i = 0; i < str.length; i++) {
//     if (result[str[i]]) {
//       result[str[i]]++;
//     } else {
//       result[str[i]] = 1;
//     }
//   }
//   return result;
// }
// console.log(statisticsCharacters("Hello Hello"));

// const hasEvenNumberGreaterThanN = (numberList, n) => {
//   for (let i = 0; i <= numberList.length; i++) {
//     if (numberList[i] % 2 === 0 && numberList[i] > n) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(hasEvenNumberGreaterThanN([2, 3, 4, 10], 5)); //Kiểm tra có số chẵn lớn hơn n trong mảng

// const hasOddNumberDivisibleBy3 = (numberList) => {
//   for (let i = 0; i <= numberList.length; i++) {
//     if (numberList[i] % 3 === 0) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(hasOddNumberDivisibleBy3([1, 5, 7]));//Kiểm tra có số lẻ và chia hết cho 3

// const hasEasyFrontend = (wordList) => {
//   for (let i = 0; i <= wordList.length; i++) {
//     if (wordList[i] == "easy" && wordList[i + 1] == "frontend") {
//       return true;
//     } else if (wordList[i] == "easy frontend") {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(hasEasyFrontend(["easy", "frontend"])); //Kiểm tra có từ easy frontend trong mảng không

// const hasEasyFrontend = (wordList) => {
//   return (
//     (wordList.includes("easy") && wordList.includes("frontend")) ||
//     wordList.includes("easy frontend")
//   );
// };
// console.log(hasEasyFrontend(["frontend", "easy"]));
// const studentList = [
//   { id: 1, name: "Easy" },
//   { id: 2, name: "Frontend" },
// ];
// const hasStudent = (studentList, studentId) => {
//   for (let i = 0; i < studentList.length; i++) {
//     if (studentList[i].id === studentId) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(hasStudent(studentList, 2));

// const studentList = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];

// const check = (arr, studentID) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].id === studentID) return true;
//   }
//   return false;
// };
// console.log(check(studentList, 2)); //Kiểm tra có student có id nào đó trong mảng

// function hasStudent(studentList, studentId) {
//   return studentList.some((student) => student.id === studentId);
// }
// const studentList = [
//   { id: 1, name: "Easy" },
//   { id: 2, name: "Frontend" },
// ];
// console.log(hasStudent(studentList, 1));

// const studentList = [
//   { id: 1, name: "alice", gender: "male" },
//   { id: 2, name: "aliCE", gender: "female" },
//   { id: 3, name: "Easy Frontend", gender: "male" },
// ];
// const hasAlice = (studentList) => {
//   for (let i = 0; i < studentList.length; i++) {
//     if (studentList[i].name.toUpperCase() === "Alice".toUpperCase()) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(hasAlice(studentList)); //Kiểm tra có student giới tính là Nữ tên Alice

// const productList = [
//   { id: 1, name: "Iphone 16", isFreeShip: false, price: 10200500 },
//   { id: 2, name: "Iphone 16 Pro Max", isFreeShip: true, price: 1500000 },
// ];
// // true vì id sô ́ 2 thoa ̉ điê ̀u kiện đê ̀bài

// const hasFreeShip = (productList, price) => {
//   for (let i = 0; i < productList.length; i++) {
//     if (productList[i].isFreeShip === true && productList[i].price < price) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(hasFreeShip(productList, 10000000));

// const isIncreasingNumberList = (numberList) => {
//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] > numberList[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isIncreasingNumberList([1, 2, 3, 4, 5]));

// const isSymmetricList = (numberList) => {
//   for (let i = 0; i <= numberList.length / 2; i++) {
//     if (numberList[i] !== numberList[numberList.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(isSymmetricList([1, 2, 2]));//Kiểm tra mang có đối xứng không

// const hasFibonaciNumber = (numberList) => {
//   const fibonaci = [1, 1];
//   let i = 2;
//   while (fibonaci[i - 1] < 100) {
//     fibonaci[i] = fibonaci[i - 1] + fibonaci[i - 2];
//     i++;
//   }
//   return numberList.some((number) => fibonaci.includes(number));
// };
// console.log(hasFibonaciNumber([89])); // true

// const findMinPositive = (numberList) => {
//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] > 0 && numberList[i] < numberList[i + 1]) {
//       return numberList[i];
//     }
//   }
// };
// console.log(findMinPositive([-2, -5, 5, 9]));

// const findLongestWord = (wordList) => {
//   let longest = wordList[0];
//   for (let i = 0; i < wordList.length; i++) {
//     if (longest.length < wordList[i].length && longest[i].length <= 5) {
//       longest = wordList[i];
//     }
//   }
//   return longest;
// };
// console.log(findLongestWord(["development", "super"]));  //Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng

// const findFirstPositiveEven = (numberList) => {
//   for (let i = 0; i <= numberList.length; i++) {
//     if (numberList[i] > 0 && numberList[i] % 2 === 0) {
//       return numberList[i];
//     }
//   }
// };
// console.log(findFirstPositiveEven([-2, -3, 2, -4, 6, 8, 10]));    //Tìm số dương chẵn đầu tiên trong mảng

// const findLastNegativeOdd = (numberList) => {
//   for (let i = numberList.length - 1; i < numberList.length; i--) {
//     if (numberList[i] < 0 && numberList[i] % 2 !== 0) {
//       return numberList[i];
//     }
//   }
// };
// console.log(findLastNegativeOdd([-1, -3, -5, -9, 10]));    //Tìm số âm lẻ cuối cùng trong mảng

// const findSecondLargestNumber = (numberList) => {
//   numberList.sort(function (a, b) {
//     return a - b;
//   });
//   console.log("max= ", numberList[numberList.length - 1]);

//   let n = 2;
//   console.log("max thứ " + n + "= ", numberList[numberList.length - n]);
//   return numberList;
// };
// console.log(findSecondLargestNumber([1, 23, 45, 12, 31, 64, 87, 16, 48]));         //Tìm số lớn thứ 2 trong mảng

// const findLastPerfectSquare = (numberList) => {
//   for (let i = numberList.length - 1; i >= numberList.length; i--) {
//     if (Math.pow(i, 2) == numberList[i].length) {
//       return numberList[i];
//     }
//   }
// };

// console.log(findLastPerfectSquare([4, 16, 9, 25, 36, 40]));

// const countPositiveEvenNumbers = (numberList) => {
//   let dem = 0;
//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] % 2 === 0 && numberList[i] > 0) {
//       dem++;
//     }
//   }
//   return dem;
// };
// console.log(countPositiveEvenNumbers([-1, -2, 0, 2, 3, 4, 5, 6]));      //Ðếm số dương chẵn có trong mảng

// const countNumbers = (numberList) => {
//   let dem = 0;
//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i + 1] < numberList[i]) {
//       dem++;
//     }
//   }
//   return dem;
// };
// console.log(countNumbers([1, 2, 3, 10, 9, 8, 10]));     //Ðếm số mà nó nhỏ hơn số liền trước của nó

// const countWords = (wordList, n) => {
//   let dem = 0;
//   for (i = 0; i < wordList.length; i++) {
//     if (wordList[i].length >= n) {
//       dem++;
//     }
//   }
//   return dem;
// };
// console.log(countWords(["easy", "frontend"], 10));      //Ðếm số từ có độ dài lớn hơn n

// const countUniqueNumbers = (numberList) => {
//   let myVar;
//   let dem = 0;
//   for (i = 0; i < numberList.length; i++) {
//     myVar = numberList[i];
//     //console.log(myVar);
//     if (numberList[i + 1] !== myVar) {
//       dem++;
//     }
//   }
//   return dem;
// };
// console.log(countUniqueNumbers([1, 2, 3, 3, 2, 1]));    //Ðếm số lượng các số khác nhau có trong mảng

// function countNumbersNotInB(a, b) {
//   return a.filter((item) => !b.includes(item)).length;
// }
// console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5]));

// const countNumbersNotInB = (a, b) => {
//   let newArr = [];
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] !== b[j]) {
//         newArr.push(a[i]);
//       }
//       break;
//     }
//   }
//   return newArr.length;
// };

// console.log(countNumbersNotInB([1, 2, 3], [3, 4, 5]));   //Ðếm số lượng các số có trong mảng a mà không có trong mảng b

// const insert = (arr, newItem, k) => {
//   if (k > arr.length) {
//     arr.push(newItem);
//   } else if (k <= 0) {
//     arr.unshift(newItem);
//   } else {
//     arr.splice(k, 0, newItem);
//   }
//   return arr;
// };
// console.log(insert([1, 2, 3], 10, 2)); //Thêm một phần tử tại vị trí k

// const remove = (arr, k, n) => {
//   if (k >= arr.length && k < 0) {
//     arr.splice(k, 0);
//   } else if (k > 0) {
//     arr.splice(k, n);
//   }
//   return arr;
// };
// console.log(remove([1, 2, 3], 1, 2)); //Xoá một phần tử tại vị trí k

// const studentList = [
//   { id: 1, name: "Alice", marks: { math: 8 } },
//   { id: 2, name: "Bob", marks: { math: 9 } },
// ];                                                           // Note bài 6 trang 25

// const countStudents = (studentList, avgMark) => {
//   let dem = 0;
//   studentList.marks;
// };

// const studentList = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];
// const removeStudentById = (studentList, studentId) => {
//   const removeIndex = studentList.filter((item) => item.id !== studentId);
//   return removeIndex;
// };

// console.log(removeStudentById(studentList, 1));      //Xoá một student có id cho trước

// const cartItemList = [
//   { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
//   { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
// ];
// const calcCartTotal = (cartItemList) => {
//   return cartItemList.reduce(
//     (total, price) => total + price.product.price * price.quantity,
//     0
//   );
// };
// console.log(calcCartTotal(cartItemList));   //Tổng tiền của giỏ hàng

// const sumAllDigits = (numberList) => {
//   const myString = numberList.join(""); //biến 1 mảng thành 1 chuỗi
//   console.log(myString);
//   const myArr = myString.split(""); //biến 1 chuỗi thành 1 mảng nhiều phần tử
//   console.log(myArr);
//   const arrNum = myArr.map(Number); //biên 1 mảng kiểu chuỗi thành kiểu số
//   console.log(arrNum);
//   return arrNum.reduce((total, number) => total + number, 0);
// };
// console.log(sumAllDigits([1234, 55])); //Tổng của các chữ số trong mảng

// const sumAllMinDigits = (arr) => {
//   const arrMinDigits = arr.map((num) => {
//     const strNum = num.toString();
//     console.log(strNum);
//     const minDigit = strNum.split("").reduce((min, cur) => {
//       if (cur < min) {
//         return cur;
//       }
//       return min;
//     }, strNum[0]);
//     return parseInt(minDigit, 10);
//   });
//   return arrMinDigits.reduce((sum, cur) => sum + cur, 0);
// };
// console.log(sumAllMinDigits([123, 532]));

// function sumEvenNumbers(numberList) {
//   let sum = 0;
//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i] % 2 === 0 && numberList[i] > numberList[i - 1]) {
//       sum += numberList[i];
//     }
//   }
//   return sum;
// }
// console.log(sumEvenNumbers([2, 8, 5, 4]));   //Tổng các số chẳn mà nó lớn hơn số trước đó.

// const insert = (numberList, newNumber) => {
//   numberList.push(newNumber);
//   return numberList.sort((a, b) => {
//     return a - b;
//   });
// };
// console.log(insert([1, 2, 4], 3));
// //Cho một mảng đã được sắp xếp tăng dần. Cho một số, nhờ bạn add vào mảng nhưng phải đảm bảo mảng vẫn đc sắp xếp tăng dần.

// const removeDuplicatedNumbers=(numberList)=>{
//     numberList.filter(number=>number[i] ===)
// }

// function unique(arr) {
//   var newArr = [];
//   newArr = arr.filter(function (item) {
//     return newArr.includes(item) ? "" : newArr.push(item);
//   });
//   return newArr;
// }
// console.log(unique([1, 1, 2, 3, 5, 3, 1, 5, 6, 7, 4]));

// const uniqueArray = (numberList) => {
//   let newArr = [];
//   newArr = numberList.filter((item) => {
//     return newArr.includes(item) ? "" : newArr.push(item);
//   });
//   return newArr;
// };
// console.log(uniqueArray([1, 1, 2, 3, 2]));

// const removeDuplicatedNumbers = (numberList) => {
//   return numberList.reduce((preVal, cur) => {
//     if (preVal.indexOf(cur) === preVal.lastIndexOf(cur)) {
//       return [...preVal, cur];
//     }
//     return preVal.filter((p) => p !== cur);
//   }, []);
// };
// console.log(removeDuplicatedNumbers([1, 1, 2, 3, 2]));

// const removeDuplicatedNumbers=(numberList)=> {
//   const result = [];
//   const numberMap = {};
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     if (numberMap[number]) {
//       numberMap[number] += 1;
//     } else {
//       numberMap[number] = 1;
//     }
//   }
//   for (let i = 0; i < numberList.length; i++) {
//     const number = numberList[i];
//     if (numberMap[number] === 1) {
//       result.push(number);
//     }
//   }
//   return result;
// }
// console.log(removeDuplicatedNumbers([1, 1, 2, 3, 2]));
const removeDuplicatedNumbers = (arr) => {
  const remove = arr.filter((item, index) => arr.indexOf(item) !== index); //Ghi ra phần tử bị lặp lại
  //1 2 
  const a = arr.filter((item) => !remove.includes(item));
  //1, 1, 2, 3, 2: filter xóa bỏ 1 2 
  return a;
};
console.log(removeDuplicatedNumbers([1, 1, 2, 3, 2]));
