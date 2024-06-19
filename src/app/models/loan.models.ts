import { User } from "./user.models";

export interface ILoan  {
  loanId: string;
  _id: string;
  userId: string;
  amount?: number;
  interestRate?: number;
  startDate: Date;
  endDate: Date;
  professionalCategory: string;
  profession: string;
  duration: number;
  approvalDate: Date;
  status: string;
  transactionId: string;
  client?: User,
  [key: string]: any
}
