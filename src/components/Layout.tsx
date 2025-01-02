export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5">
      <header>
        <h1 className="text-3xl font-bold py-3 border-b">Three.js</h1>
        <main className="flex justify-center items-center h-svh p-5">
          {children}
        </main>
        <footer className="text-center">
          Copyright 2025. Soli. All right reserved.
        </footer>
      </header>
    </div>
  );
}
