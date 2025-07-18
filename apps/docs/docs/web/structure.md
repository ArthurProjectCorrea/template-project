# Estrutura de Pastas e Arquivos

```
apps/web/
├── app/
│   ├── components/
│   │   └── ui/
│   │       └── button.tsx         # Botão local (shadcn/ui)
│   ├── demo/
│   │   └── page.tsx               # Exemplo de uso de UI compartilhada
│   ├── lib/
│   │   └── utils.ts               # Função utilitária cn()
│   ├── globals.css                # Estilos globais (Tailwind, variáveis)
│   ├── layout.tsx                 # Layout raiz do Next.js
│   ├── page.tsx                   # Página principal
│   └── hello.test.ts              # Exemplo de teste unitário
├── public/                        # SVGs, imagens e assets estáticos
├── package.json                   # Configuração de dependências e scripts
├── tsconfig.json                  # Configuração TypeScript
├── next.config.ts                 # Configuração Next.js
├── postcss.config.js              # Configuração PostCSS/Tailwind
├── jest.config.mjs                # Configuração de testes
├── jest.setup.js                  # Setup de testes
├── README.md                      # Documentação do projeto
└── ...                            # Outros arquivos
```

## Destaques

- `app/`: Estrutura baseada em app directory do Next.js 13+.
- `components/ui/`: Componentes locais (ex: botão) e integração com shadcn/ui.
- `lib/`: Funções utilitárias (ex: `cn`).
- `demo/`: Página de demonstração de componentes compartilhados.
- `public/`: SVGs, imagens e assets estáticos.
- `globals.css`: Estilos globais com Tailwind e variáveis CSS.
- `jest.config.mjs` e `jest.setup.js`: Configuração de testes.
