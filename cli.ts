#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
import createXegoBlock from './index';
import { writeXegoToFile } from './xego-fs'; 
const dotenv = require('dotenv');
dotenv.config();


program
    .description('A command line tool for creating Xegos')
    .version('0.0.1')
    .option('-n, --name <name>','Name of the Xego', null)
    .requiredOption('-c, --command <command>', 'Command for codex to execute')
    .option('-p, --path <path>', 'Path to Xego Tower', null)
    .option('-temp --temperature', 'Temperature of the Xego', 0.1)
    .option('-mt --maxTokens', 'Max number of tokens', 150)
    .option('-l, --language <language>', 'Language of the Xego. See languages at https://github.com/bramses/xegos/blob/master/file-endings.ts', 'js')


program.parse(process.argv);

if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
}

const main = async (options) => {
    const xego = await createXegoBlock(options.name, options.command, options.path, options.language, options.maxTokens, options.temperature);
    await writeXegoToFile(xego);
}


const options = program.opts();
main(options);
