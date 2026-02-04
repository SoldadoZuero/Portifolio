from django.views.generic import TemplateView

# Create your views here.


class PrincipalHome(TemplateView):
    template_name = 'principal/pages/home.html'


class PrincipalBabyYodaStore(TemplateView):
    template_name = 'principal/pages/BYS.html'
