import IMyContext from "../../interface/mycontext.interface.js";
import IWorkflow from "../../interface/workflow.interface.js";
import ErrorAuth from "../../utils/errorAuth.js";
import { DateScalar } from "./dateScalar.resolver.js";

export const workflowResolver = {
  Query: {
    workflows: async (
      _: any,
      __: any,
      { dataSources }: IMyContext
    ): Promise<IWorkflow[]> => {
      ErrorAuth(!dataSources.userPayload)
      return dataSources.workflowApi.getWorkflows();
    },
    workflow: async (
      _: any,
      { id }: { id: string },
      { dataSources }: IMyContext
    ): Promise<IWorkflow> => {
      ErrorAuth(!dataSources.userPayload)
      return dataSources.workflowApi.getWorkflowById(id);
    },
  },
  Date: DateScalar,
};
