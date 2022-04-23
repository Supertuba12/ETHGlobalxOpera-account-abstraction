import { net } from "./index";
import type { AxiosResponse } from "axios";

class UserService {
  register(username: string, password: string): Promise<AxiosResponse> {
    if (!UserService.isValidInput(username, password)) {
      return Promise.reject("User input is not valid");
    }

    return net.post("/addUser", {
      username: username,
      password: password,
    });
  }

  login(username: string, password: string): Promise<AxiosResponse> {
    if (!UserService.isValidInput(username, password)) {
      return Promise.reject("User input is not valid");
    }

    return net.post("/login", {
      username: username,
      password: password,
    });
  }

  private static isValidInput(username: string, password: string): boolean {
    return username !== "" && password !== "";
  }
}

export const userService = new UserService();
