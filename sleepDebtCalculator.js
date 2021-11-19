const getSleepHours = day => {
  switch(day){
    case 'Monday':
    return 8;
    break;
    case 'Tuesday':
    return 7;
    break;
    case 'Wednesday':
    return 6;
    break;
    case 'Thursday':
    return 7;
    break;
    case 'Friday':
    return 9;
    break;
    case 'Saturday':
    return 5;
    break;
    case 'Sunday':
    return 7;
    break;
  }
}
//console.log(getSleepHours('Tuesday'));

const getActualSleepHours = () => 7 + 7 + 6 + 7 +9 + 5 + 8;

/*
const getActualSleepHours = () => 
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
*/

const getIdealSleepHours= idealSleepHours => 
       idealSleepHours * 7;


//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(7);
 // let overSleepHours = getOverSleepHours();

 if( actualSleepHours === idealSleepHours ){
    return "Congratulations! You got your ideal amount of sleep!";
 } 
  else if( actualSleepHours > idealSleepHours ){
    return 'You sleep ' + (actualSleepHours - idealSleepHours) +  ' hour/s more than your ideal sleep hours.';
  }
  else if( actualSleepHours < idealSleepHours)
    return ' You need ' + (idealSleepHours - actualSleepHours) + " more hour/s of sleep.";
}

console.log(calculateSleepDebt());
 


