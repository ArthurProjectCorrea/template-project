import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docsSidebar: [
    "index",
    {
      type: "category",
      label: "API Backend",
      link: { type: "doc", id: "api/index" },
      items: [
        "api/overview",
        "api/usage",
        "api/routes",
        "api/business-logic",
        "api/services",
        "api/examples",
        "api/e2e-tests",
      ],
    },
    // Outras categorias podem ser adicionadas conforme novos projetos forem documentados
    {
      type: "category",
      label: "Frontend Web",
      link: { type: "doc", id: "web/index" },
      items: [
        "web/overview",
        "web/usage",
        "web/structure",
        "web/ui-components",
        "web/testing",
        "web/contribution",
        "web/troubleshooting",
      ],
    },
    {
      type: "category",
      label: "Componentes UI",
      link: { type: "doc", id: "ui/index" },
      items: ["ui/index", "ui/overview", "ui/usage"],
    },
    "monorepo",
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
