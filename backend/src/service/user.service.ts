import IUser, { IPayload } from "../interface/user.interface.js";
import ProductModel from "../model/user.model.js";
import { verifyTokenGooge } from "../utils/authGoogle.js";
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

  async login(token: string): Promise<{newToken: string, user: IUser }> {
    let newToken = "";
    const user = await verifyTokenGooge(token);
    let userTransformer = user as unknown as IUser
    ErrorAuth(user);
    if(user) {
      const searchUser = await this.productModel.getUserByEmail(user.email);
      if(!searchUser) {
        const userCreated = await this.productModel.createUser(user);
        const {email, name, picture, google_id} = userCreated
        userTransformer = userCreated
        newToken = createToken({email, name, picture, google_id})
      } else {
        userTransformer = searchUser;
        newToken = createToken(user)
      }
      
    }
    return {newToken, user: userTransformer};
  }

  createUser(product: IUser) {
    return this.productModel.createUser(product);
  }

  updateUser(id: number, product: IUser) {
    return this.productModel.updateUser(id, product);
  }
}
