function scuberGreetingForFeet(ride){
  // Write your code here!
  let result
  if (ride <= 400){
    result = 'This one is on me!';
    return result
  } else if (ride > 400 && ride <2000){
    result = 'That will be twenty bucks.';
    return result
  } else if (ride >2000 && ride <2500){
    result = 'I will gladly take your thirty bucks.';
    return result
  } else if (ride >2500){
    result = 'No can do.';
    return result
  }
}
scuberGreetingForFeet(199);

function ternaryCheckCity(NYC){
  // Write your code here!
  return NYC === 'NYC'
  ? 'Ok, sounds good.'
  : 'No go.';
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  let result1
  switch (tip){
    case 'generous':
      result1 = 'Thank you so much.';
      return result1
      break;
    case 'not as generous':
      result1 = 'Thank you.';
      return result1
      break;
    default:
      result1 = 'Bye.';
      return result1
  }
}

