# Monorepo e Turborepo

Esta seção documenta a arquitetura, comandos e recursos globais do monorepo.

## Visão Geral

- Monorepo gerenciado com Turborepo e PNPM.
- Estrutura principal: `apps/` (aplicações), `packages/` (pacotes compartilhados).

## Comandos Globais

```bash
pnpm install         # Instala todas as dependências
pnpm build           # Build de todos os apps/pacotes
pnpm dev             # Dev de todos os apps/pacotes
pnpm test            # Testes globais
```

- Use `--filter <nome>` para rodar comandos em apps/pacotes específicos.

## Estrutura de Pastas

- `apps/web`: Frontend Next.js
- `apps/api`: Backend NestJS
- `apps/docs`: Documentação Docusaurus
- `packages/ui`: Componentes React
- `packages/tailwind-config`, `eslint-config`, `typescript-config`: configs globais

## Tasks e Turborepo

- Tasks definidas em `package.json` e `turbo.json`.
- Crie novas tasks editando esses arquivos.
- Exemplo de task customizada:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

## Configurações Globais

- ESLint: regras em `packages/eslint-config/`
- Tailwind: `packages/tailwind-config/`
- TypeScript: `packages/typescript-config/`

## Boas práticas

- Sempre use os scripts PNPM definidos.
- Mantenha as dependências e configs centralizadas.
- Consulte os READMEs e docs de cada pacote/app.

## Dicas e Troubleshooting

- Use cache remoto do Turborepo para builds rápidos.
- Consulte a documentação oficial das ferramentas para detalhes avançados.
