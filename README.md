# SNHS


Stuffs Used :

#### [Swig][3]

#### [Hapi][2]

#### [Node][1]

#### [Sequelize][4]



## Let's start creating a new project for you


    git clone git@github.com:anistark/snhs.git <project_name>
    
    cd <project_name>
    
    npm install


Copy all config

```
cp config_example.js config.js && cp server/config_example.json server/config.json
```


Replace the values with your custom values


#### Model Migrations

```
node_modules/.bin/sequelize db:migrate
```


## Run

```
nodemon
```


Sample Model Creation
 
```
node_modules/.bin/sequelize model:create --name member --attributes "first_name:string,last_name:string,email:string,phone:string,password:string"
```


### Contributions and Suggestions for improving Most welcome [here][5]


[1]: https://nodejs.org
[2]: http://hapijs.com
[3]: http://paularmstrong.github.io/swig
[4]: http://docs.sequelizejs.com
[5]: https://github.com/anistark/snhs/issues


