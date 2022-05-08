import { v4 as uuidv4 } from 'uuid';

let users = [];


export const createUser = (req, res) => {
    const user = req.body;
    console.log('user');

    const userWithID = { ...user, id: uuidv4() }
    users.push(userWithID);

    res.send(`User with the name ${user.firstname} added to the database!`);
}

export const getUsers = (req, res) => {
    console.log(users);
    res.send(users);
}

export const getUser=(req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}

export const deleteUser=(req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id!=id);
    res.send(`User with id ${id} deleted from the database`);
}

export const updateUser=(req, res) => {
    const { id } = req.params;
    const { firstname, lastname, age } = req.body;
    const user = user.find((user) => user.id == id);

    if (firstname) {
        user.firstname = firstname;
    }
    if (lastname) {
        user.lastname = lastname;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the id ${id} has been updated`);


}