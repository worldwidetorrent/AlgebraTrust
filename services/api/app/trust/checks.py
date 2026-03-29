from app.schemas.quadratic import TrustCheck


def build_demo_trust_checks() -> list[TrustCheck]:
    return [
        TrustCheck(
            id="factorization",
            label="Factorization matches the polynomial",
            status="pass",
            detail="Expanding (x - 2)(x - 3) reproduces x^2 - 5x + 6.",
        ),
        TrustCheck(
            id="substitution",
            label="Roots satisfy the original equation",
            status="pass",
            detail="Substituting x = 2 and x = 3 makes the left side equal 0.",
        ),
        TrustCheck(
            id="solver",
            label="Symbolic solve engine",
            status="pending",
            detail="Real solve logic is intentionally out of scope for Milestone 0.",
        ),
    ]
