# tech_fernando_vidigal

this project was developed for the povio labs Full Stack assignement.

you will node.js and mongodb  setup to run this program.

![Alt text](/public/screenshot.png?raw=true "logged in view")
![Alt text](/public/screenshotNotLogged.png?raw=true "notLogged  view")



# Clone Project

## Install Dependencies:
```bash
git clone git@github.com:vidigas/povio_tech_fernando_vidigal.git
cd povio_tech_fernando_vidigal
npm install
```

# Run 

## Mongo 
```bash
 mongod 
```

## Build
```bash
npm run build 
```

## Populate DB
To populate the DB with the sample data run the following command. You can edit the sample data at `scripts/data.sample.json`
```bash
npm run populate
```


## Run
```bash
npm start
```

Or, for watch mode:
```bash
npm run dev
```

Access `localhost:8080` in your browser to start using the application.


# Tests
Run tests:
```bash
npm run test
```


<!-- ##  Api Endpoints



```bash

METHOD POST http://localhost:8080/signup/

REQUEST

body = {
	message: "message body."
}


RESPONSE

body = { 
	user: '123456'
	action: 'send',
	body: body

}
```
 -->


