from django.shortcuts import render
from backend.models import CaseStudy
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import permissions
from django.http import HttpResponse
from .serializers import CustomTokenPairSerializer
from .serializers import CaseStudySerializer
from rest_framework import viewsets

# Create your views here.
class ObtainTokenPairWithUsernameView(TokenObtainPairView):
    permission_classes = (permissions.AllowAny,)
    serializer_class = CustomTokenPairSerializer

class CaseStudyImageViewSet(viewsets.ModelViewSet):
    queryset = CaseStudy.objects.all()
    serializer_class = CaseStudySerializer
    def post(self, request, *args, **kwargs):
        csImage = request.data['image']
        CaseStudy.objects.create(csImage=csImage)
        return HttpResponse({'message': 'image inserted'}, status=200)
