from rest_framework import serializers, viewsets, generics, permissions, status
from django.http import JsonResponse
from .models import Rocket, Choice, Class, Student
from django.contrib.auth.models import User



class ClassSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)

class RegisterClasses(generics.CreateAPIView):
    serializer_class = ClassSerializer
    permission_classes = (permissions.IsAuthenticated,) #takes the authorization header and decodes it to provide access to the gated route
 
    def post(self, request, *args, **kwargs):
        username = request.user #This sets the username to request.user which was provided by the token which was authenticated prior to getting to this point in the code.
        name = request.data.get("name") #this retrieves the data sent via the request (from the client) and allows it to be accessed by the backend.
        Class( name=name, user=username ).save() #accesses the desired model and creates a new object based on the passed in variables and specific model
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
    interval = serializers.CharField(max_length=2)
    reviewText = serializers.CharField(max_length=512)
    questionText = serializers.CharField(max_length=512)

class RegisterRockets(generics.CreateAPIView):
    serializer_class = RocketSerializer
    permission_classes = (permissions.IsAuthenticated,)
 
    def post(self, request, *args, **kwargs):

        username = request.user
        name = request.data.get("name")
        className = request.data.get("className")
        interval = request.data.get("interval")
        reviewText = request.data.get("reviewText")
        questionText = request.data.get("questionText")

        classKey = Class.objects.get(name=className) #Searches class table to find matching class name then sets it to variable, which is then applied to Rocket.save()

        Rocket(
            name = name, 
            classKey = classKey, 
            user = username, 
            interval = interval,
            reviewText = reviewText,
            questionText = questionText,
            ).save()

        response = JsonResponse({
                'msg': 'successful'
            },
            safe=True,
            status=status.HTTP_201_CREATED
        )
        return response

class QuestionSerializer(serializers.Serializer):
    text = serializers.CharField

class GetClasses(generics.CreateAPIView):
    serializer_class = ClassSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request):
        serializer_class = ClassSerializer #needed to change data from queryset to json for frontend to read response
        username_id = request.user.id
        classList = Class.objects.all().filter(user_id=username_id) #might be able to use a .get instead. too late to continue with that though
        serializer = serializer_class(classList, many=True)
        return JsonResponse( serializer.data, safe=False, status=status.HTTP_200_OK )
