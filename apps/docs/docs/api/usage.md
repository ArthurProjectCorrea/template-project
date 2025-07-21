# Guia de Uso

## Como rodar em desenvolvimento

```bash
pnpm install
pnpm start:dev --filter=api
```

- A API roda por padrão na porta 3000 (ou definida por `PORT`).
- Para autenticação JWT, defina a variável de ambiente `JWT_SECRET` se desejar customizar o segredo.

## Exemplos de uso

### Registro de usuário

```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username":"user","password":"123"}'
```

### Login

```bash
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username":"user","password":"123"}'
```

### Profile (protegido)

```bash
curl -X POST http://localhost:3000/auth/profile -H "Authorization: Bearer <access_token>"
```

## Observações

- Usuários são mantidos em memória (apenas para exemplo)
- Para produção, integre com banco de dados
- O segredo JWT pode ser configurado via variável de ambiente
