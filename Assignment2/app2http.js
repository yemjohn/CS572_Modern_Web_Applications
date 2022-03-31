const http= require("http");
const fs= require("fs");
const url= require("url")
require("dotenv").config();

const serveIndex= function(req, res) {
    const path= url.parse(req.url).pathname;
    if(req.method == "POST") {
        res.setHeader("Content-Type", "application/json");
        fs.readFile(__dirname + "\\webform.json", function(err, data) {  
            if (err) {  
                res.writeHead(404);  
                res.write(err);  
                res.end();  
            } else {  
                res.writeHead(200, { 'Content-Type': 'application/json'});  
                res.write(data);  
                res.end();  
            } 
        });
        // fs.readFile(__dirname + "/json", function(err, data) { 
        //     if (err) {  
        //         res.writeHead(404);  
        //         res.write(err);  
        //         res.end();  
        //     } else { 
        //         function handleServer (req, res) {
        //             let data= '';
        //             req.on('data', (chunk) =>{
        //                 data += chunk;
        //             });
        //             req.on('end', ()=> {
        //                 if(req.method == "POST" && req.url =="/json") {
        //                     let dataObj= req.parse(data);
        //                     res.end(JSON.stringify(dataObj));
        //                 }
        //             })
        //         }
        //     }    
        // });

        
    } else {
        switch(path) {
            case '/get':
                res.setHeader("Content-Type", "text/html");
                fs.readFile(__dirname + "\\public\\index.html", function(err, data) {  
                    if (err) {  
                        res.writeHead(404);  
                        res.write(err);  
                        res.end();  
                    } else {  
                        res.writeHead(200, { 'Content-Type': 'text/html'});  
                        res.write(data);  
                        res.end();  
                    } 
                });
                break;
                case '/form.html':
                    res.setHeader("Content-Type", "text/html");
                    fs.readFile(__dirname + "\\public\\form.html", function(err, data) {  
                        if (err) {  
                            res.writeHead(404);  
                            res.write(err);  
                            res.end();  
                        } else {  
                            res.writeHead(200, { 'Content-Type': 'text/html'});  
                            res.write(data);  
                            res.end();  
                        } 
                    });
                    break;
                // case '/post':
                //     res.setHeader("Content-Type", "application/json");
                //     fs.readFile(__dirname + "\\webform.json", function(err, data) {  
                //         if (err) {  
                //             res.writeHead(404);  
                //             res.write(err);  
                //             res.end();  
                //         } else {  
                //             res.writeHead(200, { 'Content-Type': 'application/json'});  
                //             res.write(data);  
                //             res.end();  
                //         } 
                //     });
                //     break;
            case '/':
                res.setHeader("Content-Type", "text/html");
                fs.readFile(__dirname + "\\public\\index.html", function(err, data) {  
                    if (err) {  
                        res.writeHead(404);  
                        res.write(err);  
                        res.end();  
                    } else {  
                        res.writeHead(200, { 'Content-Type': 'text/html'});  
                        res.write(data);  
                        res.end();  
                    } 
                });
                break;
            case '/index.html':
                res.setHeader("Content-Type", "text/html");
                fs.readFile(__dirname + "\\public\\index.html", function(err, data) {  
                    if (err) {  
                        res.writeHead(404);  
                        res.write(err);  
                        res.end();  
                    } else {  
                        res.writeHead(200, { 'Content-Type': 'text/html'});  
                        res.write(data);  
                        res.end();  
                    } 
                });
                break; 
            
            case '/page1.html':
                res.setHeader("Content-Type", "text/html");
                fs.readFile(__dirname + "\\public\\page1.html", function(err, data) {  
                    if (err) {  
                        res.writeHead(404);  
                        res.write(err);  
                        res.end();  
                    } else {  
                        res.writeHead(200, { 'Content-Type': 'text/html'});  
                        res.write(data);  
                        res.end();  
                    } 
                });
                break;
            case '/page2.html':
                res.setHeader("Content-Type", "text/html");
                fs.readFile(__dirname + "\\public\\page2.html", function(err, data) {  
                    if (err) {  
                        res.writeHead(404);  
                        res.write(err);  
                        res.end();  
                    } else {  
                        res.writeHead(200, { 'Content-Type': 'text/html'});  
                        res.write(data);  
                        res.end();  
                    } 
                });
                break;
                default:
                    res.setHeader("Content-Type", "text/html");
                    fs.readFile(__dirname + "\\public\\404.html", function(err, data) {  
                        if (err) {  
                            res.writeHead(404);  
                            res.write(err);  
                            res.end();  
                        } else {  
                            res.writeHead(200, { 'Content-Type': 'text/html'});  
                            res.write(data);  
                            res.end();  
                        } 
                    });
                    break;
        
    
        }

    }
    
}

const server= http.createServer(serveIndex);
port= process.env.PORT;
server.listen(port, "localhost", function() {
console.log(`Server is running on http://localhost:${port}`);
});
