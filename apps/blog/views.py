from django.views.generic import ListView, DetailView
from rest_framework import generics, permissions, filters
from .models import Post, Category, Tag
from .serializers import PostListSerializer, PostDetailSerializer, CategorySerializer, TagSerializer
from django.db.models import Count

class BlogPostListView(ListView):
    model = Post
    template_name = 'news.html'
    context_object_name = 'blog_posts'
    paginate_by = 9
    ordering = ['-created_at']

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['total_posts'] = Post.objects.count()
        context['total_subscribers'] = 0  # TODO: Add newsletter subscriber count
        return context

class BlogPostDetailView(DetailView):
    model = Post
    template_name = 'blog-single.html'
    context_object_name = 'post'
    slug_field = 'slug'
    slug_url_kwarg = 'slug'

class PostListCreateAPIView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title','excerpt','body']
    ordering_fields = ['published_at','created_at']

    def get_serializer_class(self):
        return PostListSerializer if self.request.method == 'GET' else PostDetailSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class PostDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = PostDetailSerializer

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer