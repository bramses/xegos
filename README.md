# Codex Xegos 

## Installation

1. git clone
2. cd into xegos and `npm install` and `npm cli`
3. `npm install -g ./`. This will put `xego` on your path
4. `cd` to whatever project you want to make xegos in
5. Put your OAI key in `.env` as `OPENAI_API_KEY`

## Create a New xego

To create a new xego run `xego --command | -c "your command here" --name "your-xego-name"`

This will create a file in your directory called `xegos/{command}.js`

NB: todo...create `xegos` dir if it doesn't exist

For more complex xegos, you can pass in other xegos as arguments from a file. Post them in order. 
For example `npm run n-xego -command | --c "your command here" --path xego.txt`

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

todo...

## Xego Repository -- Find Other People's Xegos!

todo...