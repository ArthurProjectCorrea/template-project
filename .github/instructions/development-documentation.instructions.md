---
applyTo: "apps/docs/**"
---


## Instruções de Documentação para o Monorepo

Cada projeto do monorepo deve ser documentado de acordo com suas características e necessidades específicas, sempre refletindo o estado real do código. Siga o fluxo e as diretrizes abaixo para garantir documentação enxuta, útil e padronizada.

---
### FLUXO PADRÃO PARA DOCUMENTAÇÃO E REVISÃO (OBRIGATÓRIO)
0. **Mapeamento da Estrutura:**
   - Antes de qualquer ação, observe e liste toda a estrutura de arquivos e pastas em `apps/docs/docs` e subdiretórios.
   - Utilize essa análise para garantir que a documentação reflita exatamente o que está implementado e para identificar tópicos/documentos desnecessários.


O agente responsável pela documentação DEVE seguir SEMPRE o fluxo abaixo, de forma proativa, automática e sem exceções:

1. **Ordem obrigatória:** documentar e revisar primeiro a API (`apps/api`), depois o frontend web (`apps/web`), em seguida o pacote de UI (`packages/ui`) e por último o monorepo/Turborepo.
2. **Análise real do projeto:** antes de criar, atualizar ou remover qualquer documentação, analise o código e a estrutura real de cada projeto para identificar o que está implementado, quais fluxos existem, quais arquivos são relevantes e quais integrações estão presentes.
3. **Remoção de arquivos/documentação desnecessária:**
   - Consulte TODO o diretório `apps/docs/docs/` e SUBDIRETÓRIOS.
   - Remova arquivos/tópicos/documentações que não tenham relevância ou não estejam implementados (ex: não crie ou mantenha arquivo de auth se não há autenticação implementada).
   - A REMOÇÃO DEVE SER FEITA OBRIGATORIAMENTE VIA TERMINAL, utilizando comandos apropriados para o sistema operacional (ex: `Remove-Item` no PowerShell do Windows).
   - Certifique-se de que nenhum arquivo/documentação desnecessária permaneça após a revisão.
   - Não ignore arquivos vazios, exemplos fictícios ou tópicos não implementados: tudo deve ser removido se não houver implementação real correspondente.
4. **Criação/atualização de arquivos:** crie ou atualize arquivos de documentação apenas para tópicos que realmente existem e são relevantes, sempre seguindo o padrão de separação de arquivos já adotado (um arquivo por tópico, ex: `overview.md`, `usage.md`, `structure.md`, etc).
5. **Sidebar:** mantenha o arquivo `sidebars.ts` sempre atualizado, listando explicitamente cada arquivo relevante na ordem correta.
6. **Padronização:** utilize títulos hierárquicos, blocos de código, tabelas, listas, avisos e exemplos reais do código, conforme as diretrizes deste documento. Nunca inclua exemplos, fluxos, endpoints ou integrações fictícias.
7. **Revisão final:**
   - Garanta que toda a documentação esteja atualizada, sem duplicidade, fácil de navegar, com sumário e links internos claros.
   - Revise minuciosamente TODOS os arquivos em `apps/docs/docs/` e subdiretórios, removendo qualquer item que não reflita o estado real do projeto.
   - Certifique-se de que a sidebar (`sidebars.ts`) não referencie arquivos inexistentes ou tópicos não implementados.
   - NADA deve ser ignorado: a documentação deve ser enxuta, útil, organizada e SEMPRE refletir o que está implementado.

9. **Revisão dos README.md:** revise todos os arquivos `README.md` dos projetos (apps e packages), garantindo que estejam atualizados, reflitam o resumo real do projeto correspondente e estejam alinhados com a documentação técnica.

> O agente deve agir SEMPRE de forma autônoma, sem pedir permissão, garantindo documentação enxuta, útil, organizada e baseada no que está implementado.
---


### 1. API (apps/api)

**Objetivo:** Documentar o backend do monorepo, desenvolvido em NestJS, para uso por desenvolvedores internos.

**Diretrizes:**
- Utilize o frontmatter YAML no início de cada arquivo `.md` para definir propriedades extras (opcional com sidebar manual).
- Use títulos hierárquicos (`#`, `##`, `###`) para estruturar o conteúdo.
- Prefira links internos relativos e sem extensão `.md`.
- Utilize blocos de código com sintaxe destacada (ex: `js`, `bash`, `json`).
- Adote tabelas para sumarizar parâmetros, respostas ou propriedades.
- Use blocos de aviso (`:::tip`, `:::info`, `:::warning`, `:::danger`).
- Inclua listas ordenadas e não ordenadas para organizar tópicos e etapas.
- Sempre que possível, utilize imagens, diagramas ou fluxogramas (coloque arquivos em `docs/static/img`).
- Sidebar manual em `sidebars.ts` para garantir ordem e navegação exata.
- Estruture a documentação por seções e tópicos para facilitar a navegação.
- Nunca crie exemplos, fluxos, endpoints ou integrações fictícios.
- Sempre reflita o estado real do projeto.


**Conteúdo obrigatório:**

1. **Visão Geral**
   - Propósito do backend e seu papel no monorepo.
   - Arquitetura geral e principais decisões técnicas.
2. **Guia de Uso**
   - Como rodar o projeto em desenvolvimento.
   - Variáveis de ambiente e configurações necessárias.
   - Fluxos de autenticação e autorização (se aplicável).
3. **Rotas e Endpoints**
   - Listagem detalhada de todas as rotas/URLs disponíveis.
   - Para cada rota: método HTTP, parâmetros, exemplos de request/response, status codes, explicação do propósito.
4. **Lógica de Negócio**
   - Descrição das principais regras de negócio implementadas.
   - Fluxos importantes e como estão organizados no código.
5. **Funções e Serviços Importantes**
   - Documente funções, serviços e utilitários reutilizáveis.
   - Explique quando e como utilizar cada um.
6. **Exemplos de Uso**
   - Exemplos práticos de consumo da API (curl, HTTPie, código JS/TS, etc).
7. **Referências e Integrações**
   - Integrações externas, dependências relevantes e pontos de extensão.
8. **Testes End-to-End (e2e)**
   - Explique a estrutura dos testes e2e presentes no projeto.
   - Mostre como executar os testes e2e (comando, dependências, ambiente).
   - Indique onde encontrar os arquivos de teste e exemplos de casos cobertos.
   - Oriente sobre como criar novos testes e boas práticas para cobertura.
9. **Frontend Web (apps/web)**
   - Visão geral do frontend, propósito e tecnologias utilizadas (Next.js, integração com API, etc).
   - Como rodar o frontend em desenvolvimento e produção.
   - Estrutura de pastas e principais arquivos.
   - Como consumir a API e exemplos de integração.
   - Como utilizar componentes do pacote UI.
   - Configuração de variáveis de ambiente e arquivos de configuração relevantes.
   - Testes e boas práticas para frontend.
   - Fluxos de autenticação/autorização (se aplicável).
   - Como customizar estilos e usar o Tailwind.
   - Dicas de performance, deploy e troubleshooting.
   - Links para documentação de rotas, páginas e exemplos práticos.
   - Como contribuir e padrões de código para o frontend.
10. **Documentação de Componentes UI (packages/ui)**
    - Visão geral do pacote de componentes compartilhados.
    - Como importar e utilizar componentes do pacote UI no frontend.
    - Lista de componentes disponíveis, props e exemplos de uso.
    - Convenções de nomenclatura, estilos e integração com Tailwind.
    - Como criar, documentar e testar novos componentes.
    - Boas práticas para reutilização e manutenção dos componentes.
    - Como contribuir para o pacote UI.
    - Links para exemplos e documentação de referência.
11. **Monorepo e Turborepo**
    - Visão geral da arquitetura do monorepo e uso do Turborepo.
    - Como instalar dependências, rodar build, dev e test globalmente.
    - Estrutura de pastas e relação entre apps e packages.
    - Como criar e rodar tasks customizadas com Turborepo.
    - Comandos úteis do monorepo (pnpm, turbo, etc).
    - Como funcionam as configurações globais: ESLint, Tailwind, TypeScript.
    - Como adicionar novos apps/pacotes ao monorepo.
    - Boas práticas de organização, versionamento e colaboração.
    - Dicas de troubleshooting, cache e performance.
    - Links para documentação oficial das ferramentas utilizadas.

**Boas práticas:**

- Use linguagem clara, objetiva e voltada ao público desenvolvedor.
- Sempre que possível, inclua exemplos de código e fluxogramas.
- Atualize a documentação sempre que houver mudanças relevantes na API.

---

> Estas instruções servem para orientar agentes de IA (ex: documentary-filmmaker) na geração de documentação técnica detalhada e útil para o time de desenvolvimento do monorepo.
