export default function (plop) {
  // create your generators here
  plop.setGenerator("route", {
    description: "Criando rota api",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Qual o nome da rota?",
      },
    ], // array of inquirer prompts
    actions: [
      {
        type: "add",
        path: "../model/{{name}}.model.ts",
        templateFile: "./templates/model.ts.hbs",
      },
      {
        type: "add",
        path: "../service/{{name}}.service.ts",
        templateFile: "./templates/service.ts.hbs",
      },
      {
        type: "add",
        path: "../controller/{{name}}.controller.ts",
        templateFile: "./templates/controller.ts.hbs",
      },
      {
        type: "add",
        path: "../interface/{{name}}.interface.ts",
        templateFile: "./templates/interface.ts.hbs",
      },
      {
        type: "add",
        path: "../graphql/schema/{{name}}.schema.ts",
        templateFile: "./templates/schema.ts.hbs",
      },
      {
        type: "add",
        path: "../graphql/resolvers/{{name}}.resolver.ts",
        templateFile: "./templates/resolver.ts.hbs",
      },
    ], // array of actions
  });
}
