# necrodancer-website README

## Requirements:

nodejs (for npm)  
ruby (for rubygems)

jade (npm package):  
```npm install jade```   
sass (ruby gem):  
```gem install sass```  

## Current build:

Host the dist directory however you prefer (MAMP, WAMP, grunt connect, etc.)

Run sasswatch.sh and jadewatch.sh in the background to watch+build sass->css and jade->html as you edit

```cd my-cool-projects-folder/necrodancer-website```  
```./sasswatch.sh &```  
```./jadewatch.sh &```

This build is a little sloppy and can definitely be improved, originally wanted one massive watch script but I'm pretty sure the sass watch prevents the jade watch from ever executing in a sequential script, hence the separation for now