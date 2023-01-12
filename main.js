// var fullName ="tao la tao "

// console.log(fullName)
// prompt(fullName)

// var a = 4, b=2

// a += 2

// console.log(a)

// var age=16;

// var muaruou=age>10;

// console.log(muaruou);

// function showMessage(message) {
//     console.log(message);
// }

// showMessage("Hi anh em F8!");

// function sum() {

// }

// var firstName = 'Toan';
// var lastName = 'Nguyen';

// console.log(`Toi la: ${firstName} ${lastName}`);
// function getContentLength(content) {
//     let textLength = content.length;
//     return textLength;
// }

// // Mở tab Console để xem kết quả trực quan
// console.log(getContentLength('JavaScript'));
// console.log(getContentLength('Hello World'));

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {
//     let coursesStr = str.split(', ');
//     return coursesStr;
// }

// // Expected results
// console.log(strToArray(coursesStr))

// // Output: ['HTML & CSS', 'JavaScript', 'ReactJS']

// function isNumber(value){
//     if(typeof value == 'number'){
//         return true;
//     } else
//         return false ;
// }

// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// function isNumber (value) {
//     return typeof value === 'number' && !isNaN(value)
// }

// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / 'abc')); // false

// function joinWithCharacter(numberList, charactor) {
//     return numberList.join(charactor)
// }

// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"
// Viết hàm tại đây
// function getLastElement(animals){
//     return animals.slice(-1);
// }

// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// function Animal(name,leg,speed){//object constructor
//     this.name=name;
//     this.leg=leg;
//     this.speed=speed;
// }
// var parrot= new Animal('vet',2,45)
// console.log(parrot)

// function Student(firstName,lastName) {//Object prototye
//     this.firstName=firstName;
//     this.lastName=lastName;

// }
// Student.prototype.getFullName= function(){
//         return `${this.firstName} ${this.lastName}`
// }

// // Ví dụ khi sử dụng
// var student = new Student('Long', 'Bui');

// console.log(student.firstName);  // 'Long'
// console.log(student.lastName);  // 'Bui'
// console.log(student.getFullName());  // 'Long Bui'

// var getRandomItem = function(random){
//     return Math.random;
// }
// console.log(getRandomItem(random))

// function run(a) {
//     if (a%3==0 && a%5!=0){
//         return 1;
//     } else if (a%5==0 && a%3!=0){
//         return 2;
//     } else if(a%15==0){
//         return 3;
//     }
// }

// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3

// function getCanVoteMessage(age){
//     return age >=18 ? 'Bạn có thể bỏ phiếu' :'Bạn chưa được bỏ phiếu'
// }

// // Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

// function getRandNumbers(min,max,length){
//     var numberList=[];

//     for(var i=0; i<length; i++){
//         numberList.push(Math.random() * (max - min) + min)
//     }
//     return numberList;

// }
// console.log(getRandNumbers(1,99,1))

// function getTotal(arr) {
//     var sum = 0;
//     var arrLength = arr.length;
//     for(var i = 0; i < arrLength; i++) {
//          sum += arr[i];
//     }
//     return sum;
// }

// console.log(getTotal([4,5,-3]))

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]
// function getTotal(orders){
//     var sum = 0;
//     var ordersLength = orders.length;
//     for (var i = 0; i < ordersLength; i++) {
//         sum += orders[i].price }
//         return sum
// }

// // Expected results:
// console.log(getTotal(orders)) // Output: 8700000
// function run(object) {
//     var results = [];

//     for (var key in object){
//         results.push(`Thuộc tính ${key} có giá trị ${object[key]}`)
//     }
//     return results;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// // Output:
// // [
// //     "Thuộc tính name có giá trị Nguyen Van A",
// //     "Thuộc tính age có giá trị 16"
// // ]
// const sports = [
//     {
//         name: 'Bóng rổ',
//         like: 6
//     },
//     {
//         name: 'Bơi lội',
//         like: 5
//     },
//     {
//         name: 'Bóng đá',
//         like: 10
//     },
// ]

// function getMostFavoriteSport(x) {
//     var arr = x.filter(function(y) {
//         return y.like > 5;
//     });
//     return arr;
// };
// // Kỳ vọng
// console.log(getMostFavoriteSport(sports))
// // Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// function getTotalGold(x){
//     var totalGold = x.reduce((a,b) => a+b.gold,0)
//     return totalGold
// }

// // Expected results:
// console.log(getTotalGold(sports)) // Output: 23

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];
//     function calculateRating(numberList) {
//       var filmNolan = numberList.filter(function(film, index){
//           return film.Director == "Christopher Nolan"
//       });

//       var totalEqual = filmNolan.reduce(function(total, score){
//           return (total + Number(score.imdbRating));
//       }, 0);

//       return totalEqual / filmNolan.length;
//     }

//   // Expected results
//   console.log(calculateRating(watchList)); // Output: 8.675

// function arrToObj(arr){
//   return arr.reduce(function(total,item){
//        total[item[0]] = item[1]
//        return total
//        },{}) }

// // Expected results:
// var arr = [
//   ['name', 'Sơn Đặng'],
//   ['age', 18],
// ];
// console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }

// function sumCb(a, b) {
//   return a+b
// }
// function subCb(a, b) {
//   return a-b
// }
// function multiCb(a, b) {
//   return a*b
// }function divCb(a, b) {
//   return a/b
// }

// function caculate(a, b, cb) {
//   return cb(a, b);
// }

// console.log(caculate(1, 2, sumCb))
// console.log(caculate(1, 2, subCb))
// console.log(caculate(1, 2, multiCb))
// console.log(caculate(3, 1, divCb))

// Array.prototype.myMap = function(numberList) {
//   var numberListLength = this.length, output = []
//   for ( var i = 0; i < numberListLength; i++) {
//       output.push(numberList(this[i],i))
//   }
//       return output
// }

// // Expected results
// const numbers = [1, 2, 3];

// console.log(numbers.myMap(function (number) {
//     return number * 2;
// })) // Output: [2, 4, 6]

// console.log(numbers.myMap(function (number, index) {
//     return number * index;
// })) // Output: [0, 2, 6]

// Array.prototype.myFilter = function(cb) {
//     var output = [];

//     for (var index in this){
//         if(this.hasOwnProperty(index)){
//             var result = cb(this[index],index,this);
//             if (result){
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }

// /**
// Expected results:
// */
// const numbers = [1, 2, 3, 4];

// console.log(numbers.myFilter(function (number) {
//     return number % 2 === 0;
// }));// Output: [2, 4]

// console.log(numbers.myFilter(function (number, index) {
//     return index % 2 === 0;
// })); //Output: [1, 3]

// console.log(numbers.myFilter(function (number, index, numberList) {
//     return numberList.length % 2 === 0;
// })); //Output: [1, 2, 3, 4]

// Array.prototype.mySome = function(cb) {
//     for (var index in this){
//         if  (this.hasOwnProperty(index)){
//             if(cb(this[index],index,this)){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// /**
// Expected results:
// */
// const numbers = [1, 3, 3, 5];

// console.log(numbers.mySome(function (number) {
//     return number % 2 === 0;
// })); //Output: false

// console.log(numbers.mySome(function (number, index) {
//     return index % 2 === 0;
// })); //Output: true

// console.log(numbers.mySome(function (number, index, numberList) {
//     return numberList.length % 2 === 0;
// })); //Output: true

// Array.prototype.myEvery = function(cb) {
//     var output = true;

//     for (var index in this){
//         if (this.hasOwnProperty(index)){
//             var result = cb (this[index],index,this)
//             if(!result){
//                 output = false;
//                 break;
//             }
//         }
//     }
//     return output;
// }

// // Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, numberList) {
//     return numberList.length % 2 === 0;
// })); // Output: true

// var numberList=['mot','hai','ba'];

// var [a,b, ...rest]=numberList;

// console.log(a);
// console.log(a, rest);

// var x=17865486;

// if(typeof x=='number'){
//     console.log('x is a number');
// }else{
//     console.log('x is not a number')
// }

// var c=new Array(3);
// dem = 0;
// for(i=0;i<3;i++)
// {
//     c[i]= new Array(3);
//     console.log(c[i])
//     for(j=0;j<3;j++){

//         c[i][j]=++dem;
//         console.log(c[i][j])
//     }
// }
// console.log(c)

// var a= [1,2,3,4,5,6];

// a.splice(0,3,7,8,9);

// console.log(a)

// var numbersnumberList=[2,4,5,1,34];

// function isZaroAbove(element){
//     return element > 0
// }

// if(numbersnumberList.every(isZaroAbove))
// alert('All elements inside numberList is above 0 in value!')

// var mynumberList= ['sang','nam','bao','nguyen','toan'];

// var abc=mynumberList.sort();
// console.log("myArr", mynumberList)
// console.log("abc", abc)

// var a1=['bao', 'nam', 'nguyen', 'sang', 'toan'];

// var a2=['bao', 'nam', 'nguyen', 'sang', 'toan'];

// var a3=['bao', 'nam', 'nguyen', 'sang', 'toan'];

// console.log(abc,mynumberList)

// console.log(mynumberList===abc,mynumberList===a1,mynumberList===a2,mynumberList===a3)

// const a = {
//     value:1500
// };

// const b = [1000];

// function dosomethinggreat(obj, arr){
//     obj.value = 3500;
//     arr.push(obj.value)
// }

// b.push(a.value) // => b = [1000, 1500]

// dosomethinggreat(a,b);

// console.log(b) // => b = []

// // == ===

// let x = "3";
// let y = 3 ;

// console.log(x == y);
// console.log(x === y);

// const a = 1000;

// const b = {
//     value: 2000
// };

// function dosomethingcool(number,obj){
//     number = 1500;
//     obj.value = 2500;
// }

// dosomethingcool(a,b);// ->a:1000 b.value:2500
// console.log(a)
// console.log(b)
// console.log(a+b.value)

// var str='One;Two;Three;Four;Five;Six;Seven;Eight;Nine;Ten';
// var arr = str.split(';');
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]+'<br>')
// }

// var numbersnumberList = [-3,5,10,16];
// // function doublelt(element){
// //     return element*2
// // }
// var doubleldnumberList = numbersnumberList.map((element)=>{
//     return element*2
// })
// console.log(doubleldnumberList)

// var number=[45,6,3,64,75,65,34]

// var sorted = number.sort(()=> 0.5 -Math.random())

// console.log(sorted)

// let fruits = ["Apples", "Pear", "Orange"];

// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana");

// // what's in fruits?
// alert( fruits.length );

// const arr = [1, 4, 6, 7];

// const isArray = (arr) => {
//   if (!Array.isArray(arr)) return false;

//   return true;
// };

// console.log(isArray(arr));

// function laSoNguyenDuong(value) {
//   return Number.isInteger(value) && value > 0;
// }

// console.log(laSoNguyenDuong(-23));

// function change_backgroud() {
//   var divs = document.getElementsByTagName("div");
//   for (var i = 0; i < divs.length; i++) {
//     // Vị trí chẵn => màu đỏ
//     if ((i + 1) % 2 == 0) {
//       divs[i].style.background = "red";
//     } else {
//       // Vị trí lẽ => màu xanh
//       divs[i].style.background = "blue";
//     }
//   }
// }

// let a =;
// a = prompt("Nhập vào số a", a);
// for (var i = 0; i < a.length; i++) {
//   if (a % 2 == 0) {
//     console.log("a là số chẵn");
//   } else {
//     console.log("a là số lẻ");
//   }
// }

// const arr = [1, 2, 3, 4, 5];
// const totalOdd = (arr) => {
//   if (!Array.isArray(arr)) return false;

//   let total = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       total = total + arr[i];
//       console.log(arr[i]);
//     }
//   }

//   return total;
// };
// console.log(totalOdd(arr));

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let odds = arr.filter((n) => n % 2 == 1);
// console.log(odds);
