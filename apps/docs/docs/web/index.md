
# Frontend Web (apps/web)

Esta seção documenta o frontend do monorepo, desenvolvido em Next.js (React 19), com foco em UI compartilhada, estrutura modular e exemplos reais do projeto.

## Visão Geral

O frontend é responsável pela interface visual do sistema, exibindo componentes compartilhados do pacote UI e exemplos de integração visual. Não há integração direta com APIs ou autenticação implementada.

## Como rodar o frontend

```bash
pnpm install
pnpm dev --filter web
```

- O app roda por padrão na porta 3000.
- Não há variáveis de ambiente obrigatórias.

## Estrutura de Pastas

- `app/`: páginas, layout, componentes locais, exemplos e utilitários.
- `app/components/ui/`: componentes locais (ex: botão shadcn/ui)
- `app/demo/`: exemplos de uso de UI compartilhada
- `app/lib/`: utilitários (ex: função cn)
- `public/`: imagens e SVGs

## Uso de Componentes UI

- Importe componentes do pacote `@repo/ui`:

```tsx
import { Alert, OriginalUi } from "@repo/ui";
```

- Importe componentes locais:

```tsx
import { Button } from "@/components/ui/button";
```

Veja exemplos reais em `/demo`.

## Estilos e Tailwind

- Estilos globais em `globals.css`.
- Tailwind configurado via pacote compartilhado.

## Testes

- Testes unitários em `app/hello.test.ts`.
- Execute com:

```bash
pnpm test --filter web
```

## Boas práticas

- Siga os padrões de importação e uso de componentes.
- Utilize variáveis de ambiente para configurações sensíveis.
- Consulte a documentação de rotas e exemplos para integração.

## Contribuição

- Siga o padrão de código e utilize os scripts do `package.json`.
- Documente novos componentes e fluxos implementados.
