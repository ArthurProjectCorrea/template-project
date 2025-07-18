# Testes no Frontend Web

O frontend possui testes unitários e de integração para garantir qualidade e estabilidade.

## Estrutura de testes

## Como executar

```bash
pnpm test --filter web
```

# Testes Automatizados

O frontend utiliza Jest e Testing Library, mas atualmente possui **apenas um teste de exemplo** (`hello.test.ts`). Não há cobertura real de componentes ou integrações.

## Estrutura de testes

- Testes podem ser criados próximos aos componentes ou em arquivos `.test.ts(x)`
- Configuração global em `jest.config.mjs` e `jest.setup.js`

## Exemplo real do projeto

```ts
// apps/web/app/hello.test.ts
describe("Exemplo de teste para Next.js", () => {
  it("deve somar corretamente", () => {
    expect(1 + 1).toBe(2);
  });
});
```

## Como rodar

```bash
pnpm test --filter web
```

## Boas práticas
- Escreva testes para novos componentes e fluxos.
- Mantenha cobertura adequada e revise testes ao alterar funcionalidades.
