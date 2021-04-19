import { SingleBar } from 'cli-progress';
import { readFileSync } from 'fs';
import { createInterface } from 'readline';

import { Alphabet, computeAlphabet, formatNumber, isContained } from './lib';

if (process.argv.length !== 3) {
  console.log('Usage: find-words <words text file>');
  process.exit(1);
}

// Wordscapes constants
const MIN_LENGTH = 3;
const MAX_LENGTH = 7;

// Read the words list and initialize the progress bar
const words = readFileSync(process.argv[2], { encoding: 'utf-8' }).split('\n');
const format = 'Creating dictionary: [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}';
const progress = new SingleBar({ format });
progress.start(words.length, 0);

// Accounting
let numWordsTooShort = 0;
let numWordsTooLong = 0;

interface Dictionary {
  [word: string]: Alphabet;
}

// Process the raw English words into our dictionary format
const dictionary: Dictionary = {};
words.forEach((word) => {
  progress.increment();

  if (word.length < MIN_LENGTH) {
    numWordsTooShort += 1;
  } else if (word.length > MAX_LENGTH) {
    numWordsTooLong += 1;
  } else {
    dictionary[word] = computeAlphabet(word);
  }
});

progress.stop();

// Print stats
console.log();
console.log(`Total words: ${formatNumber(words.length)}`);
console.log(`Discarded (too short): ${formatNumber(numWordsTooShort)}`);
console.log(`Discarded (too long): ${formatNumber(numWordsTooLong)}`);
console.log(`Dictionary words: ${formatNumber(Object.keys(dictionary).length)}`);
console.log();

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.prompt();

// Read input from the user and print matching words
rl.on('line', (line) => {
  const tokens = line.split(' ');
  const puzzle = tokens[0];
  const regex = tokens[1] ? new RegExp('^' + tokens[1].replace(/_/g, '[a-z]') + '$') : null;
  console.log();

  for (const word of Object.keys(dictionary)) {
    if (isContained(computeAlphabet(puzzle), dictionary[word])) {
      if (!regex || regex.test(word)) {
        console.log(word);
      }
    }
  }

  console.log();
  rl.prompt();
});
