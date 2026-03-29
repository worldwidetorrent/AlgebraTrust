from app.schemas.quadratic import QuadraticDemoResponse
from app.trust.checks import build_demo_trust_checks


def get_demo_quadratic() -> QuadraticDemoResponse:
    return QuadraticDemoResponse(
        prompt="Solve x^2 - 5x + 6 = 0.",
        equation="x^2 - 5x + 6 = 0",
        factored_form="(x - 2)(x - 3) = 0",
        roots=[2, 3],
        trust_checks=build_demo_trust_checks(),
    )
