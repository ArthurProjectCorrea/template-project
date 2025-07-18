## Configurações de Commit e Versionamento

### Commitlint e Convenções de Mensagem

O repositório utiliza o **commitlint** para garantir que todas as mensagens de commit sigam o padrão convencional (Conventional Commits). Isso facilita o versionamento automático e a geração de changelogs.

Exemplo de mensagem válida:

```bash
feat(api): adiciona endpoint de autenticação
fix(ui): corrige bug no botão de submit
```

O commitlint é executado automaticamente via Husky antes de cada commit.

### Husky (Git Hooks)

O **Husky** está configurado para rodar hooks de pré-commit e pré-push, garantindo qualidade e padronização:

- `pre-commit`: roda lint e testes rápidos
- `commit-msg`: valida a mensagem de commit com commitlint

Os hooks estão definidos na pasta `.husky/` na raiz do projeto.

### Changeset (Versionamento e Changelog)

O monorepo utiliza **Changeset** para controle de versões e geração automática de changelogs. Para criar um novo changeset:

```bash
pnpm changeset
```

Após aprovação dos PRs, rode:

```bash
pnpm changeset version
pnpm changeset publish
```

Consulte a documentação do Changeset para fluxos avançados.

## Integrações e Automações do GitHub

### GitHub Actions

O repositório possui pipelines automatizados para:

- Lint, build e testes em todos os PRs
- Publicação de pacotes (quando aplicável)
- Geração de changelog

Os workflows estão definidos em `.github/workflows/`.

### Proteção de Branch (Branch Protection)

Branches principais (ex: `main`) possuem proteção contra push direto. Commits só são permitidos via Pull Request aprovado e com status checks verdes.

---

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
