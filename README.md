## Introduce   

this is a simple self use cli for making npm package with webpack

## Base on

node `8.6.0`   
npm `5.3.0`

## Quick to start

1.make sure you have install webpack npm with global  
2.download this project  
3.npm install  
4.npm run dev `develop mode`    
5.npm run build `build mode`  
6.add `module.exports =` in the head of `./lib/plugin.js`
7.npm publish  

### Directory

```
|-- dist #build files for example
|-- lib #npm main files for publish to npm
|-- node_modules #node packages
|-- src #dev folder  
    |-- css #style  
        |-- app.scss #example style  
        |-- plugin.scss #plugin style  
    |-- img #images
    |-- js #scripts
        |-- index.js #example script
        |-- plugin.js #plugin script
    |-- template.html #html template for webpack
|--- .babelrc #babel conf
|--- .gitignore #git ignore conf
|--- package.json #all dependencies
|--- postcss.config.js #postcss conf
|--- README.md #this file
|--- webpack.config.js #webpack file
```
