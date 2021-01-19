"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = __importDefault(require("./schema"));
var resolvers_1 = __importDefault(require("./resolvers"));
var cors_1 = __importDefault(require("cors"));
var server = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
});
var port = process.env.PORT || 4000;
var path = '/graphql';
var app = express_1.default();
app.use(cors_1.default());
server.applyMiddleware({ app: app });
app.listen(port, function () {
    return console.log("Server running at http://localhost:" + port + path);
});
