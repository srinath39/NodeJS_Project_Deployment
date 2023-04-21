const http=require("node:http");

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.end("hello world");
});

server.listen(8080,()=>{
    console.log("server running in 8080 port");
})