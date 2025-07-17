import { Alert, OriginalUi } from "@repo/ui";
import { Button as LocalButton } from "@/components/ui/button";

export default function DemoPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 bg-background p-8">
      <h1 className="text-3xl font-bold">
        Exemplo de UI compartilhada + shadcn/ui
      </h1>
      <section className="flex flex-col gap-6 w-full max-w-md">
        <div className="border rounded p-4 flex flex-col gap-2">
          <span className="font-semibold">
            1. Alert (shadcn/ui) de @repo/ui
          </span>
          <Alert>Alerta compartilhado do pacote @repo/ui (shadcn/ui)</Alert>
        </div>
        <div className="border rounded p-4 flex flex-col gap-2">
          <span className="font-semibold">2. OriginalUi de @repo/ui</span>
          <OriginalUi />
        </div>
        <div className="border rounded p-4 flex flex-col gap-2">
          <span className="font-semibold">
            3. Button (shadcn/ui) local (web)
          </span>
          <LocalButton variant="default">Botão local (web)</LocalButton>
        </div>
      </section>
    </main>
  );
}
