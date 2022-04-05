from django.urls import path

from .views import DemoView

urlpatterns = [
    path("", DemoView.as_view(), name="demo"),
]
