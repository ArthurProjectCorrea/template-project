# Guia do Monorepo Turborepo

Este documento explica como funciona o monorepo, como criar e usar componentes, páginas, UI compartilhada, shadcn/ui e boas práticas.

## Estrutura do Projeto

```
apps/
  web/         # Frontend Next.js
  docs/        # Documentação Docusaurus
  api/         # Backend NestJS
packages/
  ui/          # Componentes compartilhados (React + shadcn/ui)
  tailwind-config/  # Configuração compartilhada do Tailwind
  typescript-config/ # Configuração compartilhada do TypeScript
  eslint-config/    # Configuração compartilhada do ESLint
```

---

## Como rodar o projeto

```sh
pnpm install
pnpm dev
```

- O comando acima inicia todos os apps em modo desenvolvimento.
- Use `pnpm build` para buildar todos os pacotes/apps.

---

## Como usar componentes compartilhados (`@repo/ui`)

1. Importe o componente desejado:
   ```tsx
   import { Alert } from "@repo/ui";
   ```
2. Use normalmente em qualquer app do monorepo:
   ```tsx
   <Alert>Mensagem de alerta</Alert>
   ```

### Como criar um novo componente UI compartilhado
1. Crie o arquivo do componente em `packages/ui/src/components/ui/NomeDoComponente.tsx`.
2. Exporte no `packages/ui/src/index.ts`:
   ```ts
   export * from "./components/ui/NomeDoComponente";
   ```
3. Rode `pnpm build --filter=@repo/ui` para gerar a build.

---

## Como criar uma nova página no Next.js (web)
1. Crie um arquivo em `apps/web/app/nome-da-pagina/page.tsx`.
2. Exemplo:
   ```tsx
   // apps/web/app/exemplo/page.tsx
   export default function Exemplo() {
     return <div>Minha nova página!</div>;
   }
   ```

---

## Como usar shadcn/ui
- O pacote `@repo/ui` já está preparado para receber componentes shadcn/ui.
- Para criar um novo componente shadcn/ui compartilhado:
  1. Copie o componente do [shadcn/ui](https://ui.shadcn.com/docs/components) para `packages/ui/src/components/ui/`.
  2. Exporte no `index.ts` do pacote ui.
  3. Use normalmente em qualquer app do monorepo.
- Para usar shadcn/ui localmente em um app (ex: web), crie em `apps/web/app/components/ui/`.

---

## Boas práticas
- Sempre exporte componentes compartilhados no `index.ts` do pacote ui.
- Prefira criar componentes globais em `@repo/ui` para reuso entre apps.
- Use o Tailwind compartilhado para manter o design consistente.
- Rode `pnpm build --filter=@repo/ui` após adicionar/editar componentes compartilhados.

---

## Outras dicas
- Para adicionar dependências em um pacote específico: `pnpm add pacote --filter=nome-do-pacote`
- Para rodar apenas um app: `pnpm dev --filter=web`
- Para rodar testes: `pnpm test --filter=web` ou `pnpm test --filter=@repo/ui`

---

## Documentação dos principais comandos
- `pnpm dev` - inicia todos os apps em modo dev
- `pnpm build` - builda todos os apps/pacotes
- `pnpm lint` - roda o lint em todos os pacotes
- `pnpm test` - roda os testes

---

## Links úteis
- [Turborepo Docs](https://turbo.build/repo/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [NestJS Docs](https://docs.nestjs.com/)
- [Docusaurus Docs](https://docusaurus.io/docs)

---

Se tiver dúvidas, consulte este guia ou abra um issue!
