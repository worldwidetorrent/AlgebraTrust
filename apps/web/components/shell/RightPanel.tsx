type RightPanelProps = {
  children: React.ReactNode;
};

export function RightPanel({ children }: RightPanelProps) {
  return (
    <aside className="panel">
      <header className="panel-header">
        <h2 className="panel-title">Trust review</h2>
        <p className="panel-subtitle">
          Milestone 0 only shows static confidence checks returned by the demo
          endpoint.
        </p>
      </header>

      {children}
    </aside>
  );
}
