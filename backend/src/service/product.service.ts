import { IProduct } from "../interface/product.interface.js";
import ProductModel from "../model/workflow.model.js";

export default class ProductService {
  private productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel();
  }

  async getProducts(): Promise<IProduct[]> {
    return await this.productModel.getProducts();
  }

  getProductById(id: string): Promise<IProduct> {
    return this.productModel.getProductById(id);
  }

  createProduct(product: IProduct) {
    return this.productModel.createProduct(product);
  }

  updateProduct(id: number, product: IProduct) {
    return this.productModel.updateProduct(id, product);
  }
}
