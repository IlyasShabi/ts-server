#!/user/bin/env node
const [,, ...args] = process.argv;
var fs = require('fs');
var templates = [
  {file: "controller", name: "Controller"},
  {file: "model", name: ""},
  {file: "route", name: "Routes"}
];

if(!args.length){
  console.log('\x1b[31m%s\x1b[0m', 'Please enter the name of your component');
}else{
  
  templates.forEach(template =>{
    createFiles(template, args[0]);
  });
}


function createFiles (obj, name) {
  fs.readFile("./src/conf/templates/"+obj.file+".ts", 'utf8', function (err,data) {
    if (err) {
      return console.error("sorry can't create this file " , err);
    }
    var result = data.replace("xxxx", name + obj.name);
  
    fs.writeFile("./src/"+obj.file+"s/"+name+obj.name + ".ts", result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });
}
