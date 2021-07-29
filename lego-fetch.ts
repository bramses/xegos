// fetch the files that legos exist in
import { promises as fs } from "fs";

const commentType = {
    "NodeJS": {
        "start": "/*",
        "end": "*/"
    },
    "JavaScript": {
        "start": "/*",
        "end": "*/"
    },
    "TypeScript": {
        "start": "/*",
        "end": "*/"
    },
    "Python": {
        "start": "#",
        "end": ""
    },
};

const readLegoTxtFile = async (path: string) => {
    const legoFile = await fs.readFile(path + 'legos.txt', "utf8");

    let legoCommand = ''
    for (const line of legoFile.split("\n")) {
        const ll = await fs.readFile(path + 'legos/' + line + '.json', "utf8");
        legoCommand += commentType[JSON.parse(ll).language].start +  JSON.parse(ll).command + commentType[JSON.parse(ll).language].end + '\n\n' + JSON.parse(ll).lego;
    }
    console.log(legoCommand);

    await fs.writeFile(path + 'test.ts', legoCommand);
}

readLegoTxtFile('').then(() => {
    console.log("done");
}).catch(err => {
    console.log(err);
});