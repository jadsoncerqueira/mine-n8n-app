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

  async getUserByEmail(email: string): Promise<IUser> {
    return await this.knex("users").where({ email }).first();
  }

  updateUser(id: number, product: IUser) {
    return this.knex("users")
      .where({ id })
      .update(product)
      .returning("*")
      .then((rows: IUser[]) => rows[0]);
  }

  async createUser({ name, email, picture, google_id }: IUser): Promise<IUser> {
    const [user] = await this.knex("users").insert({ name, email, picture, google_id }).returning("*");
    return user;
  }
}
