# Commits, Versionamento e Integrações

Este pacote segue as convenções globais do monorepo para qualidade e automação:

## Commits e Versionamento

- Mensagens de commit validadas por **commitlint** (padrão Conventional Commits)
- Hooks automáticos com **Husky** (`pre-commit`, `commit-msg`)
- Versionamento e changelog automatizados com **Changeset**

Exemplo de commit:

```bash
feat(ui): adiciona novo componente
fix(ui): corrige estilo do botão
```

## Integrações do GitHub

- Pipelines automatizadas com **GitHub Actions** (lint, build, test)
- Proteção de branch: PRs obrigatórios e status checks

Consulte a [documentação do monorepo](../../docs/monorepo.md) para detalhes e fluxos completos.

# UI Package

Este pacote contém componentes de interface reutilizáveis para o monorepo, facilitando a padronização visual e a reutilização de elementos entre diferentes aplicações.

## Propósito

- Centralizar componentes visuais compartilhados (React, estilos, etc.)
- Promover consistência visual entre os projetos
- Facilitar manutenção e evolução dos componentes

## Principais Recursos

- Componentes React prontos para uso
- Estilos globais compartilhados
- Configurações de lint e testes para UI

## Como usar

Importe os componentes deste pacote nos projetos que precisam de elementos visuais padronizados.

---

> Este pacote é parte do monorepo e deve ser utilizado em conjunto com os demais projetos para garantir uma experiência visual consistente.
