const spinner = ["|", "/", "-", "\\", "|"];
let delay = 50;

for (let i = 0; i < spinner.length; i++) {


  setTimeout(() => {
    process.stdout.write(spinner[i]);
    
  }, delay);
  delay += 100;

}


// const spinner = ["|", "/", "-", "\\", "|"];
// let delay = 100;

// for (let i = 0; i < spinner.length; i++) {
//   setTimeout(() => {
   
//     process.stdout.write(spinner[i]);
  
//   }, delay);
//   delay += 100;
//}

setTimeout(() => { // new line
  process.stdout.write(`\n`);
}, delay);