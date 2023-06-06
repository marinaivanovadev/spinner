const spinner = ["|", "/", "-", "\\", "|"];
let delay = 0;

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
    process.stdout.write(`\r`);
  }, delay);
  delay += 100;
}

setTimeout(() => {
  process.stdout.write(`\n`);
}, delay);


