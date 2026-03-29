import { MathInput } from "@/components/math/MathInput";
import { LeftPanel } from "@/components/shell/LeftPanel";
import { RightPanel } from "@/components/shell/RightPanel";
import { TrustChecks } from "@/components/trust/TrustChecks";
import type { QuadraticDemoResponse } from "@/types/api";

type WorkspaceShellProps = {
  demo: QuadraticDemoResponse;
  banner?: string | null;
};

export function WorkspaceShell({ demo, banner }: WorkspaceShellProps) {
  return (
    <section className="workspace">
      {banner ? <div className="workspace-banner">{banner}</div> : null}

      <div className="workspace-grid">
        <LeftPanel>
          <MathInput
            prompt={demo.prompt}
            equation={demo.equation}
            factoredForm={demo.factoredForm}
            roots={demo.roots}
          />
        </LeftPanel>

        <RightPanel>
          <TrustChecks checks={demo.trustChecks} />
        </RightPanel>
      </div>
    </section>
  );
}
