import { makeVar, ReactiveVar } from '@apollo/client'

// eslint-disable-next-line no-shadow
export enum TransactionType {
  setbuyprice = 'setbuyprice', setsellprice = 'setsellprice', approve = 'approve', withdraw = 'withdraw', 
  addAdmin='addAdmin', deleteAdmin='deleteAdmin', setFeeWithdrawAddress='setFeeWithdrawAddress', 
  setSellFee='setSellFee', setBuyFee='setBuyFee', setEnableSell='setEnableSell', send='send', deposit='deposit', setSuperadmin='setSuperadmin'
}

export type Transaction = {
  hash: string
  type: TransactionType
  params?: TransactionParams
  confirmed: boolean
}

export type TransactionParams = {
  address?: string
}

export const transactionModalVar: ReactiveVar<boolean> = makeVar<boolean>(false)
export const transactionLoadingVar: ReactiveVar<boolean> = makeVar<boolean>(false)
export const transactionVar:ReactiveVar<Transaction | undefined> = makeVar<Transaction | undefined>(undefined)

export const handleTransaction = (hash: string, type: TransactionType, params?: TransactionParams) => {
  const transaction: Transaction = { hash, type, params, confirmed: false }
  transactionVar(transaction);
  transactionLoadingVar(true);
  transactionModalVar(true);
}

export const clearTransaction = () => {
  transactionVar(undefined);
  transactionLoadingVar(false);
  transactionModalVar(false);
}
