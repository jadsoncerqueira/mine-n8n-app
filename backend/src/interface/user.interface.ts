import { JwtPayload } from "jsonwebtoken";

export default interface IUser {
  id?: string;
  email: string;
  name: string;
  picture: string;
  google_id?: string;
  created_at?: Date;
}

export interface IPayload extends JwtPayload {
  email: string;
  name: string;
  picture: string;
  google_id?: string;
}
