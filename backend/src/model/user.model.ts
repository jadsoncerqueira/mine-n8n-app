import { SQLDataSource } from "datasource-sql";
import knexConfig from "./config_db.js";
import IUser from "../interface/user.interface.js";

export default class ProductModel extends SQLDataSource {
  constructor() {
    super(knexConfig);
  }
  async getUsers(): Promise<IUser[]> {
    return await this.knex.select("*").from("users");
  }

  async getUserById(id: string): Promise<IUser> {
    return await this.knex("users").where({ id }).first();
  }

  updateUser(id: number, product: IUser) {
    return this.knex("users")
      .where({ id })
      .update(product)
      .returning("*")
      .then((rows: IUser[]) => rows[0]);
  }

  createUser({ name, email, picture }: IUser) {
    return this.knex("users").insert({ name, email, picture }).returning("*");
  }
}
