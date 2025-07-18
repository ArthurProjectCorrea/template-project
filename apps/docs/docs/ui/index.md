# Documentação de Componentes UI (packages/ui)

Esta seção documenta o pacote de componentes React compartilhados do monorepo.

## Visão Geral

O pacote `@repo/ui` reúne componentes reutilizáveis, estilos globais e integrações com Tailwind.

## Como utilizar

- Importe componentes diretamente do pacote:

```js
import { MeuComponente } from "@repo/ui";
```

- Consulte a lista de componentes disponíveis em `src/components/`.

## Lista de Componentes

- Documente cada componente com props, exemplos de uso e dicas de integração.
- Utilize o padrão de nomenclatura e prefixo `ui-` nas classes Tailwind.

## Criando e Testando Componentes

- Novos componentes devem ser criados em `src/components/`.
- Testes em `src/hello.test.ts` ou arquivos de teste dedicados.
- Execute os testes com:

```bash
pnpm test --filter ui
```

## Boas práticas

- Mantenha a documentação dos componentes sempre atualizada.
- Prefira reutilização e padronização visual.
- Documente exemplos práticos e casos de uso reais.

## Contribuição

- Siga o padrão de código e utilize os scripts do `package.json`.
- Documente novos componentes e atualizações relevantes.
