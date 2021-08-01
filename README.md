# Codex xegos 

## Installation

1. git clone
2. `npm install`
3. `npm install -g ./`. This will put `xego` on your path
4. `cd` to whatever project you want to make xegos in
5. Put your OAI key in `.env` as `OPENAI_API_KEY`

## Create a New xego

To create a new xego run `xego -command | --c "your command here" --name "your-xego-name"`

This will create a file in your directory called `{command}.js`

For more complex xegos, you can pass in other xegos as arguments from a file. Post them in order. 
For example `npm run n-xego -command | --c "your command here" --xegos xego.txt`

## Edit your xego

## Combine xegos

To compose xegos, you can import them as you would any other JS file.

## Send your xego to GitHub Gist or Repl.it

todo...

## Xego Repository

todo...
