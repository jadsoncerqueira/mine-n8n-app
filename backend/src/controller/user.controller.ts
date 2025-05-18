import IUser from "../interface/user.interface.js";
import UserService from "../service/user.service.js";

export default class UserController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async login(user: IUser) {
    return this.userService.login(user);
  }

  async getUsers(): Promise<IUser[]> {
    return await this.userService.getUsers();
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.userService.getUserById(id);
  }

  createUser(user: IUser) {
    return this.userService.createUser(user);
  }

  updateUser(id: number, user: IUser) {
    return this.userService.updateUser(id, user);
  }
}
