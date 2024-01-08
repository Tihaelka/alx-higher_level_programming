#!/usr/bin/node

// Check if there is at least one command line argument
if (process.argv.length >= 2) {
  const argumentToPrint = process.argv[1];
  console.log("No argument:", argumentToPrint);
} else {
  console.log("argument found.");
}

