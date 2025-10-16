from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def about(request):
    return Response({
        "name": "Smile Organization",
        "mission": "Connect volunteers and donors to projects that create impact."
    })

@api_view(['POST'])
def contact(request):
    data = request.data
    # store or send email - placeholder
    return Response({"message": "Thanks, we received your message", "data": data})