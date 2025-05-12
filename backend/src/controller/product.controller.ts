import IUser from "../interface/user.interface.js";
import UserService from "../service/user.service.js";

export default class ProductController {
  userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(): Promise<IUser[]> {
    return await this.userService.getUsers();
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.userService.getUserById(id);
  }

  createUser(product: IUser) {
    return this.userService.createUser(product);
  }

  updateUser(id: number, product: IUser) {
    return this.userService.updateUser(id, product);
  }
}
