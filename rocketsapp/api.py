from rest_framework import serializers, viewsets, generics, permissions, status
from django.http import JsonResponse
from .models import Rocket, Question, Choice, Class, Student
from django.contrib.auth.models import User



class ClassSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)

class RegisterClasses(generics.CreateAPIView):
    serializer_class = ClassSerializer
    permission_classes = (permissions.IsAuthenticated,)
 
    def post(self, request, *args, **kwargs):
        username = request.user
        name = request.data.get("name")
        Class(name=name, user=username ).save()
        response = JsonResponse({
                'msg': 'successful'
            },
            safe=True,
            status=status.HTTP_201_CREATED
        )
        return response

class RocketSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    className = serializers.CharField(max_length=100)

class RegisterRockets(generics.CreateAPIView):
    serializer_class = RocketSerializer
    permission_classes = (permissions.IsAuthenticated,)
 
    def post(self, request, *args, **kwargs):
        username = request.user
        name = request.data.get("name")
        className = request.data.get("className")
        Rocket(name=name, className = className, user=username ).save()
        response = JsonResponse({
                'msg': 'successful'
            },
            safe=True,
            status=status.HTTP_201_CREATED
        )
        return response



