# necrodancer-website README  

## Requirements:  

[nodejs (for npm)](https://nodejs.org)   
[grunt (for dev work/assembling build)](http://gruntjs.com/)  

## Current build:  

After installing nodejs, npm should be installed. From there you will need to install Grunt if you have not done so already. To do this run this in your CLI of choice:  

`npm install -g grunt-cli`  

Afterwards, clone this repo and run this within the project root.  

`npm i`  

This will install all the node modules needed, as listed in `package.json`. Once that's complete, just run  

`grunt`  

to assemble the build and automatically serve it in your browser, or you can run  
 
`grunt prod`  

to assemble the build in `dist/` without serving it.  

The grunt build will probably evolve with more fine grain file control (as assets, etc. are brought in), and also probably include jshint, but for now this is a pretty decent starting build.  
