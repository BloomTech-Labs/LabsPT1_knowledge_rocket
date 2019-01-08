from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
import json

from rest_framework_jwt.serializers import JSONWebTokenSerializer
from django.contrib.auth import authenticate, get_user_model
from rest_framework import serializers, generics, permissions, status
from rest_framework_jwt.settings import api_settings

User = get_user_model()
jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
jwt_decode_handler = api_settings.JWT_DECODE_HANDLER

class RegisterUserSerializer(serializers.Serializer):
    username = serializers.CharField(max_length=30)
    password1 = serializers.CharField(max_length=15)
    password2 = serializers.CharField(max_length=15)

class RegisterUsers(generics.CreateAPIView):
    serializer_class = RegisterUserSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs):
        # data = json.loads(request.body)
        username = request.data.get("username")
        password1 = request.data.get("password1")
        password2 = request.data.get("password2")
        credentials = {
            'username': username,
            'password1': password1,
            'password2': password2
        }
        if not all(credentials.values()):
            return JsonResponse(
                {
                    "error": "username, password and confirm_password is required to register user"
                },
                safe=True,
                status=status.HTTP_400_BAD_REQUEST
            )
        
        try:
            user = User.objects.get(username=username)
            message = "Username {} already exists.".format(username)
            return JsonResponse(
                {
                    "error": message
                },
                safe=True,
                status=status.HTTP_400_BAD_REQUEST
            )
        except User.DoesNotExist:
            if len(username) < 3:
                response = JsonResponse({"error":"Username must be at least 3 characters."}, safe=True, status=500)
            elif len(password1) < 5:
                response = JsonResponse({"error":"Password must be at least 5 characters."}, safe=True, status=500)
            elif password1 != password2:
                response = JsonResponse({"error":"The two password fields didn't match."}, safe=True, status=500)
            else:
                new_user = User.objects.create_user(
                    username=username, password=password1
                )
                payload = jwt_payload_handler(new_user)
                response = JsonResponse({
                        'token': jwt_encode_handler(payload)
                    },
                    safe=True,
                    status=status.HTTP_201_CREATED
                )
            return response

class CustomJWTSerializer(JSONWebTokenSerializer):
    def validate(self, attrs):
        username = attrs.get("username")
        password = attrs.get("password")
        
        try:
            user = User.objects.get(username=username)
            credentials = {
                'username': username,
                'password': password
            }
            if all(credentials.values()):
                user = authenticate(**credentials)
                if user:
                    payload = jwt_payload_handler(user)
                    return {
                        'token': jwt_encode_handler(payload),
                        'user': user
                    }
                else:
                    msg = 'Unable to log in with provided credentials.'
                    raise serializers.ValidationError(msg)

            else:
                msg = 'Must include username and password.'
                raise serializers.ValidationError(msg)

        except User.DoesNotExist:
            msg = 'Account with this username does not exists'
            raise serializers.ValidationError(msg)




