"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route_1 = __importDefault(require("./routes/route"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use('/css', express_1.default.static(__dirname + '/public/css'));
app.use('/img', express_1.default.static(__dirname + '/public/img'));
// view engine setup for ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use('/', route_1.default);
app.use('/login', route_1.default);
app.use('/', route_1.default);
app.listen(3000, () => {
    console.log("Server has started running at port 3000");
});
