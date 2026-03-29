import type { TrustCheck } from "@/types/api";

type TrustChecksProps = {
  checks: TrustCheck[];
};

export function TrustChecks({ checks }: TrustChecksProps) {
  return (
    <div className="trust-check-list">
      {checks.map((check) => (
        <article className="trust-check" key={check.id}>
          <div className="trust-check-header">
            <h3 className="trust-check-title">{check.label}</h3>
            <span className={`trust-check-status trust-check-status-${check.status}`}>
              {check.status}
            </span>
          </div>
          <p className="trust-check-detail">{check.detail}</p>
        </article>
      ))}
    </div>
  );
}
