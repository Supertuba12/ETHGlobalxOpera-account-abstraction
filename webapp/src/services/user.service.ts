import { net } from "./index";
import type { AxiosResponse } from "axios";

class UserService {
  register(username: string, password: string): Promise<AxiosResponse> {
    if (!UserService.isValidUserInput(username, password)) {
      return Promise.reject("User input is not valid");
    }

    return net.post("/addUser", {
      username: username,
      password: password,
    });
  }

  login(username: string, password: string): Promise<AxiosResponse> {
    if (!UserService.isValidUserInput(username, password)) {
      return Promise.reject("User input is not valid");
    }

    return net.post("/login", {
      username: username,
      password: password,
    });
  }

  addGuardians(username: string, guardians: string[]): Promise<AxiosResponse> {
    if (guardians.length === 0) {
      return Promise.reject("No guardians specified");
    }

    return net.post("/addGuardian", {

      guardian: guardians,
    });
  }

  private static isValidUserInput(username: string, password: string): boolean {
    return username !== "" && password !== "";
  }
}

export const userService = new UserService();
