# Wordscapes Helper

A simple Node.js command line tool for finding those pesky missing words when playing
[Wordscapes](https://play.google.com/store/apps/details?id=com.peoplefun.wordcross).

Perhaps more usefully, this repo can also serve as a simple example of a working TypeScript project
for aspiring JavaScript developers. It uses Node, Babel, TypeScript, eslint, Jest, Prettier, and
typedoc, which are all used very frequently in modern web development.

## Running

Assuming that you already have [Node](https://nodejs.org/en/) and [yarn](https://yarnpkg.com/)
installed, this will build and run the tool:

```text
yarn install
yarn run build:tool
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
`yarn run build`, which will run all the code quality checks and generate some simple docs in
addition to performing the build itself:

```text
$ yarn run build
yarn run v1.22.5
$ bash build.sh
PASS clean (1s)
PASS prettier (0s)
PASS lint (4s)
PASS test (2s)
PASS type-check (4s)
PASS build:tool (1s)
PASS build:docs (5s)

Total build time: 17s
Done in 16.41s.

```
