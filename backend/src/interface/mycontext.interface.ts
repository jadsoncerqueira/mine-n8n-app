import ProductController from "../controller/product.controller.js";

export default interface IMyContext {
  token?: string;
  dataSources: {
    user?: boolean;
    userApi: ProductController;
  };
}
