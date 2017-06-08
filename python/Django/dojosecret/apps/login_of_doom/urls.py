from django.conf.urls import url, include
from . import views

# GET "/" ->
# POST "/register" -> register
# Post "/login" -> login

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register'),
    url(r'^login$', views.login, name='login'),
    url(r'^logout$', views.logout, name='logout'),
]