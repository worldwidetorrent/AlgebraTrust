from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_demo_quadratic_returns_hardcoded_payload() -> None:
    response = client.get("/demo/quadratic")

    assert response.status_code == 200
    assert response.json() == {
        "prompt": "Solve x^2 - 5x + 6 = 0.",
        "equation": "x^2 - 5x + 6 = 0",
        "factored_form": "(x - 2)(x - 3) = 0",
        "roots": [2.0, 3.0],
        "trust_checks": [
            {
                "id": "factorization",
                "label": "Factorization matches the polynomial",
                "status": "pass",
                "detail": "Expanding (x - 2)(x - 3) reproduces x^2 - 5x + 6.",
            },
            {
                "id": "substitution",
                "label": "Roots satisfy the original equation",
                "status": "pass",
                "detail": "Substituting x = 2 and x = 3 makes the left side equal 0.",
            },
            {
                "id": "solver",
                "label": "Symbolic solve engine",
                "status": "pending",
                "detail": "Real solve logic is intentionally out of scope for Milestone 0.",
            },
        ],
    }


def test_demo_quadratic_cors_preflight() -> None:
    response = client.options(
        "/demo/quadratic",
        headers={
            "Origin": "http://localhost:3000",
            "Access-Control-Request-Method": "GET",
        },
    )

    assert response.status_code == 200
    assert response.headers["access-control-allow-origin"] == "http://localhost:3000"
