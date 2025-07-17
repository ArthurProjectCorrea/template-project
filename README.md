# Turborepo Tailwind CSS starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-tailwind
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Building packages/ui

This example is set up to produce compiled styles for `ui` components into the `dist` directory. The component `.tsx` files are consumed by the Next.js apps directly using `transpilePackages` in `next.config.ts`. This was chosen for several reasons:

- Make sharing one `tailwind.config.ts` to apps and packages as easy as possible.
- Make package compilation simple by only depending on the Next.js Compiler and `tailwindcss`.
- Ensure Tailwind classes do not overwrite each other. The `ui` package uses a `ui-` prefix for it's classes.
- Maintain clear package export boundaries.

Another option is to consume `packages/ui` directly from source without building. If using this option, you will need to update the `tailwind.config.ts` in your apps to be aware of your package locations, so it can find all usages of the `tailwindcss` class names for CSS compilation.

For example, in [tailwind.config.ts](packages/tailwind-config/tailwind.config.ts):

```js
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    "../../packages/ui/*.{js,ts,jsx,tsx}",
  ],
```

If you choose this strategy, you can remove the `tailwindcss` and `autoprefixer` dependencies from the `ui` package.

### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

# Monorepo Turborepo - Guia de Uso

Este repositório utiliza o [Turborepo](https://turbo.build/) para organizar múltiplos apps e pacotes compartilhados. Aqui você encontra Next.js, Docusaurus, NestJS e um design system compartilhado com shadcn/ui.

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

Se tiver dúvidas, consulte este README ou abra um issue!
