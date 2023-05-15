process.stdin.setEncoding('utf8');
process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on('readable', function() {
  userName = process.stdin.read();
  if (userName !== null) {
    process.stdout.write(`Your name is: ${userName}`);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
});