// Java arrays are resizable 
// js me jb bhi array me copy operation perform  krnge toh voh shallow copy banata hai

// const myArr = [0,1,2,3,4,5];
// const myHeros=["shakiman","naagraj"];

// const myArr2= new Array(3,4,5,6)
// console.log(myArr[0]);

// Array Methods

// myArr.push(6); //ye end me value ko add krta hai
// console.log(myArr)

//myArr.pop(); //ye end se value ko remove krta hai 
// console.log(myArr)

//myArr.unshift(9); //isse arr ki starting me value add hojati hai
//console.log(myArr);

// myArr.shift(); //isse starting ki value remove hojati hai
// console.log(myArr);

//console.log(myArr.includes(9)); //ye puchne ke liye  hai ki arr me koi no. present hai ya nahi..eg isme 9 present hai ya nahi janrhe hai ..

//console.log(myArr.indexOf(3)); //konse index me present hai ye value..

// const newArr= myArr.join();

// console.log(myArr);
// console.log(typeof newArr); //string 

/////////////////////slice AND splice ///////////


// console.log("A", myArr);
// const myn1 = myArr.slice(1,3); //array ko  print krana h 1 se 3rd index tk.. but 3rd index print nahi hoga isme 
// console.log(myn1);

// console.log("B", myArr);
// const myn2=myArr.splice(1,3); //isme esa nahi hota ki last index bhi include hojata hai ..isme original arr se vo portion pura hi nikal jata hai ...
// console.log(myn2);

// slice se original array me koi chnages nahi aate hai but splice se original array hi manipulate hojata hai 

                //////****************************************///////

// const marvel_heros=["thor","ironman","spiderman"];
// const dc_heros=["superman","batman","flash"];

// marvel_heros.push(dc_heros); //isse pura arr ek index me push hojata hai 
// console.log(marvel_heros);

// const allArr=(marvel_heros.concat(dc_heros)); // concat proper array ko merge krta hai 
// console.log(allArr);

// const all_new_heros=[...marvel_heros,...dc_heros]; //isse bhi dono arrays systematically merge hojate hai ...
// console.log(all_new_heros);


//const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]; //situation in which there is array inside the array and another array inside that array which is already inside the array...


//const real_another_array=another_array.flat(Infinity); // issse array sort(mtln ek ek individual element )hokr ek hi array me convert hojate hai 
//console.log(real_another_array);

//console.log(Array.from({name:"hitesh"})); //output :[] //empty string ,qki ise batana pdhta hai ki konsi key se array bnana hai ... *interesting 

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3)); 















