from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Project, VolunteerApplication
from .serializers import (
    ProjectSerializer, ProjectListSerializer,
    VolunteerApplicationSerializer, ApplicationStatusSerializer
)

# List and create projects
class ProjectListCreateView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectListSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

# Retrieve, update, delete a project
class ProjectDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# Volunteer applies to a project
class VolunteerApplicationCreateView(generics.CreateAPIView):
    queryset = VolunteerApplication.objects.all()
    serializer_class = VolunteerApplicationSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(volunteer=self.request.user)

# List applications for a project (admin/staff only)
class ProjectApplicationsListView(generics.ListAPIView):
    serializer_class = VolunteerApplicationSerializer
    permission_classes = [permissions.IsAdminUser]

    def get_queryset(self):
        project_id = self.kwargs.get('project_id')
        return VolunteerApplication.objects.filter(project_id=project_id)

# Update application status (admin/staff only)
class ApplicationStatusUpdateView(APIView):
    permission_classes = [permissions.IsAdminUser]

    def patch(self, request, pk):
        try:
            application = VolunteerApplication.objects.get(pk=pk)
        except VolunteerApplication.DoesNotExist:
            return Response({'error': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ApplicationStatusSerializer(data=request.data)
        if serializer.is_valid():
            application.status = serializer.validated_data['status']
            application.save()
            return Response({'status': application.status})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)