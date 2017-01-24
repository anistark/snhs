# SNHS


## Setup

```
npm install
```

Copy all config

```
cp config_example.js config.js
```

```
cp server/config_example.json server/config.json
```

Replace the values with your custom values


## Run

```
nodemon
```


#### Model Migrations

```
node_modules/.bin/sequelize db:migrate
```


Sample Model Creation
 
```
node_modules/.bin/sequelize model:create --name member --attributes "first_name:string,last_name:string,email:string,phone:string,password:string"
```


## Under Development


