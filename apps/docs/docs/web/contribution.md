
# Contribuição

Para contribuir com o frontend web:

1. Crie uma branch a partir de `main`
2. Faça suas alterações
3. Rode os scripts de lint, formatação, tipos e testes:
   ```bash
   pnpm lint --filter web
   pnpm format --filter web
   pnpm check-types --filter web
   pnpm test --filter web
   pnpm build --filter web
   ```
4. Abra um Pull Request detalhando as mudanças

## Checklist para PRs

- [ ] Código segue o padrão do projeto
- [ ] Testes passam localmente (mesmo que só o exemplo)
- [ ] Não há warnings de lint, typecheck ou formatação
- [ ] Documentação atualizada se necessário
