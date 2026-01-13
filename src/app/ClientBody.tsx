"use client";

export function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <body className="min-h-screen bg-white font-body antialiased">
      {children}
    </body>
  );
}
