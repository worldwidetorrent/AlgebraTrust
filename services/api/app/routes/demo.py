from fastapi import APIRouter

from app.schemas.quadratic import QuadraticDemoResponse
from app.services.demo_quadratic import get_demo_quadratic

router = APIRouter(prefix="/demo", tags=["demo"])


@router.get("/quadratic", response_model=QuadraticDemoResponse)
def quadratic_demo() -> QuadraticDemoResponse:
    return get_demo_quadratic()
