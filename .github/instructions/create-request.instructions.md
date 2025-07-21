---
applyTo: "**"
---

# Instrução para Criação de Pull Requests Profissionais via CLI

Esta instrução define o fluxo padrão para criação de Pull Requests (PRs) usando o GitHub CLI (`gh`), garantindo clareza, rastreabilidade e alinhamento com as boas práticas do monorepo.

---

## 🔁 Fluxo Automatizado de PR

1. ✅ **Identifique a branch de origem e destino**
   - **Features**: da branch da issue para `dev`
   - **Releases**: de `dev` para `main`
   - **Hotfixes**: da branch da issue para `main`

2. 🔍 **Recupere os commits entre origem e destino**

   ```bash
   git log <destino>..<origem> --pretty=format:"%h %s"
   ```

3. 📝 **Gere a descrição do PR com base nos commits**
   Exemplo de estrutura:

   ```
   ## Alterações incluídas neste PR
   - feat(ui): adiciona novo componente X
   - fix(api): corrige bug Y
   - chore: ajustes de configuração
   ```

4. 🚀 **Crie o Pull Request com `gh pr create`**

   ```bash
   gh pr create \
     --base <destino> \
     --head <origem> \
     --title "feat: resumo do PR" \
     --body "$(git log <destino>..<origem> --pretty=format:'- %s' | cat)"
   ```

5. ✅ **Garanta que o PR:**
   - Reflita **todas as mudanças desde o último merge**
   - Seja **objetivo, técnico e fácil de revisar**
   - Utilize título e descrição **padronizados**

---

## ⚠️ Observações Importantes

- Antes de criar o PR, **garanta que a branch de destino está atualizada**:

  ```bash
  git fetch origin && git checkout <destino> && git pull
  ```

- O parâmetro `--body` pode ser totalmente gerado com `git log` e adaptado conforme necessário.
- Títulos devem sempre indicar o tipo da mudança (e.g., `feat`, `fix`, `chore`) e um resumo claro do objetivo do PR.

---

> Esta instrução assegura que todos os PRs criados via CLI sejam **consistentes, bem documentados e prontos para revisão em ambientes profissionais.**
