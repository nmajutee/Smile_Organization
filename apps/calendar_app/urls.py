from django.urls import path
from . import views

urlpatterns = [
    path('', views.EventListCreateView.as_view(), name='events-list-create'),
    path('<int:pk>/', views.EventDetailView.as_view(), name='events-detail'),
]