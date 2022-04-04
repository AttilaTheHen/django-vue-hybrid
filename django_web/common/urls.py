from django.urls import path

from common.views import AppStageView, ExampleView

urlpatterns = [
    path("example/", ExampleView.as_view(), name="example"),
]
