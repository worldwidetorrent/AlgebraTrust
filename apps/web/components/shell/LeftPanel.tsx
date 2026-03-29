type LeftPanelProps = {
  children: React.ReactNode;
};

export function LeftPanel({ children }: LeftPanelProps) {
  return (
    <section className="panel">
      <header className="panel-header">
        <h2 className="panel-title">Problem workspace</h2>
        <p className="panel-subtitle">
          This side will eventually handle expression entry, structured solve
          steps, and supporting artifacts.
        </p>
      </header>

      {children}
    </section>
  );
}
