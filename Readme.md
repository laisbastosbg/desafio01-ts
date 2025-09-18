# Desafio Formação TypeScript Fullstack Developer

Este projeto faz parte da **Formação TypeScript Fullstack Developer** da plataforma **DIO - Digital Innovation One**. O repositório foi fornecido pela professora **Nathally Souza** com o projeto inicial, e o objetivo foi realizar os desafios descritos abaixo com base no que foi fornecido.

### Tecnologias
- TypeScript

### Como rodar o projeto

1. Clone o repositório:

    ```bash
    git clone <url-do-repositorio>
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Execute o projeto:

    ```bash
    npm run dev
    ```

### Desafios Realizados

- [x] **Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount**
  - Os valores dos saldos foram alterados de acordo com o valor informado para depósito.
  - Apenas contas com o `status` igual a `true` e saldo (`balance`) maior que o valor solicitado podem fazer saques.

- [x] **Implementar o método de empréstimo (getLoan) na classe CompanyAccount**
  - Os valores dos saldos foram acrescidos de acordo com o valor informado para empréstimo.
  - Apenas contas com o `status` igual a `true` podem fazer empréstimos.

- [x] **Criar um novo tipo de conta a partir da DioAccount**
  - Esta conta não recebeu novos atributos.
  - Esta conta possui um método de depósito que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100 resulta em 110 no final).

- [x] **Garantir que todos os atributos de qualquer conta sejam privados.**

- [x] **Os atributos `name` e `accountNumber` não podem ser alterados internamente ou externamente.**

- [x] **Criar instâncias para cada um dos tipos de conta no arquivo `app.ts` e executar os métodos possíveis.**

### Contribuições

Desenvolvido por [Nathally Souza](https://github.com/nathyts)
