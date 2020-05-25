//1.-Use a do... while loop to console.log the numbers form 1 to 1000
console.log("1: Print a number form 1 to 1000")
let i = 0;
do {
  i++;
  console.log(i)
}
while (i < 1000);
console.log("");

//2.-Create an object (array)
console.log("2:Create an object (array) ")
let girl = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
console.log("");

//3.-Use a for... in loop and if
console.log("3: Use a loop and print de value associated with the key birthDate")
for (let key in girl) {
  if (key == "birthDate"){
    let birthYear = girl["birthDate"];
    // gran only the year
    if (birthYear) { // console log only if year of birthdate is odd number
      console.log(girl["birthDate"]);
    }
  }
}
console.log("");

//4.-Create an arrayOfPersons
console.log("4: Make an array of persons")
let arrayOfPersons = [
  {
    firstName: "Adams",
    lastName: "Smith",
    birthDate: "Dec 4, 1999",
    gender: "male"
  },
  {
    firstName: "Rachel",
    lastName: "Green",
    birthDate: "Aug 19, 2000",
    gender: "female"
  },
  {
    firstName: "Williams",
    lastName: "Carter",
    birthDate: "May 2, 1983",
    gender: "male"
  },
  {
    firstName: "Cyndi",
    lastName: "Geller",
    birthDate: "Feb 9, 1996",
    gender: "female"
  }
];
console.log("");

//5.-Use .map()
console.log("5: Print their fullname")
console.log(arrayOfPersons.map(item => item.firstName + " " + item.lastName));
console.log("");

//6.-Use .filter()
console.log("4: Filter only males in the array")
console.log(arrayOfPersons.filter(item => item.gender == "male"));
console.log("");

//7.-Use .filer()
console.log("7: Filter the person that were born before Jan 1, 1990 ")
console.log(arrayOfPersons.filter((year) => year["birthDate"].match(/\d{4}/) < "1990"));
console.log("");
