import { IUserModel } from '../../users/users.model';

declare global {
  namespace Express {
    interface Request {
      user: IUserModel;
    }
  }
}
