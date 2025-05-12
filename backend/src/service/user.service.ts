import IUser from "../interface/user.interface.js";
import ProductModel from "../model/user.model.js";

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  async getUsers(): Promise<IUser[]> {
    return await this.productModel.getUsers();
  }

  getUserById(id: string): Promise<IUser> {
    return this.productModel.getUserById(id);
  }

  createUser(product: IUser) {
    return this.productModel.createUser(product);
  }

  updateUser(id: number, product: IUser) {
    return this.productModel.updateUser(id, product);
  }
}
