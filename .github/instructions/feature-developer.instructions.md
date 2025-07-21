---
applyTo: "**"
---

## Instrução para Execução Profissional de Issues via Copilot

Quando for fornecida a URL de uma issue do GitHub neste chat, siga o fluxo abaixo com **autonomia, precisão técnica e postura de desenvolvedor fullstack sênior**.

---

### 🔁 Fluxo Geral de Processamento de Issues

1. **Receba a URL da issue.**
2. **Identifique a branch associada à issue**, seguindo o padrão: `feat/<etapa>/<tarefa>` ou similar.
3. **Determine o tipo da issue** (ex: feature, test, fix, chore, docs).
4. **Inicie o fluxo correspondente** ao tipo de issue.
   _(Abaixo está o fluxo específico para `Feature`)_

---

## 🚀 Fluxo de Implementação de Feature

5. **Implemente a solução proposta**, analisando a estrutura atual do projeto e **reutilizando o máximo de recursos já existentes**.
   - Siga as boas práticas e padrões de arquitetura aplicáveis a **NestJS**, **Next.js** e **Turborepo**.
   - Mantenha o código limpo, modular e reaproveitável.

6. **Implemente testes automatizados**, cobrindo:
   - Testes **unitários** para funções e serviços principais
   - Testes **e2e** para validar o comportamento da feature integrada

7. **Execute os comandos de validação** localmente para garantir a integridade da alteração:

   ```bash
   turbo lint
   turbo test
   turbo build
   turbo dev
   turbo check:workflow
   ```

8. **Documente a implementação** com clareza:
   - Atualize ou crie documentos técnicos em `apps/docs`
   - Inclua instruções, exemplos de uso e contexto técnico da funcionalidade

9. **Formate todos os arquivos modificados** para manter o padrão do projeto:

   ```bash
   turbo format
   ```

10. **Realize commits separados por contexto**:

- Um commit para os arquivos de **implementação**
- Um commit para os arquivos de **teste**
- Um commit para os arquivos de **documentação**

> Exemplo de mensagens:

```bash
feat(#132): implementar API de redefinição de senha
test(#132): adicionar testes unitários e e2e para a nova API
docs(#132): documentar uso da API de redefinição em apps/docs
```

11. **Crie um Pull Request para a branch `dev`**, incluindo:

- Título claro com prefixo `feat:`
- Descrição automática com os commits relevantes
- Verificação se todos os testes passaram

---

### ✅ Postura Profissional Esperada

- Mantenha uma abordagem **independente, objetiva e analítica**
- **Não interrompa o fluxo para solicitar permissões**
- Assuma responsabilidade pela **entrega completa**, incluindo testes e documentação
- Garanta que **todos os critérios da issue estejam atendidos** antes de encerrar a tarefa

---

> Esta instrução garante um fluxo profissional e automatizado na execução de features, tornando o Copilot um executor confiável de ponta a ponta em ambientes com NestJS, Next.js e Turborepo.
