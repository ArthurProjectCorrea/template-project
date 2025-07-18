---
applyTo: "apps/docs/**"
---

## 📚 Diretrizes Oficiais de Documentação do Monorepo

Estas instruções definem o padrão **único e obrigatório** para a geração e manutenção da documentação técnica em Markdown no monorepo. Toda documentação **deve refletir exatamente o que está implementado** e seguir uma estrutura coesa, enxuta e voltada para desenvolvedores.

---

### ✅ Fluxo Geral (Obrigatório para todos os agentes e colaboradores)

O agente de documentação deve seguir **sempre** as etapas abaixo, de forma **autônoma**, **proativa** e **sem exceções**:

1. **Mapeamento inicial**
   - Liste e revise a estrutura de arquivos existente em `apps/docs/docs/` e subdiretórios.
   - Use essa visão para alinhar os tópicos com o que está de fato implementado.

2. **Ordem de documentação obrigatória**
   Documente os projetos na seguinte ordem:
   1. `apps/api`
   2. `apps/web`
   3. `packages/ui`
   4. Estrutura do monorepo (`apps`, `packages`, `turborepo`)

3. **Análise real do código antes de escrever**
   - Revise a estrutura, implementações e fluxos reais de cada projeto.
   - Só documente aquilo que **existe de fato**.

4. **Remoção de arquivos/documentação inválida ou desnecessária**
   - Apague arquivos que estejam vazios, duplicados, obsoletos ou irrelevantes.
   - Isso inclui exemplos fictícios, fluxos inexistentes, endpoints não implementados etc.
   - Use comandos apropriados no terminal (ex: `rm`, `Remove-Item`) para deletar os arquivos.

5. **Criação/atualização de arquivos válidos**
   - Documente apenas o que está presente no código.
   - Mantenha a separação por tópicos (ex: `overview.md`, `usage.md`, `routes.md`).

6. **Atualização da Sidebar**
   - Mantenha o `sidebars.ts` sincronizado com os arquivos `.md` válidos, na ordem correta.

7. **Padrão de formatação obrigatória**
   - Use títulos hierárquicos (`#`, `##`, `###`).
   - Utilize blocos de código com sintaxe (`ts`, `json`, `bash` etc).
   - Use tabelas, listas e blocos de aviso (`:::tip`, `:::warning` etc).
   - Utilize imagens ou diagramas reais, colocados em `docs/static/img`.
   - **Nunca crie conteúdo fictício.**

8. **Revisão final e validação**
   - Navegue por todo o conteúdo gerado para validar clareza, estrutura, links internos e consistência com o código.
   - Verifique se a sidebar está limpa e funcional.
   - Elimine qualquer item redundante ou desatualizado.

9. **Atualização dos `README.md` dos projetos**
   - Todos os apps e packages devem ter README atualizados e alinhados com os conteúdos da documentação.

---

> O agente deve atuar **autonomamente**, sempre garantindo uma documentação **realista**, **útil**, **organizada** e **focada no que está implementado**.

---

## 📦 Instruções Específicas por Projeto

### 1. `apps/api` – Backend (NestJS)

**Objetivo:** documentar rotas, lógica, serviços e testes da API.

**Conteúdo obrigatório:**

- **Visão geral do projeto** e sua arquitetura
- **Guia de uso local** (instalação, variáveis, ambiente, dev)
- **Rotas** (método, path, parâmetros, status, exemplos reais)
- **Lógica de negócio** (regras principais e estrutura no código)
- **Serviços e utilitários reutilizáveis**
- **Testes E2E** (estrutura, exemplos, como rodar)
- **Integrações externas e referências**

---

### 2. `apps/web` – Frontend (Next.js)

**Objetivo:** documentar estrutura, consumo da API e boas práticas.

**Conteúdo obrigatório:**

- Visão geral e arquitetura do frontend
- Como rodar localmente e em produção
- Consumo da API e uso dos componentes do pacote UI
- Autenticação/autorização (se aplicável)
- Organização de arquivos e configuração do Tailwind
- Boas práticas, testes, performance e troubleshooting

---

### 3. `packages/ui` – Biblioteca de Componentes

**Objetivo:** documentar componentes compartilhados e como usá-los.

**Conteúdo obrigatório:**

- Como importar e utilizar componentes
- Lista de componentes com props e exemplos
- Estilo, padrão de nomenclatura e integração com Tailwind
- Como criar e documentar novos componentes
- Convenções e boas práticas

---

### 4. Monorepo e Turborepo

**Objetivo:** explicar a arquitetura geral e o funcionamento do monorepo.

**Conteúdo obrigatório:**

- Estrutura de pastas e relação entre apps e packages
- Comandos globais úteis (build, dev, test)
- Configurações globais (TypeScript, Tailwind, ESLint etc)
- Como criar novos apps/pacotes
- Boas práticas de colaboração e performance
- Configurações de commit (commitlint, convenções de mensagem, hooks do Husky)
- Integrações e automações do GitHub (actions, PRs, branch protection)
- Uso de Changeset para versionamento e changelog
- Como o Husky está configurado e utilizado no repositório

---

## 🧠 Boas Práticas Gerais

- Escreva para desenvolvedores: foco na clareza, concisão e utilidade.
- **Nunca documente o que não existe.**
- Sempre que possível, use exemplos reais e fluxogramas.
- Atualize sempre que houver mudanças relevantes no projeto.
- Use linguagem técnica, mas acessível.
- Mantenha consistência de formatação entre arquivos.

---

> Esta instrução é voltada a **agentes de IA e humanos**, e deve ser seguida em todos os processos de documentação. Toda geração automática ou semiautomática deve respeitar estas diretrizes sem exceção.
