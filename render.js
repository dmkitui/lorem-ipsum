const fs = require("fs");

function view(template, data, response) {
  const content = fs.readFileSync(`./views/${template}.html`, {encoding: "utf8"});
  const updatedContent = content.replace("></textarea>", (">" + data + "</textarea>"));
  response.write(updatedContent);
}
module.exports.view = view;