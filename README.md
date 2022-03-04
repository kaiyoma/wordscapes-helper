# Wordscapes Helper

A simple Node.js command line tool for finding those pesky missing words when playing
[Wordscapes](https://play.google.com/store/apps/details?id=com.peoplefun.wordcross).

Perhaps more usefully, this repo can also serve as a simple example of a working TypeScript project
for aspiring JavaScript developers. It uses Node, Babel, TypeScript, eslint, Jest, Prettier, and
typedoc, which are all used very frequently in modern web development.

## Running

Assuming that you already have [Node](https://nodejs.org/en/) and [pnpm](https://pnpm.io/)
installed, this will build and run the tool:

```text
pnpm install
npm run build:tool
node dist/find-words.js src/words.txt
```

After reading the words list and creating an internal dictionary structure, the tool will display a
prompt. Enter the letters of the puzzle to get a list of every possible English word that can be
made from those letters:

```text
Creating dictionary: [========================================] 100% | ETA: 0s | 370104/370104

Total words: 370,104
Discarded (too short): 454
Discarded (too long): 272,544
Dictionary words: 97,106

> estate

aes
aet
ase
ast
ate
...
```

To fine-tune the results, you can enter a second token (separated by a space) which represents the
shape of the missing word. Use underscores to denote unknown letters:

```text
> estate _a_e

ease
sate
tate
```

## Developing

If you want to hack on the code a bit, then you'll probably want to familiarize yourself with
`npm run build`, which will run all the code quality checks and generate some simple docs in
addition to performing the build itself:

```text
[4:13:31 PM] ■ started 'build'
[4:13:31 PM] ■ started 'clean'
[4:13:31 PM] ■ finished 'clean' in 0.57s
[4:13:31 PM] ■ started 'lint'
[4:14:14 PM] ■ finished 'lint' in 42.78s
[4:14:14 PM] ■ started 'prettier'
[4:14:15 PM] ■ finished 'prettier' in 1.12s
[4:14:15 PM] ■ started 'test'
[4:14:53 PM] ■ finished 'test' in 38.01s
[4:14:53 PM] ■ started 'type-check'
[4:14:58 PM] ■ finished 'type-check' in 4.54s
[4:14:58 PM] ■ started 'build:tool'
[4:15:17 PM] ■ finished 'build:tool' in 19.09s
[4:15:17 PM] ■ started 'build:docs'
[4:15:30 PM] ■ finished 'build:docs' in 13.17s
[4:15:30 PM] ■ finished 'build' in 119.29s
```
