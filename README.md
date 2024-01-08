# Cookies 🍪

_Obs: O projeto se chama "cookies" e não "sessions", pois a princípio o objetivo era utilizar apenas cookies._

Projeto com o objetivo de estudar a integração entre express, sessões e redis.

O projeto é composto por 3 aplicações individuais, onde o objetivo é reutilizar a mesma sessão em todos eles.

Para testar a aplicação, basta tentar acessar qualquer rota antes de realizar o login, e verá que acontecerá um erro, sinalizando que não tem permissão para acessar aquela rota. Após realizar o login, deve conseguir acessar
tranquilamente qualquer uma das outras rotas, incluindo a rota de permissões, que mostrará as permissões dinamicante com base no usuário em que você está logado no momento.

---

## Auth

A primeira e principal aplicação é a chamada "auth", onde, como o nome diz, é responsável pela autenticação (login/criação de session) do usuário, que será reutilizado nas outras aplicações.

### Rotas:

- ##### /auth/login

  - **body**:
    - `name` - Nome do usuário;
    - `password` - Senha referente ao nome do usuário;
  - **resumo**: Responsável por receber name e password do usuário, autenticar e salvar uma sessão para ele.

- ##### /
  - **resumo**: Mostra as permissões do usuário na sessão.

---

## Server1

A segunda aplicação é chamada "server1" e serve apenas para verificar se a sessão está se mantendo entre as aplicações.

### Rotas:

- ##### /food

  - **resumo**: Responsável por receber name e password do usuário, autenticar e salvar uma sessão para ele.

- ##### /food/:foodId
  - **params**: `foodId` - ID da comida que deseja visualizar;
  - **resumo**: Pega informação de uma comida específica pelo ID.

---

## Server2

A segunda aplicação é chamada "server2" e também serve apenas para verificar se a sessão está se mantendo entre as aplicações.

### Rotas:

- ##### /vehicle

  - **resumo**: Responsável por receber name e password do usuário, autenticar e salvar uma sessão para ele.

- ##### /vehicle/:vehicleId
  - **params**: `vehicleId` - ID do veículo que deseja visualizar;
  - **resumo**: Pega informação de um veículo específica pelo ID.
