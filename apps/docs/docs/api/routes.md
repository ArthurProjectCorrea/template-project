# Rotas e Endpoints

## Lista de Endpoints Disponíveis

### `GET /`

- **Descrição:** Retorna uma mensagem de boas-vindas.
- **Request:** Nenhum parâmetro.
- **Response:**
  ```json
  "Hello World!"
  ```
- **Status:** 200 (OK)

### `POST /auth/register`

- **Descrição:** Cria novo usuário
- **Request:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  { "message": "Usuário registrado com sucesso" }
  ```
- **Status:** 201 (Created) ou 400 (Usuário já existe)

### `POST /auth/login`

- **Descrição:** Autentica usuário e retorna JWT
- **Request:**
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response:**
  ```json
  { "access_token": "<jwt>" }
  ```
- **Status:** 200 (OK) ou 401 (Credenciais inválidas)

### `POST /auth/profile`

- **Descrição:** Retorna dados do usuário autenticado
- **Request:** Header `Authorization: Bearer <access_token>`
- **Response:**
  ```json
  {
    "userId": 1,
    "username": "string"
  }
  ```
- **Status:** 200 (OK) ou 401 (Token inválido)
