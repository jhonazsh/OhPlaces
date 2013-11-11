from django.conf.urls import patterns, include, url,handler404
from .views import Inicio

urlpatterns = patterns('',

	url(r'^$', Inicio.as_view()),

)
