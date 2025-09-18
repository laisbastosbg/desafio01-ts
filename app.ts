import { CompanyAccount } from './class/CompanyAccount'
import { EmployeeAccount } from './class/EmployeeAccount'
import { PeopleAccount } from './class/PeopleAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(350)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(1200)
console.log(companyAccount)
const employeeAccount: EmployeeAccount = new EmployeeAccount('Lais', 30)
employeeAccount.deposit(100)
console.log(employeeAccount)
employeeAccount.withdraw(50)
console.log(employeeAccount)
employeeAccount.getBalance()
companyAccount.getLoan(5000)
console.log(companyAccount)