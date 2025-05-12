import ProductController from "../controller/user.controller.js";
import WorkflowController from "../controller/workflow.controller.js";

export default interface IMyContext {
  token?: string;
  dataSources: {
    user?: boolean;
    userApi: ProductController;
    workflowApi: WorkflowController
  };
}
