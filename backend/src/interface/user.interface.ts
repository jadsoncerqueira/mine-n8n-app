export default interface IUser {
  id?: string;
  email: string;
  name: string;
  picture: string;
  googgle_id: string;
  created_at: Date;
}

export interface IPayload {
  name: string;
  picture: string;
  email: string;
}
