# Autenticação API

Este módulo implementa autenticação JWT no backend NestJS.

## Endpoints

- `POST /auth/register`: Cria novo usuário
- `POST /auth/login`: Retorna token JWT
- `POST /auth/profile`: Retorna dados do usuário autenticado (requer Bearer Token)

## Exemplo de uso

```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username":"user","password":"123"}'
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username":"user","password":"123"}'
# Use o access_token retornado:
curl -X POST http://localhost:3000/auth/profile -H "Authorization: Bearer <access_token>"
```

## Fluxo
1. Registro cria usuário em memória
2. Login retorna JWT
3. Profile retorna dados do usuário autenticado

## Observações
- Usuários são mantidos em memória (exemplo)
- Para produção, integre com banco de dados
- O segredo JWT pode ser configurado via variável de ambiente `JWT_SECRET`

---

> Para detalhes técnicos, consulte os arquivos em `apps/api/src/auth/`
