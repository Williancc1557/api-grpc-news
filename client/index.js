const protoLoader = require("@grpc/proto-loader");
const path = require("path")
const grpc = require("grpc");

const protoObject = protoLoader.loadSync(path.resolve("microsservices.proto"))
const userClient = grpc.loadPackageDefinition(protoObject)

const client = new userClient.GetNewsService("localhost:5000", grpc.credentials.createInsecure())

client.getGameNewsRecent({}, (err, notes) => {
    console.log(err, notes)
})

client.getAllGameNews({
    requestsNumber: 8
}, (err, notes) => {
    console.log(err, notes.allNews)
})