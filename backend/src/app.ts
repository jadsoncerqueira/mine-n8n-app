import { Request, Response } from "express";

import express from "express";

const app = express();

const PORT = 5000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Ok");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});
