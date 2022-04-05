from django.views.generic import TemplateView


class DemoView(TemplateView):
    template_name = "demo.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["title"] = "Hello, Word!"

        return context
