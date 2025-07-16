import * as React from "react";

export function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 rounded border border-yellow-400 bg-yellow-50 text-yellow-900 font-semibold">
      {children}
    </div>
  );
}
