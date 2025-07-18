# Lógica de Negócio

Atualmente, a API implementa apenas uma lógica simples de resposta à requisição GET na raiz (`/`), retornando a mensagem "Hello World!".

Não há regras de negócio, autenticação, autorização ou manipulação de dados implementadas neste momento.

O código está organizado em:

- `AppController`: responsável por receber a requisição e delegar ao serviço.
- `AppService`: responsável por retornar a mensagem fixa.
