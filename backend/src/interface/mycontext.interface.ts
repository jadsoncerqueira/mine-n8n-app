import { IncomingMessage, ServerResponse } from "http";
import ProductController from "../controller/user.controller.js";
import WorkflowController from "../controller/workflow.controller.js";
import { IPayload } from "./user.interface.js";

export default interface IMyContext {
  dataSources: {
    response: ServerResponse<IncomingMessage>,
    userPayload: IPayload | null;
    userApi: ProductController;
    workflowApi: WorkflowController
  };
}
