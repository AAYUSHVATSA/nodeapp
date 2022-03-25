const http = require("http");
const fs = require("fs");

const myserver = http.createServer((request, response)=> {
    response.writeHead(200, { 'Content-type': 'text/html'});
    var myurl = request.url;
    if(myurl =="/about")
    {
        const about  = fs.readFileSync("./about.html");
        response.write(about);

    }
    else if(myurl =="/home")
    {
        const content = fs.readFileSync("./index.html");
        response.write(content);
    }
    else 
    {
        response.write("<h2>Server Worked</h2><p>"+ myurl +"</p>");
    }
    response.end();
})

myserver.listen(3000);

myserver.on("connection", (result)=> {
    console.log("Connection Established");
})