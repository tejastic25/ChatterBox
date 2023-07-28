import { UserRepository } from "../repository/index.js";

class UserService {

    constructor() {
        this.repository = new UserRepository();
    }

    async signUp(data) {
        try {
            const user = await this.repository.create(data);
            return user;

        } catch (error) {
            console.log("something went wrong in the service layer");
            throw error;
        }
    }
}
export default UserService;