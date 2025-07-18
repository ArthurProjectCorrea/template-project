# Copilot Instructions for template-project

## Visão Geral e Arquitetura

- Monorepo gerenciado com **Turborepo** e **PNPM**.
- Estrutura principal:
  - `apps/web`: Frontend Next.js (rotas, UI, integração com API)
  - `apps/api`: Backend NestJS (REST, lógica de negócio)
  - `apps/docs`: Documentação central (Docusaurus)
  - `packages/ui`: Componentes React compartilhados (com shadcn/ui)
  - `packages/tailwind-config`, `eslint-config`, `typescript-config`: Configurações globais
- Comunicação: O frontend consome APIs do backend; UI e estilos são importados do pacote `ui`.

## Fluxos de Desenvolvimento

- Instalação: `pnpm install` na raiz
- Build global: `pnpm build` (compila todos os apps/pacotes)
- Desenvolvimento:
  - Web: `pnpm dev --filter=web` (porta 3001)
  - API: `pnpm start:dev --filter=api` (porta 3000)
  - Docs: `pnpm start --filter=docs` (porta 3002)
- Testes: `pnpm test --filter=<app|package>`
- Lint: `pnpm lint --filter=<app|package>`
- Para comandos específicos, consulte os scripts em cada `package.json`.

## Convenções e Padrões

- Sempre use os scripts PNPM definidos nos `package.json`.
- Compartilhamento de código via pacotes internos (`ui`, `eslint-config`, etc).
- Configurações TypeScript centralizadas em `packages/typescript-config`.
- Tailwind centralizado em `packages/tailwind-config`.
- Componentes do pacote `ui` usam prefixo `ui-` nas classes Tailwind.
- Exporte componentes compartilhados no `packages/ui/src/index.ts`.
- Cada app/pacote possui `README.md` com instruções e propósito.

## Integrações e Comunicação

- O frontend (`web`) consome APIs do backend (`api`).
- Componentes visuais e estilos são importados do pacote `ui`.
- Documentação e exemplos centralizados em `apps/docs`.

## Exemplos e Arquivos-Chave

- `apps/web/next.config.ts`: Integração Next.js com pacotes internos
- `apps/api/src/main.ts`: Ponto de entrada do backend
- `packages/ui/src/`: Componentes React compartilhados
- `packages/tailwind-config/tailwind.config.ts`: Configuração global do Tailwind
- `apps/docs/sidebars.ts`: Sidebar manual da documentação

## Dicas e Práticas Específicas

- Use `--filter <nome>` para rodar comandos em apps/pacotes específicos
- Para adicionar dependências: `pnpm add <pacote> --filter=<nome-do-pacote>`
- Para rodar apenas um app: `pnpm dev --filter=web`
- Para rodar testes: `pnpm test --filter=web` ou `pnpm test --filter=@repo/ui`
- Rode `pnpm build --filter=@repo/ui` após editar componentes compartilhados
- Consulte os READMEs e docs de cada pacote/app para detalhes e exemplos reais

---

> Estas instruções são voltadas para agentes de IA que atuam neste monorepo. Atualize este arquivo sempre que padrões, fluxos ou integrações evoluírem.
