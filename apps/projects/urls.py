from django.urls import path
from . import views

urlpatterns = [
    path('', views.ProjectListCreateView.as_view(), name='project-list-create'),
    path('<int:pk>/', views.ProjectDetailView.as_view(), name='project-detail'),
    path('apply/', views.VolunteerApplicationCreateView.as_view(), name='volunteer-apply'),
    path('<int:project_id>/applications/', views.ProjectApplicationsListView.as_view(), name='project-applications'),
    path('applications/<int:pk>/status/', views.ApplicationStatusUpdateView.as_view(), name='application-status'),
]