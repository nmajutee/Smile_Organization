from rest_framework import generics, permissions, filters
from .models import Post, Category, Tag
from .serializers import PostListSerializer, PostDetailSerializer, CategorySerializer, TagSerializer

class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['title','excerpt','body']
    ordering_fields = ['published_at','created_at']

    def get_serializer_class(self):
        return PostListSerializer if self.request.method == 'GET' else PostDetailSerializer

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)

class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = PostDetailSerializer

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class TagListView(generics.ListAPIView):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer