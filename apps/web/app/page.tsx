import { WorkspaceShell } from "@/components/shell/WorkspaceShell";
import { getQuadraticDemo } from "@/lib/api";
import type { QuadraticDemoResponse } from "@/types/api";

const fallbackDemo: QuadraticDemoResponse = {
  prompt: "Solve x^2 - 5x + 6 = 0.",
  equation: "x^2 - 5x + 6 = 0",
  factoredForm: "(x - 2)(x - 3) = 0",
  roots: [2, 3],
  trustChecks: [
    {
      id: "api-unavailable",
      label: "Backend unavailable",
      status: "warn",
      detail: "Start the FastAPI service on port 8000 to load the live demo payload.",
    },
  ],
};

async function loadDemo() {
  try {
    const demo = await getQuadraticDemo();
    return { demo, error: null };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to load the demo payload.";
    return { demo: fallbackDemo, error: message };
  }
}

export default async function HomePage() {
  const { demo, error } = await loadDemo();

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Milestone 0</p>
        <h1>Quadratic workspace shell</h1>
        <p className="hero-copy">
          The frontend is wired to the FastAPI demo endpoint and renders a
          placeholder trust workflow without solve logic or graphing.
        </p>
      </section>

      <WorkspaceShell demo={demo} banner={error} />
    </main>
  );
}
