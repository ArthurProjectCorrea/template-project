# Uso e Ambiente

## Instalação

1. Instale as dependências do monorepo:

   ```bash
   pnpm install
   ```

2. Execute o frontend web:

   ```bash
   pnpm dev --filter web
   ```

3. Acesse em [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

- `pnpm dev --filter web`: inicia o servidor de desenvolvimento
- `pnpm build --filter web`: build de produção
- `pnpm start --filter web`: inicia o servidor em modo produção
- `pnpm test --filter web`: executa os testes unitários (exemplo básico)
- `pnpm lint --filter web`: executa o linter
- `pnpm format --filter web`: formata o código com Prettier
- `pnpm check-types --filter web`: checa os tipos TypeScript

## Variáveis de Ambiente

Não há variáveis obrigatórias para rodar o frontend. O projeto pode ser executado diretamente após a instalação das dependências.
