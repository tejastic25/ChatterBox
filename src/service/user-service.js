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
  async signIn(data) {
    try {
      const user = await this.repository.getByEmail(data.email);
      if (!user) {
        throw {
          message: "User not found",
        };
      }
      if (!user.comparePassword(data.password)) {
        throw {
          message: "Incorrect Password",
        };
      }
      const token = user.createToken();
      return token;
    } catch (error) {
      console.log(error);
      console.log("something went wrong in service layer");
      throw error;
    }
  }
}
export default UserService;
