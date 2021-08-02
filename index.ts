const OpenAI = require('openai-api');
import * as dotenv from "dotenv";
dotenv.config();
import fileEndings from "./file-endings";
import commentTypes from "./file-comment-types";
import { readXegoTxtFile } from './xego-fs'
import Xego from "./xego";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

/*
This code is creating a function that takes in the name of a xego block, the command to build it, and an array of xegos. 
The language parameter will be set to Node JS if you are using NodeJS.
- generated by stenography 🤖
*/
const createXegoBlock = async (name: string = null, command: string, xegoPath:string = null, language: string = 'js', maxTokens: number = 150, temperature: number = 0.1): Promise<Xego> => {
    try {
        const engine = 'davinci-codex'
        language = language.toLowerCase();
    
                       /*
                       This code is checking to see if any xego building blocks were passed in. 
                       If so, it uses the xegos in the prompt to create a xego block. 
                       If not, it just uses the command.
                       - generated by stenography 🤖
                       */
        let prompt = ''
        let xegoTower = ''
        if (xegoPath) {
            xegoTower = await readXegoTxtFile(xegoPath);
            prompt = `Language: ${language}\n\n ${xegoTower}\n\n${commentTypes[language].start} ${command} ${commentTypes[language].end}`;
        }
        else {
            prompt = `Language: ${language}\n\n ${commentTypes[language].start} ${command} ${commentTypes[language].end}`;
        }
        const topP = 1
        const presencePenalty = 0
        const frequencyPenalty = 0
        const bestOf = 1
        const n = 1
        const stream = false
        const stop = [commentTypes[language].start]
          
                         /*
                         This code is waiting for the OpenAI API to return a prompt completion.
                         - generated by stenography 🤖
                         */
        const response = await openai.complete({engine, prompt, maxTokens, temperature, topP, presencePenalty, frequencyPenalty, bestOf, n, stream, stop});
        
        return {
            name,
            command,
            xegoTower,
            code: response.data.choices[0].text.trim(),
            fileEnding: fileEndings[language],
            startComment: commentTypes[language].start,
            endComment: commentTypes[language].end
        }   
    } catch (err) {
        throw err;
    }
}


export default createXegoBlock;
