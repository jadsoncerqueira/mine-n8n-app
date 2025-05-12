import { SQLDataSource } from "datasource-sql";
import { IProduct } from "../interface/product.interface.js";
import knexConfig from "./config_db.js";

export default class ProductModel extends SQLDataSource {
  constructor() {
    super(knexConfig);
  }
  async getWorkflows(): Promise<IProduct[]> {
    return await this.knex.select("*").from("workflows");
  }

  async getWorkflowtById(id: string): Promise<IProduct> {
    return await this.knex("workflows").where({ id }).first();
  }

  updateWorkflow(id: number, product: IProduct) {
    return this.knex("workflows")
      .where({ id })
      .update(product)
      .returning("*")
      .then((rows: IProduct[]) => rows[0]);
  }

  createWorkflow({ name, price, description }: IProduct) {
    return this.knex("workflows")
      .insert({ name, price, description })
      .returning("*");
  }
}
