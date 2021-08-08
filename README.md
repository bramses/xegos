# Codex Xegos 

## Installation

1. git clone
2. cd into xegos and `npm install` and `npm run cli`
3. `npm install -g ./`. This will put `xego` on your path
4. `cd` to whatever project you want to make xegos in
5. Put your OAI key in `.env` as `OPENAI_API_KEY` or use `export OPENAI_API_KEY={YOUR_KEY}`

## Create a New xego

To create a new xego run `xego new --command | -c "your command here" --name "your-xego-name"`

This will create a file in your directory called `xegos/{command}.js`

For more complex xegos, you can pass in other xegos as arguments from a file. Post them in order. 

## Xego Tower

A Xego tower is a txt file that uses oold xegos as a base for new xegos.

### Format

```
Language: {js,css,py,html,etc.}
xego-1
xego-2
...
```

See `xego-recipe.txt` for an example.

## Help?

`xego --help`

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
