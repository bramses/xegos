# Codex Xegos 

## Installation

1. `npm install -g xegos`
4. `cd` to whatever project you want to make xegos in
5. Put your OAI key in `.env` as `OPENAI_API_KEY` or use `export OPENAI_API_KEY={YOUR_KEY}`

## Create a New xego

To create a new xego run `xego new --command | -c "your command here" --name | -n "your-xego-name"`

This will create a file in your directory called `xegos/{command}.js`

For more complex xegos, you can pass in other xegos as a Xego tower using `-p | --path`

## Xego Tower

A Xego tower is a txt file that uses old xegos as a base for new xegos.

### Format

```
Language: {js,css,py,html,etc.}
xego-1
xego-2
...
```

This will create a file with the format:
```
/* make a function that does basic addition */ <-- xego1

function add(a, b) {
   return a + b;
 }
/* make a function that does the fibonacci sequence */ <-- xego2

function fibonacci(n) {
   if (n <= 1) {
     return n;
   }
   return fibonacci(n - 1) + fibonacci(n - 2);
 }


/* run all of the above on the numbers 28 and 94 */ <-- our new command

console.log(add(28, 94));
console.log(fibonacci(28));
console.log(fibonacci(94));
```

See `xego-recipe.txt` for an example.

## Help?

`xego --help`
`xego new --help`
`xego gist --help`

## Send your xego to GitHub Gist

Set these in `.env`:
```
GIT_USERNAME=
GIT_PASSWORD=
GIT_TOKEN=
```

Run `xego gist -f 'filenames here seperated by spaces' -d 'the description'`

## Xego Repository -- Find Other People's Xegos!

todo...