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
task-1 : added edit functionality such that user can modify his/her to do list 
        > WHY: Introduced another endpoint to the app called "/todo/edit/:id"
               Whatever option in the list that is updated it will be POSTED, from express POST I have manipulated **req.body.edit -> new_value** and its **req.params.id -> index** to update
               **todoList[index] = new_value**
        > **View** - I have embedded a list with a form that is submitable once a user clicks it shall save users modified record. 

ggg
