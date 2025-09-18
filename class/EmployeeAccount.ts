import { DioAccount } from "./DioAccount";

export class EmployeeAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit (valor: number): void {
        super.deposit(valor + 10)
    }
}

