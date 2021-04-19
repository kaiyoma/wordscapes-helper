export interface Alphabet {
  [letter: string]: number;
}

/**
 * Compute the alphabet of the given word.
 */
export function computeAlphabet(word: string): Alphabet {
  const alphabet: Alphabet = {};

  for (const letter of word) {
    if (letter in alphabet) {
      alphabet[letter] += 1;
    } else {
      alphabet[letter] = 1;
    }
  }

  return alphabet;
}

/**
 * Format a number a little more nicely by adding digit grouping.
 */
export function formatNumber(value: number): string {
  return value.toLocaleString([], { useGrouping: true });
}

/**
 * Determine if alphabet `a` wholly contains alphabet `b`. In other words, if `a` represented the
 * puzzle's letters, could a word with alphabet `b` be in the puzzle?
 */
export function isContained(a: Alphabet, b: Alphabet): boolean {
  return Object.keys(b).every((letter) => (a[letter] || 0) >= b[letter]);
}
