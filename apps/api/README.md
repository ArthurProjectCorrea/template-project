# Commits, Versionamento e Integrações

Este projeto segue as convenções globais do monorepo para qualidade e automação:

## Commits e Versionamento

- Mensagens de commit validadas por **commitlint** (padrão Conventional Commits)
- Hooks automáticos com **Husky** (`pre-commit`, `commit-msg`)
- Versionamento e changelog automatizados com **Changeset**

Exemplo de commit:

```bash
feat(api): adiciona novo endpoint
fix(api): corrige validação de dados
```

## Integrações do GitHub

- Pipelines automatizadas com **GitHub Actions** (lint, build, test)
- Proteção de branch: PRs obrigatórios e status checks

Consulte a [documentação do monorepo](../../docs/monorepo.md) para detalhes e fluxos completos.

# API

Serviço backend desenvolvido com NestJS, responsável por fornecer o endpoint principal do sistema.

## Propósito

- Servir como base para futuras regras de negócio
- Expor endpoint REST para consumo pelas aplicações web e outros clientes

## Principais Recursos

- Estrutura modular com NestJS
- Endpoint GET `/` que retorna "Hello World!"
- Suporte a testes automatizados

## Como executar

```bash
pnpm install
pnpm start:dev
```

Acesse: http://localhost:4000 (ou porta definida por `PORT`)

---

> Este projeto faz parte do monorepo e é consumido principalmente pela aplicação web.

````

## Run tests

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
````

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
