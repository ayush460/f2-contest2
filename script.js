/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(function(arr){
   if(arr.marks>50){
    console.log(arr);
   }
  
});

  
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(arr){
    if(arr.marks>50){
      console.log(arr);
    }

  });
}

function addData() {
  //Write your code here, just console.log
  let newStudent= { id: 4, name: "Ayush", age: "20", marks: 99 }
  arr.push(newStudent);
  console.log(arr);

}

function removeFailedStudent() {
  //Write your code here, just console.log
  let failStudent=arr.filter((student)=>student.mark<50)
  console.log(failStudent);
}

function concatenateArray() {
  //Write your code here, just console.log
  let new_Arr = [
    { id: 4, name: "anoop", age: "22", marks: 80 },
    { id: 5, name: "aryak", age: "21", marks: 50 },
    { id: 6, name: "bhanu", age: "23", marks: 50 },
  ];
  let concatinatearr=arr.concat(new_Arr);
  console.log(concatenateArray)
 
}
