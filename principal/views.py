
from django.views.generic import ListView, TemplateView

from .models import Servico

# Create your views here.


class PrincipalHome(TemplateView):
    template_name = 'principal/pages/home.html'


class PrincipalBabyYodaStore(ListView):
    model = Servico
    context_object_name = 'servicos'
    template_name = 'principal/pages/BYS.html'
