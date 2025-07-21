# Testes End-to-End (e2e)

Esta seção documenta a estrutura, execução e boas práticas dos testes end-to-end (e2e) da API.

## Estrutura dos Testes

- Os testes e2e estão localizados em `apps/api/test/`.
- O arquivo principal é `app.e2e-spec.ts`, cobrindo o endpoint raiz (`/`).
- A configuração do Jest para e2e está em `apps/api/test/jest-e2e.json`.

## Como Executar os Testes

```bash
pnpm test --filter api
```

- Certifique-se de que as dependências estejam instaladas (`pnpm install`).
- O comando executa os testes e2e usando Jest.

## Ambiente Necessário

- Assegure que as variáveis de ambiente estejam configuradas conforme o `.env` do projeto.
- O banco de dados (se necessário) deve estar acessível e configurado para testes.

## Exemplos de Casos Cobertos

- Teste do endpoint GET `/` para resposta "Hello World!"
- Teste de registro de usuário (`POST /auth/register`)
- Teste de login e retorno do JWT (`POST /auth/login`)
- Teste de acesso protegido (`POST /auth/profile` com Bearer Token)
- Validação de status HTTP e conteúdo da resposta

## Como Criar Novos Testes

- Crie novos arquivos `.e2e-spec.ts` em `apps/api/test/` para cobrir outros endpoints ou fluxos.
- Utilize o padrão Jest para descrever e organizar os testes.
- Garanta que cada teste seja independente e limpe o ambiente após execução, se necessário.

## Boas Práticas

- Mantenha os testes atualizados conforme a API evolui.
- Cubra todos os endpoints e fluxos críticos.
- Use mocks e fixtures para dados sensíveis ou externos.
- Documente cada novo teste criado.

> Consulte sempre esta seção ao criar ou atualizar testes e2e para garantir padronização e cobertura adequada.
