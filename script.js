// function Sum(a, b){
//     return a+b;
// }

// function Display(batch, month){
//     console.log(`I am from EA${batch} Month: ${month}`);
// }

// Display(Sum(10, 12),"Feb");

// let count = 0;
// setTimeout(() => {
//     console.log(++count);
//     setTimeout(() => {
//         console.log(++count);
//         setTimeout(() => {
//             console.log(++count);
//             setTimeout(() => {
//                 console.log(++count);
//                 setTimeout(() => {
//                     console.log(++count);
//                     setTimeout(() => {
//                         console.log(++count);
//                         setTimeout(() =>{
//                             console.log(++count);
//                         }, 7000);
//                     }, 6000);
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

// const P1 = new Promise((res, rej)=>{
//     let name = "mahima";
//     if(name === 'mahima'){
//         res('My name is Mahima');
//     }
//     else{
//         rej('Sorry, Enter valid name.')
//     }
// })
// P1.then((d) => console.log(d)).catch((err) => console.log(err))

// function print(){
//     setTimeout(()=>{
//         console.log("hii");
//     }, 1000)
// }
// function Display(print){
//     print();
// }
// Display(print);


// setTimeout(()=>{
//     console.log("a");
//     setTimeout(()=>{
//         console.log("b");
//         setTimeout(()=>{
//             console.log("c");
//             setTimeout(()=>{
//                 console.log("d");
//                 setTimeout(()=>{
//                     console.log("e");
//                 },10000)
//             },8000)
//         },6000)
//     },4000)
// },2000)

// let count = 15;
// const promise = new Promise((res, rej)=>{
//     if(count === 15){
//         res("Resloved");
//     }
//     else
//     {
//         rej("Failed")
//     }
// });
// promise.then((data)=> console.log(data)).catch((error)=>console.log(error))

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });



  // function Abc(nums){
  //   return new Promise((res, rej) => {
  //       let count = 1;
  //       for(let i = 1; i < nums ; i++){
  //           setTimeout(() => {
  //               console.log(count++);
  //               res()
  //           }, i * 1000);
  //       }
  //   })
  // }

  // Abc(8).then()

  function resolvePromise(alpha, timeout){
    return new Promise((resolve, reject) => {
          setTimeout(() => {
              console.log(alpha)
              resolve("Promise is Resolved Successfully...");
          }, timeout);
    })
}
function Number(){
    resolvePromise('1', 1000)
    .then(()=> resolvePromise("2", 2000))
    .then(()=> resolvePromise("3", 3000))
   .then(()=> resolvePromise("4", 4000))
    .then(()=> resolvePromise("5", 5000))
    .then(()=> resolvePromise("6", 6000))
    .then(()=> resolvePromise("7", 7000))
}
Number();
