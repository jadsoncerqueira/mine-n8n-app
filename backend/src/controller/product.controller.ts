import { IProduct } from "../interface/product.interface.js";
import ProductService from "../service/product.service.js";

export default class ProductController {
  productService: ProductService;

  constructor() {
    this.productService = new ProductService();
  }

  async getProducts(): Promise<IProduct[]> {
    return await this.productService.getProducts();
  }

  async getProductById(id: string): Promise<IProduct> {
    return await this.productService.getProductById(id);
  }

  createProduct(product: IProduct) {
    return this.productService.createProduct(product);
  }

  updateProduct(id: number, product: IProduct) {
    return this.productService.updateProduct(id, product);
  }
}
