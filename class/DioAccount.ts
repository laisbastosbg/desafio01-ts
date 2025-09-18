export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit (value: number): void {
    if(this.validateStatus()){
      this.balance += value
      console.log(`Depósito de R$${value} realizado com sucesso!`)
    }
  }

  withdraw = (value: number): void => {
    if(value <= this.balance && this.validateStatus()){
      this.balance -= value
      console.log(`Saque de R$${value} realizado com sucesso!`)
      return
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
