import { DioAccount } from "./DioAccount"

export class MasterAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number, status: boolean){
    super(name, accountNumber, status)
    this.doc_id = doc_id
    
  }

  deposit = (valor:number): void => {
    if(this.validateStatusMaster()){
      this.balance += valor + 10;  
      console.log(`Você depositou ${valor} R$ reais`)
    }
  }

  private validateStatusMaster = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}