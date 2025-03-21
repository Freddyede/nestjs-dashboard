interface IRoles {
  name: string;
}

export interface IUser {
  id: number;
  email?: string;
  password?: string;
  roles: IRoles | undefined;
}
