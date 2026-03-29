export type TrustCheckStatus = "pass" | "warn" | "pending";

export type TrustCheck = {
  id: string;
  label: string;
  status: TrustCheckStatus;
  detail: string;
};

export type QuadraticDemoResponse = {
  prompt: string;
  equation: string;
  factoredForm: string;
  roots: number[];
  trustChecks: TrustCheck[];
};
