from django.contrib import admin
from .models import Post, Category, Tag

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name','slug']

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ['name','slug']

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['title','author','status','published_at','created_at']
    list_filter = ['status','published_at','created_at']
    search_fields = ['title','excerpt','body']
    prepopulated_fields = {'slug': ('title',)}