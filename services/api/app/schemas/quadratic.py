from pydantic import BaseModel


class TrustCheck(BaseModel):
    id: str
    label: str
    status: str
    detail: str


class QuadraticDemoResponse(BaseModel):
    prompt: str
    equation: str
    factored_form: str
    roots: list[float]
    trust_checks: list[TrustCheck]
