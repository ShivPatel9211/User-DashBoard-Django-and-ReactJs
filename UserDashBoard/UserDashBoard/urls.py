# from rest_framework.routers import DefaultRouter
from django.contrib import admin
from django.urls import path ,include
from rest_framework.authtoken.views import obtain_auth_token
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('Api.urls')),
    path('auth/', obtain_auth_token)
]
