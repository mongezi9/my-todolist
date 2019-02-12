# Todo list exercise

### Install

- Install https://nodejs.org/en/
- Download archive from link provided
- Unzip file and cd into it
- run `npm install`

### Run
`node app.js`

Visit http://localhost:8080 in your browser

### High level application requirements
1. Multiple users should be able to view the shared public todo list
2. Should be able to add items
3. Should be able to delete items
4. Should be able to edit items (Missing feature)
5. Must be able to deploy in docker (Missing feature)

### Tasks
1. Add missing requirement #4 to the application
2. Add sufficient test coverage to the application and update readme on howto run the tests
3. Add missing requirement #5 to the application (Dockerfile and update readme with instructions)

### Bonus
4. Display test coverage after tests are executed
5. Find and fix the XSS vulnerability in the application. Also make sure that it wont happen again by including a test.

> ### Notes
> - Update the code as needed and document what you have done in the readme below
> - Will be nice if you can git tag the tasks by number

### Solution
> ### task-1 : 
> - added edit functionality such that user can modify his/her to do list 
> - WHY: Introduced another endpoint to the app called "/todo/edit/:id"
               Whatever option in the list that is updated it will be POSTED, from express POST I have manipulated **req.body.edit -> new_value** and its **req.params.id -> index** to update
               **todoList[index] = new_value**
> - **View** - I have embedded a list with a form that is submitable once a user clicks it shall save users modified record. 

> ### task-2 : (Aim to Containerized Nodejs app) i.e **BUILD->SHIP->RUN**
> - touch DockerFile
> - And added the following to the dockerfile to define image
> - **FROM node:8** *pulls latest version from dockerHub LTS (long term support)*
> - **WORKDIR /app** *creates an app directory*
> - **COPY package*.json ./**
> - **RUN npm install**
> - **COPY . .**
> - **EXPOSE 8081**
> - **CMD ["npm","start"]** *runs my application inside a container*
> - ****
> - added .dockerignore file - we don't want to copy all node-module files in the process of creating out docker image, so we exlude **node-module, npm-debug.log**
> ### Build
> - **docker build -t my_to_do_list .**

            Sending build context to Docker daemon  2.873MB
            Step 1/7 : FROM node:8
            ---> 8198006b2b57
            Step 2/7 : WORKDIR /app
            ---> Using cache
            ---> 0169ac5b24fd
            Step 3/7 : COPY package*.json ./
            ---> b90c922e20e1
            Step 4/7 : RUN npm install
            ---> Running in d27257c6252f
            npm WARN my-todolist@0.1.0 No repository field.
            npm WARN my-todolist@0.1.0 No license field.

            added 59 packages in 5.136s
            Removing intermediate container d27257c6252f
            ---> 2b565864c9a4
            Step 5/7 : COPY . .
            ---> 93617b9137e9
            Step 6/7 : EXPOSE 8081
            ---> Running in 9c1990f296a5
            Removing intermediate container 9c1990f296a5
            ---> 9b730cd4ce6c
            Step 7/7 : CMD ["npm","start"]
            ---> Running in 74e3bb007c63
            Removing intermediate container 74e3bb007c63
            ---> 80f471aa6ed4
            Successfully built 80f471aa6ed4
            Successfully tagged my_to_do_list:latest
            SECURITY WARNING: You are building a Docker image from Windows against a non-Windows Docker host. All files and directories added to build context will have '-rwxr-xr-x' permissions. It is recommended to double check and reset permissions for sensitive files and directories.

> ### RUN
> - **docker run -p 8081:8081 -d my_to_do_list**
> - It will generate container image *d2a09426acdfb4359f7b2047b40592cfd9b827a10e2c5569855cc2da3df5c437*
> - Now container its up and running on port 8081, http://localhost:8081
> - when exe this **docker logs d2a09426acdfb4359f7b2047b40592cfd9b827a10e2c5569855cc2da3df5c437**
> - i see logs as follows
         
          my-todolist@0.1.0 start /app
          node app.js
          Running server...


> - This can be integrated with AWS EC2, for purpose of shipping around to any env.
> ### task-3 : (Creating Automated Tests, for adding, editing and deleting items in todolist)
> - Install **mocha** and **chai** i.e *npm install --save-dev mocha chai*
> - **testcase1**: adding new item in the list

    chai assets is used to check that intensions of a program are achieved e.g *assert.equal("item1", "item2");* where item1 - is the entered value to be in a list, and item2 - is expected item to be in a list 

> - **testcase2**: edits existing item in the list

    chai assets is used to check that intensions of a program are achieved e.g *assert.equal("item1", "item2");* where item1 - is the edited value in a list, and item2 - is expected item to be differentiated  

> - **testcase3**: deletes item in the list

    chai assets is used to check that intensions of a program are achieved e.g *assert.false("item1");* where item1 - we expect the value/element to be false as we assume that its deleted.  

> - this test are automated with aid of selenium webdriver, so will need to add **npm install selenium-webdriver** and in this case we only         run our test against chromedriver, **npm install chromedriver**
> - http://localhost:8081/todo must be running first in order to kick off the test 
> - this test cases can all be ran using **npm test**, since script has been added in package.json 
    
    "directories": {
         "test": "test"
    },
    "scripts": {
        "test": "mocha"
    },

> - This line it will run all tests in mocha, and at the same it compiles tests coverages either passing/failing.
s
