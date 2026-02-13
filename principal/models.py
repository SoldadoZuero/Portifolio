from decimal import Decimal

from django.db import models

# Create your models here.


class Servico(models.Model):
    titulo = models.CharField(max_length=100)
    descricao = models.TextField(max_length=500, blank=True, null=True)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    desconto = models.DecimalField(
        max_digits=10, decimal_places=2, default=Decimal('0.00'))

    def __str__(self):
        return self.titulo
