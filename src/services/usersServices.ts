import Users, { UserClass } from "../models/users";

export default class UsersServices {
    constructor(){};
    saveUser = async (user: UserClass) => {
        console.log(user);
        Users.create({
            firstName: "Marcelo",
            lastName: "Genio"
        });
    }
}