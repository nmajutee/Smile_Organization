from django.urls import path
from . import views

app_name = 'projects'

urlpatterns = [
    path('', views.ProjectListView.as_view(), name='list'),
    path('api/', views.ProjectListCreateAPIView.as_view(), name='project-list-create'),
    path('<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
    path('api/<int:pk>/', views.ProjectDetailAPIView.as_view(), name='project-detail-api'),
    path('apply/', views.VolunteerApplicationCreateView.as_view(), name='volunteer'),
    path('<int:project_id>/applications/', views.ProjectApplicationsListView.as_view(), name='project-applications'),
    path('applications/<int:pk>/status/', views.ApplicationStatusUpdateView.as_view(), name='application-status'),
]