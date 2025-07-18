# Script de inicialização para projetos derivados do template-project
# Coleta dados, salva em .env e executa configurações iniciais

function Prompt-Secure($msg) {
    Write-Host $msg -NoNewline
    $secure = Read-Host -AsSecureString
    [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure))
}

# 1. Coleta de dados
$GITHUB_TOKEN = Prompt-Secure "Informe seu GitHub Token: "
$GITHUB_OWNER = Read-Host "Informe o nome do usuário ou organização do GitHub"
$GITHUB_REPO = Read-Host "Informe o nome do repositório (ex: meu-novo-projeto)"

# 2. Descobre tipo e visibilidade do repositório
$repoUrl = "https://api.github.com/repos/$GITHUB_OWNER/$GITHUB_REPO"
$headers = @{ Authorization = "token $GITHUB_TOKEN"; Accept = "application/vnd.github+json" }
$repoInfo = Invoke-RestMethod -Uri $repoUrl -Headers $headers -Method Get
$GITHUB_REPO_TYPE = if ($repoInfo.private) { "private" } else { "public" }
$GITHUB_REPO_SCOPE = if ($repoInfo.owner.type -eq "Organization") { "enterprise" } else { "user" }

# 3. Salva variáveis em .env
$envContent = @()
$envContent += "GITHUB_TOKEN=$GITHUB_TOKEN"
$envContent += "GITHUB_OWNER=$GITHUB_OWNER"
$envContent += "GITHUB_REPO=$GITHUB_REPO"
$envContent += "GITHUB_REPO_TYPE=$GITHUB_REPO_TYPE"
$envContent += "GITHUB_REPO_SCOPE=$GITHUB_REPO_SCOPE"
Set-Content -Path ".env" -Value $envContent

Write-Host "Arquivo .env criado com sucesso!"

# 4. Lê descrição do repositório
$repoDescription = $repoInfo.description
Write-Host "Descrição do repositório: $repoDescription"

# 5. Atualiza commit inicial (rebase/amend)
Write-Host "Atualizando commit inicial para seguir o padrão do projeto..."
git checkout main
git pull
$firstCommitHash = git rev-list --max-parents=0 HEAD
$commitMsg = "chore: projeto inicial gerado a partir do template-project"
git commit --amend -m "$commitMsg" --allow-empty

git push --force

# 6. Cria e sobe a branch dev
git checkout -b dev
Write-Host "Branch dev criada."
git push -u origin dev


# 7. Proteção de branches main e dev
Write-Host "Configurando proteção das branches main e dev..."

function Protect-Branch($branch, $isProd) {
    $url = "https://api.github.com/repos/$GITHUB_OWNER/$GITHUB_REPO/branches/$branch/protection"
    if ($isProd) {
        $body = @{
            required_status_checks = @{
                strict = $true
                contexts = @()
            }
            enforce_admins = $true
            required_pull_request_reviews = @{
                required_approving_review_count = 2
                dismiss_stale_reviews = $true
                require_code_owner_reviews = $true
            }
            restrictions = $null
        } | ConvertTo-Json -Depth 5
    } else {
        $body = @{
            required_status_checks = @{
                strict = $true
                contexts = @()
            }
            enforce_admins = $false
            required_pull_request_reviews = @{
                required_approving_review_count = 1
                dismiss_stale_reviews = $false
                require_code_owner_reviews = $false
            }
            restrictions = $null
        } | ConvertTo-Json -Depth 5
    }
    try {
        Invoke-RestMethod -Uri $url -Method Put -Headers $headers -Body $body
        Write-Host "Proteção aplicada à branch $branch."
    } catch {
        Write-Warning "Falha ao proteger a branch $branch: $_"
    }
}

Protect-Branch "main" $true
Protect-Branch "dev" $false

Write-Host "Configuração inicial e proteção de branches concluídas!"
