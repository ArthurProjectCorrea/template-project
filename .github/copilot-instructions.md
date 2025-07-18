# Copilot Instructions for template-project

## Visão Geral da Arquitetura
- Monorepo gerenciado com Turborepo e PNPM.
- Estrutura principal:
  - `apps/web`: Frontend Next.js (interface do usuário, rotas, integração com API).
  - `apps/api`: Backend NestJS (APIs REST, lógica de negócio, autenticação).
  - `apps/docs`: Documentação central (Docusaurus, tutoriais, guias, exemplos).
  - `packages/ui`: Componentes React reutilizáveis e estilos globais.
  - `packages/eslint-config`, `typescript-config`, `tailwind-config`: Configurações compartilhadas.

## Fluxos de Desenvolvimento
- Instalação: `pnpm install` na raiz do projeto.
- Build: Use `pnpm build` para compilar todos os pacotes e apps.
- Desenvolvimento:
  - Web: `pnpm dev` em `apps/web` (porta 3001)
  - API: `pnpm start:dev` em `apps/api` (porta 3000)
  - Docs: `pnpm start` em `apps/docs` (porta 3002)
- Testes: Utilize `pnpm test` nos diretórios de cada pacote/app.
- Lint: `pnpm lint` para checagem de código.

## Convenções e Padrões
- Compartilhamento de código via pacotes internos (`ui`, `eslint-config`, etc).
- Configurações TypeScript centralizadas em `packages/typescript-config`.
- Estilos globais e Tailwind centralizados em `packages/tailwind-config`.
- Componentes do pacote `ui` usam prefixo `ui-` nas classes Tailwind para evitar conflitos.
- Cada app/pacote possui seu próprio `README.md` com instruções e propósito.

## Integrações e Comunicação
- O frontend (`web`) consome APIs expostas pelo backend (`api`).
- Componentes visuais e estilos são importados do pacote `ui`.
- Documentação e exemplos de uso estão centralizados em `apps/docs`.

## Exemplos de Arquivos Importantes
- `apps/web/next.config.ts`: Configuração do Next.js e integração com pacotes internos.
- `apps/api/src/main.ts`: Ponto de entrada do backend NestJS.
- `packages/ui/src/`: Componentes React compartilhados.
- `packages/tailwind-config/tailwind.config.ts`: Configuração global do Tailwind.

## Observações
- Sempre utilize os scripts PNPM definidos nos `package.json` de cada app/pacote.
- Siga os padrões de importação e uso de componentes compartilhados para garantir consistência.
- Consulte os READMEs de cada projeto para detalhes específicos.

---

> Estas instruções são voltadas para agentes de IA que atuam neste monorepo. Atualize este arquivo conforme padrões e fluxos evoluírem.
