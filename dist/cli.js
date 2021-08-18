#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Command = require('commander').Command;
var program = new Command();
var index_1 = require("./index");
var xego_fs_1 = require("./xego-fs");
var gist_1 = require("./gist");
var dotenv = require('dotenv');
dotenv.config();
var loading = require('loading-cli');
if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
}
var main = function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var loader, colors, xego, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                loader = loading("fetching codex from openai and writing to file: xegos/" + (options.name ? options.name : options.command.split(' ').join('-'))).start();
                colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
                /*
                This code is generating a random color from the colors array.
                - generated by stenography 🤖
                */
                loader.color = colors[Math.floor(Math.random() * colors.length)];
                loader.frames = ["◰", "◳", "◲", "◱"];
                return [4 /*yield*/, index_1["default"](options.name, options.command, options.path, options.language, Number(options.maxTokens), Number(options.temperature))];
            case 1:
                xego = _a.sent();
                return [4 /*yield*/, xego_fs_1.writeXegoToFile(xego)];
            case 2:
                _a.sent();
                loader.stop();
                return [3 /*break*/, 4];
            case 3:
                err_1 = _a.sent();
                throw err_1;
            case 4: return [2 /*return*/];
        }
    });
}); };
program
    .command('new')
    .description('A command line tool for creating Xegos')
    .option('-n, --name <name>', 'Name of the Xego', null)
    .requiredOption('-c, --command <command>', 'Command for codex to execute')
    .option('-p, --path <path>', 'Path to Xego Tower', null)
    .option('-temp, --temperature <temperature>', 'Temperature of the Xego', 0.1)
    .option('-mt, --maxTokens <maxTokens>', 'Max number of tokens', 150)
    .option('-l, --language <language>', 'Language of the Xego. See supported languages at https://github.com/bramses/xegos/blob/master/file-endings.ts', 'js')
    .action(function (options) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        main(options);
        return [2 /*return*/];
    });
}); });
program
    .command('gist')
    .description('Create a gist from a Xego(s)')
    .requiredOption('-f --files <files>', 'An array of filenames seperated by spaces.')
    .requiredOption('-d --desc <desc>', 'Description of the gist')
    .action(function (options) { return __awaiter(void 0, void 0, void 0, function () {
    var loader, colors, files, desc, gistRes;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                loader = loading("creating a gist with files").start();
                colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
                /*
                This code is generating a random color from the colors array.
                - generated by stenography 🤖
                */
                loader.color = colors[Math.floor(Math.random() * colors.length)];
                loader.frames = ["◰", "◳", "◲", "◱"];
                files = options.files.split(' ');
                desc = options.desc;
                return [4 /*yield*/, gist_1["default"](desc, files)];
            case 1:
                gistRes = _a.sent();
                loader.stop();
                console.log(gistRes);
                return [2 /*return*/];
        }
    });
}); });
program.parse(process.argv);