const OpenAI = require('openai-api');
import * as dotenv from "dotenv";
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI(OPENAI_API_KEY);

const createLegoBlock = async (command: string, legos: string[] = [], language: string = 'Node JS'): Promise<any> => {
    const engine = 'davinci-codex'
    const prompt = legos.length > 0 ? `Language: ${language}\n\n ${legos.join('\n')}\n\n /* ${command}` : `Language: ${language}\n\n /* ${command}`;
    const maxTokens = 100;
    const temperature = 0.5;
    const topP = 1
    const presencePenalty = 0
    const frequencyPenalty = 0
    const bestOf = 1
    const n = 1
    const stream = false
    const stop = ['/*']

    const response = await openai.complete({engine, prompt, maxTokens, temperature, topP, presencePenalty, frequencyPenalty, bestOf, n, stream, stop});
    console.log(response.data);
}

createLegoBlock("create a blog")