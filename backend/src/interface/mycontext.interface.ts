import ProductController from "../controller/user.controller.js";

export default interface IMyContext {
  token?: string;
  dataSources: {
    user?: boolean;
    userApi: ProductController;
  };
}
