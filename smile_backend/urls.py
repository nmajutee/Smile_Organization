from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/accounts/', include('apps.accounts.urls')),
    path('api/projects/', include('apps.projects.urls')),
    path('api/donations/', include('apps.donations.urls')),
    path('api/blog/', include('apps.blog.urls')),
    path('api/events/', include('apps.calendar_app.urls')),
    path('api/core/', include('apps.core.urls')),
]

# servee media files like images and videos during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)