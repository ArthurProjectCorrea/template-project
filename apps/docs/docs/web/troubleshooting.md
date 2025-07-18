
# Troubleshooting e Performance

## Problemas comuns

- **Build falha:** Verifique dependências, scripts e configurações do projeto.
- **Erros de lint:** Rode `pnpm lint --filter web` para identificar e corrigir problemas.
- **Problemas de dependências:** Certifique-se de que todos os pacotes internos e externos estão instalados (`pnpm install`).

## Dicas de performance

- Utilize componentes otimizados e lazy loading.
- Prefira imagens otimizadas no diretório `public/`.
- Monitore o bundle com ferramentas do Next.js.
