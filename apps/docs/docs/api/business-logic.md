# Lógica de Negócio

## Fluxo principal

- GET `/`: retorna "Hello World!"
- POST `/auth/register`: registra usuário em memória
- POST `/auth/login`: valida credenciais e retorna JWT
- POST `/auth/profile`: retorna dados do usuário autenticado via JWT

## Regras de autenticação

- Usuário só pode se registrar se o username não existir
- Login exige credenciais válidas
- Profile exige token JWT válido

## Organização do código

- `AppController` e `AppService`: endpoint raiz
- `AuthController`, `AuthService`, DTOs, Guards e Strategy: fluxo de autenticação

## Observações

- Usuários são mantidos em memória (apenas exemplo)
- Para produção, recomenda-se persistência em banco de dados
