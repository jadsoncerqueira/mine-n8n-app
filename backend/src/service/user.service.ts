import IUser from "../interface/user.interface.js";
import ProductModel from "../model/user.model.js";
import { verifyToken } from "../utils/authGoogle.js";
import { createToken } from "../utils/authJwt.js";
import ErrorAuth from "../utils/errorAuth.js";

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

  async login(token: string): Promise<string > {
    let newToken = "";
    const user = await verifyToken(token);
    ErrorAuth(user);
    if(user) {
      const searchUser = await this.productModel.getUserByEmail(user.email);
      if(!searchUser) {
        const {email, name, picture, google_id} = await this.productModel.createUser(user);
        newToken = createToken({email, name, picture, google_id})
      } else {
        newToken = createToken(user)
      }
      
    }
    return newToken;
  }

  createUser(product: IUser) {
    return this.productModel.createUser(product);
  }

  updateUser(id: number, product: IUser) {
    return this.productModel.updateUser(id, product);
  }
}
