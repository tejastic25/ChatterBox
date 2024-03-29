import UserService from "../service/user-service.js";
const userService = new UserService();
import { StatusCodes } from "http-status-codes";

export const signUp = async (req, res) => {
  try {
    const user = await userService.signUp({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(StatusCodes.CREATED).json({
      data: user,
      success: true,
      message: "successfully signed up",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: true,
      message: "not able to sign up",
      err: error,
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const user = await userService.signIn(req.body);
    return res.status(StatusCodes.OK).json({
      data: user,
      success: true,
      message: "user signed-in succesfully ",
      err: {},
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      data: {},
      success: false,
      message: "error in signing in user ",
      err: error,
    });
  }
};
