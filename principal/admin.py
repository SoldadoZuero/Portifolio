from django.contrib import admin

from principal.models import Servico


# Register your models here.
@admin.register(Servico)
class ServicoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'preco', 'desconto')
    search_fields = ('titulo',)
    list_filter = ('preco',)
    fieldsets = (
        (None, {
            'fields': ('titulo', 'descricao', 'preco', 'desconto')
        }),
    )


admin.site.site_header = "Administração do Portfólio"
admin.site.site_title = "Administração do Portfólio"
admin.site.index_title = "Bem-vindo à Administração do Portfólio"
