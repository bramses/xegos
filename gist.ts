const Gists = require('gists');
const dotenv = require('dotenv');
import { promises as fs } from "fs";
dotenv.config();
import fetch from 'node-fetch'

const gists = new Gists({
    username: process.env.GIT_USERNAME, 
    password: process.env.GIT_PASSWORD,
    token: process.env.GIT_TOKEN
});

interface LocalFile {
    [key: string]: { content: string }
}

const generateFileObject = async (paths: string[]) => {
    const files: LocalFile = {};
    for (let path of paths) {
        const content = await fs.readFile('xegos/' + path, 'utf8');
        files[path] = { content };
    }

    return files;
};

const createGist = async ( description: string, files: LocalFile ) : Promise<any> => {
    try {
        const gist = await gists.create({
            description,
            public: true,
            files
        })
        return gist;
    } catch (err) {
        console.log(`Error creating gist: ${err}`);
    }   
}

const gist = async (description: string, paths: string[]) => {
    if (!process.env.GIT_TOKEN) {
        throw new Error('Git token not set. If you do not have a token, you can make one here: https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token');
    }
    if (!process.env.GIT_USERNAME) {
        throw new Error('Git username not set');
    }
    if (!process.env.GIT_PASSWORD) {
        throw new Error('Git password not set');
    }
    if (paths.length === 0) {
        throw new Error('No files to upload');
    }
    if (!description) {
        throw new Error('No description provided');
    }
    const files = await generateFileObject(paths);
    const gist = await createGist(description, files);
    const resp = await fetch(gist.url);
    const json = await resp.json();
    const htmlURL = json[0].html_url
    return htmlURL;
}

export default gist;