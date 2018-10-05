const http = require("http");
const renderer = require("./render");
const loremGenerator = require("./lorem-generator");

let selector;
let number;

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  let randomOutput = [];
  if (request.method === "POST") {
    let values = {};
    request.on("data", function(data) {
        data = data.toString();
        data = data.split('&');
        for (var i = 0; i < data.length; i++) {
            var _data = data[i].split("=");
            values[_data[0]] = _data[1];
        }
        selector = values.selector;
        number = values.number;
        randomOutput = loremGenerator[selector](number);
        renderer.view("home", randomOutput, response);
        response.end();
    })
  } else {
    renderer.view("home", [], response);
    response.end();
  }
}).listen(3000, "127.0.0.1");
console.log("Lorem Ipsum generator running at http://localhost:3000/");