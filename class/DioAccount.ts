export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  status: boolean = true

  constructor(name: string, accountNumber: number, status: boolean){
    this.name = name
    this.accountNumber = accountNumber
    this.status = status
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor:number): void => {
    if(this.validateStatus()){
      this.balance += valor;  
      console.log(`Você depositou ${valor} R$ reais`)
    }
  }

  withdraw = (valor: number): void => {
    if(this.balance >= valor) {
      this.balance -= valor;
      console.log(`Você sacou ${valor} R$ reais`)
    } else {
      console.log(`Saldo insuficiente para realizar a transação`)
    }
  }

  getBalance = (): void => {
    console.log(`Seu saldo atual é ${this.balance} R$`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
