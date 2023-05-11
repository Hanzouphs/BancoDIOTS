import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private ElegibleForLoan: boolean = true;

  constructor(name: string, accountNumber: number, status: boolean){
    super(name, accountNumber, status)
  }

  getLoan = (valor:number): void => {
    if(this.validateLoan()) {
      this.balance += valor
      console.log(`Você pegou ${valor} R$ de empréstimo`)
    }
  }

  private validateLoan = (): boolean => {
    if (this.ElegibleForLoan) {
      return this.ElegibleForLoan
    }
    throw new Error(`Você não possui empréstimo disponível no momento.`)
  }
}
