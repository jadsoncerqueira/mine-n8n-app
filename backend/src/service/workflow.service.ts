import IWorkflow from "../interface/workflow.interface.js";
import WorkflowModel from "../model/workflow.model.js";

export default class WorkflowService {
  private workflowModel: WorkflowModel;

  constructor() {
    this.workflowModel = new WorkflowModel();
  }

  async getWorkflows(): Promise<IWorkflow[]> {
    return await this.workflowModel.getWorkflows();
  }

  getWorkflowById(id: string): Promise<IWorkflow> {
    return this.workflowModel.getWorkflowById(id);
  }

  createWorkflow(workflow: IWorkflow) {
    return this.workflowModel.createWorkflow(workflow);
  }

  updateWorkflow(id: number, workflow: IWorkflow) {
    return this.workflowModel.updateWorkflow(id, workflow);
  }
}
