import { SQLDataSource } from "datasource-sql";
import ProductModel from "../../model/workflow.model.js";
import { IProduct } from "../../interface/product.interface.js";
import IMyContext from "../../interface/mycontext.interface.js";

export const productResolver = {
  Query: {
    products: async (
      _: any,
      __: any,
      { dataSources }: IMyContext
    ): Promise<IProduct[]> => {
      return dataSources.productApi.getProducts();
    },
    product: async (
      _: any,
      { id }: { id: string },
      { dataSources }: IMyContext
    ): Promise<IProduct> => {
      return dataSources.productApi.getProductById(id);
    },
  },
};
