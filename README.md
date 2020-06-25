# WebApp-Template

**requirements:**
  heroku
  nodemon
  npm

an extremely basic template for a react webapp (WIP)

**scripts:** <br>
  `start`  bundles jsx files and starts server <br>
  `start:dev`  starts server using nodemon <br>
  `build` bundles jsx files <br>
  `build:dev` bundles jsx files and watches for any changes <br>
  `lint` runs eslint on react components files using Airbnb style <br>
  `lint:fix` runs eslint but with the "--fix" option <br>

to deploy to heroku
```
$ heroku login
$ heroku git:clone -a whatever-you're-calling-your-heroku-app
$ git push heroku master
```

**note:** might need heroku config:set NPM_CONFIG_PRODUCTION=false if dev dependencies not installing;


