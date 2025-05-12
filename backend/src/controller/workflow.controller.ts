import IWorkflow from "../interface/workflow.interface.js";
import WorkflowService from "../service/workflow.service.js";

export default class WorkflowController {
  workflowService: WorkflowService;

  constructor() {
    this.workflowService = new WorkflowService();
  }

  async getWorkflows(): Promise<IWorkflow[]> {
    return await this.workflowService.getWorkflows();
  }

  async getWorkflowById(id: string): Promise<IWorkflow> {
    return await this.workflowService.getWorkflowById(id);
  }

  createWorkflow(workflow: IWorkflow) {
    return this.workflowService.createWorkflow(workflow);
  }

  updateWorkflow(id: number, workflow: IWorkflow) {
    return this.workflowService.updateWorkflow(id, workflow);
  }
}
