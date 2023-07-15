const input = [
    {
      name: 'Hendrick',
      dob: '1853-07-18T00:00:00.000Z',
      regNo: '041',
    },
    {
      name: 'Albert',
      dob: '1910-03-14T00:00:00.000Z',
      regNo: '033',
    },
    {
      name: 'Marie',
      dob: '1953-11-07T00:00:00.000Z',
      regNo: '024',
    },
    {
      name: 'Neils',
      dob: '1853-10-07T00:00:00.000Z',
      regNo: '02',
    },
    {
      name: 'Max',
      dob: '1853-04-23T00:00:00.000Z',
      regNo: '014',
    },
    {
      name: 'Erwin',
      dob: '1854-08-12T00:00:00.000Z',
      regNo: '09',
    },
    {
      name: 'Auguste',
      dob: '1854-01-28T00:00:00.000Z',
      regNo: '08',
    },
    {
      name: 'Karl',
      dob: '1852-12-05T00:00:00.000Z',
      regNo: '120',
    },
    {
      name: 'Louis', 
      dob: '1852-08-15T00:00:00.000Z',
      regNo: '022',
    },
    {
      name: 'Arthur',
      dob: '1892-09-10T00:00:00.000Z',
      regNo: '321',
    },
    {
      name: 'Paul',
      dob: '1902-08-08T00:00:00.000Z',
      regNo: '055',
    },
    {
      name: 'William',
      dob: '1890-03-31T00:00:00.000Z',
      regNo: '013',
    },
    {
      name: 'Owen',
      dob: '1853-04-26T00:00:00.000Z',
      regNo: '052',
    },
    {
      name: 'Martin',
      dob: '1854-02-15T00:00:00.000Z',
      regNo: '063',
    },
    {
      name: 'Guye',
      dob: '1854-10-15T00:00:00.000Z',
      regNo: '084',
    },
    {
      name: 'Charles',
      dob: '1954-02-14T00:00:00.000Z',
      regNo: '091',
    },
  ];




//   let user =  [ { name: 'Max',
//   dob: '1853-04-23T00:00:00.000Z',
//   regNo: '014',
//   age: 166 },
// { name: 'Owen',
//   dob: '1853-04-26T00:00:00.000Z',
//   regNo: '052',
//   age: 166 },
// { name: 'Karl',
//   dob: '1852-12-05T00:00:00.000Z',
//   regNo: '120',
//   age: 167 } ]

// function checkAge(user){
//   let age = []
//   for(let i = 0; i < user.length; i++){
//      age.push(user[i].age)
//   }
//    let oldest = 0;
//     oldest = age.sort((a,b)=>b-a)
//    return oldest[0]
// }

// function sumAge(user){
//   let sum = 0;
//   for(let i of user){
//     sum += i.age
//   }
//   return sum
// }

// function regNos(user){
//   let reg = []
//   for(let i of user){
//     reg.push(+i.regNo)
//   }
//   reg.sort((a,b)=>a-b)
//   return reg
// }






function classifier(input) {
  let newInput = input.slice();
  let groups = [];
  let result = {

  }
  function checkAge(newInput){
    let age = []
    for(let i = 0; i < newInput.length; i++){
       age.push(newInput[i].age)
    }
     let oldest = 0;
      oldest = age.sort((a,b)=>b-a)
     return oldest[0]
  }
  
  function sumAge(newInput){
    let sum = 0;
    for(let i of newInput){
      sum += i.age
    }
    return sum
  }
  
  function regNos(newInput){
    let reg = []
    for(let i of newInput){
      reg.push(+i.regNo)
    }
    reg.sort((a,b)=>a-b)
    return reg
  }








 // function to insert age inside the input/newInput
  for(let index of newInput){
    index.age = 2019 - new Date(index.dob).getFullYear()
  }
   newInput.sort((a,b)=>{return a.age-b.age})
  
   for(let i of newInput){
    if(groups.length===0){groups.push([i])}
   }
   

    
   for(let i = 1; i < newInput.length; i++){
    let compareArr = groups[groups.length-1]
    let newCompareArr = compareArr[compareArr.length -1]

    if(newInput[i].age-newCompareArr.age > 5 || compareArr.length ===3){
        groups.push([newInput[i]])
   }else {
    compareArr.push(newInput[i])
 }

   } 

   result.noOfGroups = groups.length;
   for(let i = 0; i < groups.length; i++){
    result[`group${i+1}`] = {
      members:groups[i],
      oldest: checkAge(groups[i]),
      sum: sumAge(groups[i]),
      regNos: regNos(groups[i])
    }
   }
   
 return result
  
  
  }


   
  

//console.log(regNos(newInput))
console.log(classifier(input))
export default classifier;
