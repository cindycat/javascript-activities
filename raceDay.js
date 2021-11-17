let raceNumber = Math.floor(Math.random() * 1000);

let voterRegisteredEarly = false ;

let runnerAge = 18;

if( runnerAge > 18 && voterRegisteredEarly ){
  raceNumber += 1000;
}

if( runnerAge > 18 && voterRegisteredEarly ){
  console.log(`Your race will be at 9:30 am with race number: ${raceNumber}`);
}else if(runnerAge > 18 && voterRegisteredEarly === false ){
  console.log(`You will race at 11:00 am with race number: ${raceNumber}`);
}else if(runnerAge < 18 ){
  console.log(`You will race at 12:30 pm with race number: ${raceNumber}`);
}else{
  console.log("Please go directly to the registration desk. ")
}
