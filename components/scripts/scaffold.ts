const fs = require("fs");
const prompt_ = require('prompt');
const TEMPLATE_DIRECTORY = "./template";

prompt_.start();

prompt_.get(['component'], (_, result) => {

  const newSrcDirectoryPath = `./src/${result.component}`;

  if (!fs.existsSync(newSrcDirectoryPath)){
    fs.mkdirSync(newSrcDirectoryPath);
  
    fs.cp(TEMPLATE_DIRECTORY, newSrcDirectoryPath, { recursive: true }, () => {  
      console.log("Component Scaffolded");
    });

  } else {
    console.log("Component Already Exist");
  }
});


