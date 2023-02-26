import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';
import { users } from './seeders/users';
import { projects } from './seeders/projects';



const createUsers = () => {
    users.map(user => {
        db.User.create(user)
    })
};

createUsers();


const createProjects = () => {
    projects.map(project => {
        db.Project.create(project)
    })
};
createProjects();


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
