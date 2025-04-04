const args = process.argv;

if (args.length < 3) {
  console.log("Usage: node greet.js [YourName]");
} else {
  const name = args[2]; // Grab the name
  console.log(`Hello, ${name}!`);
}
