import User from "../models/like";
import CrudRepository from "./crud-repository";

class UserRepository extends CrudRepository {

    constructor() {
        super(User);
    }


}
export default UserRepository;