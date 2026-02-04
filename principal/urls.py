from django.urls import path

from . import views

app_name = 'principal'

urlpatterns = [
    path(
        '',
        views.PrincipalHome.as_view(),
        name="home"
    ),
    path(
        'baby-yoda-store/',
        views.PrincipalBabyYodaStore.as_view(),
        name="baby-yoda-store"
    )
]
