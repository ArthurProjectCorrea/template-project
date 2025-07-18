# Componentes de UI

O frontend utiliza:

- **Componentes compartilhados** do pacote `@repo/ui` (ex: `Alert`, `OriginalUi`)
- **Componentes locais** customizados, seguindo o padrão shadcn/ui (ex: `Button`)

## Exemplos reais do projeto

### Componente compartilhado (`@repo/ui`)

```tsx
import { Alert, OriginalUi } from "@repo/ui";

<Alert>Alerta compartilhado do pacote @repo/ui (shadcn/ui)</Alert>
<OriginalUi />
```

### Componente local (web)

```tsx
import { Button } from "@/components/ui/button";

<Button variant="default">Botão local (web)</Button>;
```

### Demonstração

Acesse `/demo` para ver exemplos reais de uso de componentes compartilhados e locais.
