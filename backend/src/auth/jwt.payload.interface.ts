export interface IJwtPayload {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  iat?: Date;
}