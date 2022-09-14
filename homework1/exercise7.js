// từ 
// a = [
//   { make: "audi", model: "r8", year: "2012" },
//   { make: "audi", model: "rs5", year: "2013" },
//   { make: "ford", model: "mustang", year: "2012" },
//   { make: "ford", model: "fusion", year: "2015" },
//   { make: "kia", model: "optima", year: "2012" }
// ];
// // Trả về
// b = {
//   audi: [
//     {
//       make: "audi",
//       model: "r8",
//       year: "2012"
//     },
//     {
//       make: "audi",
//       model: "rs5",
//       year: "2013"
//     }
//   ],
//   ford: [
//     {
//       make: "ford",
//       model: "mustang",
//       year: "2012"
//     },
//     {
//       make: "ford",
//       model: "fusion",
//       year: "2015"
//     }
//   ],
//   kia: [
//     {
//       make: "kia",
//       model: "optima",
//       year: "2012"
//     }
//   ]
// };

a = [
    { make: "audi", model: "r8", year: "2012" },
    { make: "audi", model: "rs5", year: "2013" },
    { make: "ford", model: "mustang", year: "2012" },
    { make: "ford", model: "fusion", year: "2015" },
    { make: "kia", model: "optima", year: "2012" }
];
const b = {};
const c = []
a.forEach(element =>  c.push(element.make));

c.forEach( v1 => {
    a.forEach( v2 => {
        if(v2.make === "audi") { b[v1].push(v2)};
        if(v2.make === "ford") { b[v1].push(v2)};
        if(v2.make === "kia") { b[v1].push(v2)};
    })
});

console.log(b);
// a.forEach( v1 => {
//     b.forEach( v2 => {
//         if(v1.make === "audi") { v2 = [...v1]}
//         if
//     })
// })