from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('', views.BlogPostListView.as_view(), name='list'),
    path('<slug:slug>/', views.BlogPostDetailView.as_view(), name='detail'),
    path('api/', views.PostListCreateAPIView.as_view(), name='api-list'),
    path('api/<int:pk>/', views.PostDetailAPIView.as_view(), name='api-detail'),
    path('categories/', views.CategoryListView.as_view(), name='categories'),
    path('tags/', views.TagListView.as_view(), name='tags'),
]