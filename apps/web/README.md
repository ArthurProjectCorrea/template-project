# Commits, Versionamento e Integrações

Este projeto segue as convenções globais do monorepo para qualidade e automação:

## Commits e Versionamento

- Mensagens de commit validadas por **commitlint** (padrão Conventional Commits)
- Hooks automáticos com **Husky** (`pre-commit`, `commit-msg`)
- Versionamento e changelog automatizados com **Changeset**

Exemplo de commit:

```bash
feat(web): adiciona nova página
fix(web): corrige layout responsivo
```

## Integrações do GitHub

- Pipelines automatizadas com **GitHub Actions** (lint, build, test)
- Proteção de branch: PRs obrigatórios e status checks

Consulte a [documentação do monorepo](../../docs/monorepo.md) para detalhes e fluxos completos.

# Web

Aplicação web construída com Next.js, responsável pela interface principal do usuário no monorepo.

## Propósito

- Fornecer a interface visual e experiência do usuário para o sistema
- Consumir APIs e exibir dados de forma interativa
- Servir como ponto de entrada para usuários finais

## Principais Recursos

- Estrutura baseada em Next.js (React)
- Suporte a rotas dinâmicas e estáticas
- Integração com API backend
- Componentes reutilizáveis e estilos globais

## Como executar

```bash
pnpm install
pnpm dev
```

Acesse: http://localhost:3001

---

> Este projeto faz parte do monorepo e utiliza recursos compartilhados dos pacotes internos.
