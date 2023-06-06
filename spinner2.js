const spinner = ["|", "/", "-", "\\"];
let delay = 50;

for (let i = 0; i < spinner.length; i++) {


  setTimeout(() => {
    process.stdout.write(spinner[i]);
    
  }, delay);
  delay += 100;
  console.log();
}

// setTimeout(() => {
//   process.stdout.write(`\r|  `);
// }, 100);

// setTimeout(() => {
//   process.stdout.write(`\r/  `);
// }, 300);

// setTimeout(() => {
//   process.stdout.write(`\r-  `);
// }, 500);

// setTimeout(() => {
//   process.stdout.write(`\r\\  `);
  
// }, 700);

// setTimeout(() => {
//   process.stdout.write(`\r|  `);
// }, 800);
// setTimeout(() => {
//   process.stdout.write(`\r/  `);
// }, 900);

// setTimeout(() => {
//   process.stdout.write(`\r-  `);
// }, 1000);

// setTimeout(() => {
//   process.stdout.write(`\r\\  `);
  
// }, 1100);

// setTimeout(() => {
//   process.stdout.write(`\r|  `);
// }, 1200);
// setTimeout(() => {
//   process.stdout.write(`\n`);
// }, 1300);