# Visão Geral

A API é o backend do monorepo, construída com NestJS. Atualmente, implementa:

- Endpoint GET `/` (mensagem fixa)
- Módulo de autenticação JWT (`/auth/register`, `/auth/login`, `/auth/profile`)

## Arquitetura

- Estrutura modular baseada em módulos do NestJS
- Separação clara entre controller, service e DTOs
- Autenticação via JWT, usuários em memória (exemplo)
- Pronto para expansão com banco de dados e integrações

## Decisões Técnicas

- NestJS escolhido pela robustez e escalabilidade
- JWT para autenticação
- Estrutura de pastas alinhada ao padrão do framework
