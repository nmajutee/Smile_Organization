from django.urls import path
from . import views

urlpatterns = [
    path('', views.PostListCreateView.as_view(), name='blog-post-list-create'),
    path('<int:pk>/', views.PostDetailView.as_view(), name='blog-post-detail'),
    path('categories/', views.CategoryListView.as_view(), name='blog-categories'),
    path('tags/', views.TagListView.as_view(), name='blog-tags'),
]