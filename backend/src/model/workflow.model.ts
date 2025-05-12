import { SQLDataSource } from "datasource-sql";
import knexConfig from "./config_db.js";
import IWorkflow from "../interface/workflow.interface.js";

export default class WorkflowModel extends SQLDataSource {
  constructor() {
    super(knexConfig);
  }
  async getWorkflows(): Promise<IWorkflow[]> {
    return await this.knex.select("*").from("workflows");
  }

  async getWorkflowById(id: string): Promise<IWorkflow> {
    return await this.knex("workflows").where({ id }).first();
  }

  updateWorkflow(id: number, workflow: IWorkflow) {
    return this.knex("workflows")
      .where({ id })
      .update(workflow)
      .returning("*")
      .then((rows: IWorkflow[]) => rows[0]);
  }

  createWorkflow({ }: IWorkflow) {
    return this.knex("workflows").insert({ }).returning("*");
  }
}
