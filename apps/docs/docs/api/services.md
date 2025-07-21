# Funções e Serviços Importantes

## Serviços Existentes

### AppService

- Responsável por retornar a mensagem "Hello World!" para o endpoint GET `/`.

### AuthService

- Responsável por:
  - Validar credenciais de login
  - Registrar novos usuários
  - Gerar e validar tokens JWT
- Utiliza array em memória para armazenar usuários (exemplo)
- Integra com JwtService do NestJS
