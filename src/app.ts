import $ = require('jquery');

$('#app').css({'background-color': 'yellow'});
// must add the jquery translation file (jquery.d.ts) to the project folder
// or npm install @types/jquery --save-dev

/*
1. Change loaders to rules.
2. In extensions[0] to "*" from "".

It's also suggested to keep the filename as ./bundle.js as a dist folder is added automatically.

module.exports = {
    entry:"./src/app.ts",
    output: {
        filename:"./bundle.js"
    },
    devtool:"source-map",
    resolve: {
        extensions: ["*",".ts",".tsx",".js"]
    },
    module:{
        rules: [
            {test:/\.tsx?$/, loader:"ts-loader"}
        ]
    }
};

When running webpack, you probably get an error:

The CLI moved into a separate package: webpack-cli.
Please install 'webpack-cli' in addition to webpack itself to use the CLI.
-> When using npm: npm install webpack-cli -D
-> When using yarn: yarn add webpack-cli -D

Install webpack-cli to fix it: 
npm install webpack-cli --save-dev
*/