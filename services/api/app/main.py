from fastapi import FastAPI

from app.core.config import get_settings
from app.core.cors import configure_cors
from app.routes.demo import router as demo_router
from app.routes.health import router as health_router


def create_app() -> FastAPI:
    settings = get_settings()
    application = FastAPI(title=settings.app_name)

    configure_cors(application, settings)
    application.include_router(health_router)
    application.include_router(demo_router)

    return application


app = create_app()
