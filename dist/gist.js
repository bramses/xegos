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
var Gists = require('gists');
var dotenv = require('dotenv');
var fs_1 = require("fs");
dotenv.config();
var node_fetch_1 = require("node-fetch");
var gists = new Gists({
    username: process.env.GIT_USERNAME,
    password: process.env.GIT_PASSWORD,
    token: process.env.GIT_TOKEN
});
var generateFileObject = function (paths) { return __awaiter(void 0, void 0, void 0, function () {
    var files, _i, paths_1, path, content;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                files = {};
                _i = 0, paths_1 = paths;
                _a.label = 1;
            case 1:
                if (!(_i < paths_1.length)) return [3 /*break*/, 4];
                path = paths_1[_i];
                return [4 /*yield*/, fs_1.promises.readFile('xegos/' + path, 'utf8')];
            case 2:
                content = _a.sent();
                files[path] = { content: content };
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, files];
        }
    });
}); };
var createGist = function (description, files) { return __awaiter(void 0, void 0, void 0, function () {
    var gist_1, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, gists.create({
                        description: description,
                        public: true,
                        files: files
                    })];
            case 1:
                gist_1 = _a.sent();
                return [2 /*return*/, gist_1];
            case 2:
                err_1 = _a.sent();
                console.log("Error creating gist: " + err_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var gist = function (description, paths) { return __awaiter(void 0, void 0, void 0, function () {
    var files, gist, resp, json, htmlURL;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
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
                return [4 /*yield*/, generateFileObject(paths)];
            case 1:
                files = _a.sent();
                return [4 /*yield*/, createGist(description, files)];
            case 2:
                gist = _a.sent();
                return [4 /*yield*/, node_fetch_1["default"](gist.url)];
            case 3:
                resp = _a.sent();
                return [4 /*yield*/, resp.json()];
            case 4:
                json = _a.sent();
                htmlURL = json[0].html_url;
                return [2 /*return*/, htmlURL];
        }
    });
}); };
exports["default"] = gist;
// main('Test gist', ['add.js', 'fib.js', 'main.js']);
