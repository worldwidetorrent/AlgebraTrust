import { getApiBaseUrl } from "@/lib/env";
import type { QuadraticDemoResponse } from "@/types/api";

type QuadraticDemoApiResponse = {
  prompt: string;
  equation: string;
  factored_form: string;
  roots: number[];
  trust_checks: {
    id: string;
    label: string;
    status: "pass" | "warn" | "pending";
    detail: string;
  }[];
};

export async function getQuadraticDemo(): Promise<QuadraticDemoResponse> {
  const response = await fetch(`${getApiBaseUrl()}/demo/quadratic`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Demo request failed with status ${response.status}.`);
  }

  const payload = (await response.json()) as QuadraticDemoApiResponse;

  return {
    prompt: payload.prompt,
    equation: payload.equation,
    factoredForm: payload.factored_form,
    roots: payload.roots,
    trustChecks: payload.trust_checks,
  };
}
