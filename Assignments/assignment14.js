
//problem1
let e= [
  {
    "name": "Sam",
    "department":"Tech",
    "Role": "Manager",
    "Salary":40000,
    "raiseeligible":true,
    //problem6
    "wfh":true
  },
  {
    "name": "Mary",
    "department":"Finance",
    "Role": "Trainee",
    "Salary":18500,
    "raiseeligible":true,
    "wfh":false
  },
  {
    "name": "Bill",
    "department":"HR",
    "Role": "Executive",
    "Salary":25600,
    "raiseeligible":false,
    "wfh":false
  },
  //problem3
  {
    "name": "Anna",
    "department":"Tech",
    "Role": "Executive",
    "Salary":25600,
    "raiseeligible":false,
    "wfh":true
  }
]
console.log(e);

//problem2
let c={"CompanyName":"TechStars",
"Website":"www.techstars.site",
"employees":e

}
console.log(c);
//problem4
let total=0;
for(let employee of e){
  total+=employee.Salary
}

console.log(total);

//problem5
for(let employee of e){
  if(employee.raiseeligible){
    employee.Salary*=1.1;
    employee.raiseeligible=false;
  }
}

console.log(e);
