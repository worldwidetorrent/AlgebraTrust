type MathInputProps = {
  prompt: string;
  equation: string;
  factoredForm: string;
  roots: number[];
};

export function MathInput({
  prompt,
  equation,
  factoredForm,
  roots,
}: MathInputProps) {
  return (
    <div className="math-card">
      <div>
        <p className="math-label">Prompt</p>
        <p className="math-prompt">{prompt}</p>
      </div>

      <div className="equation-block">
        <p className="math-label">Equation</p>
        <code>{equation}</code>
      </div>

      <div className="equation-block">
        <p className="math-label">Factored form</p>
        <code>{factoredForm}</code>
      </div>

      <div className="roots-block">
        <p className="math-label">Roots</p>
        <code>{roots.join(", ")}</code>
      </div>
    </div>
  );
}
