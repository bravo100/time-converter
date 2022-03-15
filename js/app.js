// Declear Variables
let
  oTime,
  ngTime,
  utc,
  error,
  output

// Some assignment

// Create a function to change time to pm
const pm = val => {
  val -= 12
  val = `${val} pm`
  
  return val
}

let time = ``;
document.querySelector(`.btn`).addEventListener(`click`, e => {
  e.preventDefault();
  ngTime = Number(document.querySelector(`.ngTime`).value);
  utc = Number(document.querySelector(`.utc`).value);
  output = document.querySelector(`.output`);
  error = false
  
  oTime = ngTime + utc;

  console.log(oTime);

  if (ngTime < 0 || ngTime > 24) {
    error = `Invalid input`;
  } else {
    if (ngTime >= 13 && ngTime <= 24) {
      ngTime = pm(ngTime);
    } else {
      ngTime = `${ngTime} am`;
    }
  }
  // Check if the oTime is a negative integer
  if (oTime < 0) {
  
    oTime += 24
  
  }
  
  if (oTime > 24) {
  
    oTime -= 24
  }
  
  // Check if the oTime is between 0 and 24 hours
  oTime = (oTime >= 13 && oTime <= 24) ? pm(oTime) : `${oTime} am`;
  
  // Output
  (error == false) ? output.innerHTML = (`${ngTime} Nigerian time is ${oTime} American time`) : console.error(`ERROR:: ${error}`);
});

// Check if time is either above 24 or below 0 hours
