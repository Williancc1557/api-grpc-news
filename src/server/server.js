const protoloader = require("@grpc/proto-loader");
const path = require("path")
const grpc = require("grpc");
const { getGameNewsRecentMethod, getAllGameNewsMethod } = require("../grpcMethods/getGameNewsRecentMethod")

const server = new grpc.Server()

const packageDefinition = protoloader.loadSync(path.resolve("microsservices.proto"))
const proto = grpc.loadPackageDefinition(packageDefinition);

server.addService(proto.GetNewsService.service, { getGameNewsRecent: getGameNewsRecentMethod, getAllGameNews: getAllGameNewsMethod })

server.bind('localhost:5000', grpc.ServerCredentials.createInsecure())
console.log("server is running at localhost:5000")
server.start()