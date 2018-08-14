let number = Math.floor(Math.random() * 1000);
let early = true;
const age = 18;
if(early && age > 18){
  number += 1000;
}

if(early && age > 18){
  console.log( `Your race will begin at 9:30 and your race number is: ${number}.`);
} else if (!early && age > 18){
  console.log(`Your race will start at 11:00 and your race number is: ${number}.`);
} else if (age < 18){
  console.log(`Your race will start at 12:30 and your race number is: ${number}.`);
} else {
  console.log('Please see registration desk.');
}
