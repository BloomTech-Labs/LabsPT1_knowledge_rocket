from rest_framework import serializers, viewsets, generics, permissions, status
from django.http import JsonResponse
from .models import Rocket, Class, Question2D, Question2M, Question2W ##, Choice, Student
from django.contrib.auth.models import User
from rest_framework_jwt.settings import api_settings
from rocketsapp.utilities.billing_helper import SubscribeCustomer

jwt_decode_handler = api_settings.JWT_DECODE_HANDLER
jwt_get_username_from_payload = api_settings.JWT_PAYLOAD_GET_USERNAME_HANDLER
import json


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
    rocketName = serializers.CharField(max_length=100)
    className = serializers.CharField(max_length=100)
    
    day2QuestionName = serializers.CharField(max_length=100)
    day2ReviewText = serializers.CharField(max_length=512)
    day2QuestionText = serializers.CharField(max_length=512)
    day2AnswerA = serializers.CharField(max_length=50)
    day2AnswerB = serializers.CharField(max_length=50)
    day2AnswerC = serializers.CharField(max_length=50)
    day2AnswerD = serializers.CharField(max_length=50)
    day2CorrectAnswer = serializers.CharField(max_length=50)

    week2QuestionName = serializers.CharField(max_length=100)
    week2ReviewText = serializers.CharField(max_length=512)
    week2QuestionText = serializers.CharField(max_length=512)
    week2AnswerA = serializers.CharField(max_length=50)
    week2AnswerB = serializers.CharField(max_length=50)
    week2AnswerC = serializers.CharField(max_length=50)
    week2AnswerD = serializers.CharField(max_length=50)
    week2CorrectAnswer = serializers.CharField(max_length=50)

    month2QuestionName = serializers.CharField(max_length=100)
    month2ReviewText = serializers.CharField(max_length=512)
    month2QuestionText = serializers.CharField(max_length=512)
    month2AnswerA = serializers.CharField(max_length=50)
    month2AnswerB = serializers.CharField(max_length=50)
    month2AnswerC = serializers.CharField(max_length=50)
    month2AnswerD = serializers.CharField(max_length=50)
    month2CorrectAnswer = serializers.CharField(max_length=50)

class RegisterRockets(generics.CreateAPIView):
    serializer_class = RocketSerializer
    permission_classes = (permissions.IsAuthenticated,)
 
    def post(self, request, *args, **kwargs):

        username = request.user
        rocketName = request.data.get("rocketName")
        className = request.data.get("className")

        day2QuestionName = request.data.get("day2QuestionName")
        day2ReviewText = request.data.get("day2ReviewText")
        day2QuestionText = request.data.get("day2QuestionText")
        day2AnswerA = request.data.get("day2AnswerA")
        day2AnswerB = request.data.get("day2AnswerB")
        day2AnswerC = request.data.get("day2AnswerC")
        day2AnswerD = request.data.get("day2AnswerD")
        day2CorrectAnswer = request.data.get("day2CorrectAnswer")

        week2QuestionName = request.data.get("week2QuestionName")
        week2ReviewText = request.data.get("week2ReviewText")
        week2QuestionText = request.data.get("week2QuestionText")
        week2AnswerA = request.data.get("week2AnswerA")
        week2AnswerB = request.data.get("week2AnswerB")
        week2AnswerC = request.data.get("week2AnswerC")
        week2AnswerD = request.data.get("week2AnswerD")
        week2CorrectAnswer = request.data.get("week2CorrectAnswer")

        month2QuestionName = request.data.get("month2QuestionName")
        month2ReviewText = request.data.get("month2ReviewText")
        month2QuestionText = request.data.get("month2QuestionText")
        month2AnswerA = request.data.get("month2AnswerA")
        month2AnswerB = request.data.get("month2AnswerB")
        month2AnswerC = request.data.get("month2AnswerC")
        month2AnswerD = request.data.get("month2AnswerD")
        month2CorrectAnswer = request.data.get("month2CorrectAnswer")

        classKey = Class.objects.get(name = className) #Searches class table to find matching class name then sets it to variable, which is then applied to Rocket.save()
    
        Rocket(
            rocketName = rocketName, 
            classKey = classKey, 
            user = username, 
        ).save()
        
        rocket = Rocket.objects.get(rocketName = rocketName)

        Question2D(
            rocket = rocket,
            day2QuestionName = day2QuestionName,
            day2ReviewText = day2ReviewText,
            day2QuestionText = day2QuestionText,
            day2AnswerA = day2AnswerA,
            day2AnswerB = day2AnswerB,
            day2AnswerC = day2AnswerC,
            day2AnswerD = day2AnswerD,
            day2CorrectAnswer = day2CorrectAnswer
        ).save()

        Question2W(
            rocket = rocket,
            week2QuestionName = week2QuestionName,
            week2ReviewText = week2ReviewText,
            week2QuestionText = week2QuestionText,
            week2AnswerA = week2AnswerA,
            week2AnswerB = week2AnswerB,
            week2AnswerC = week2AnswerC,
            week2AnswerD = week2AnswerD,
            week2CorrectAnswer = week2CorrectAnswer
        ).save()

        Question2M(
            rocket = rocket,
            month2QuestionName = month2QuestionName,
            month2ReviewText = month2ReviewText,
            month2QuestionText = month2QuestionText,
            month2AnswerA = month2AnswerA,
            month2AnswerB = month2AnswerB,
            month2AnswerC = month2AnswerC,
            month2AnswerD = month2AnswerD,
            month2CorrectAnswer = month2CorrectAnswer
        ).save()

        question2d = Question2D.objects.get(day2QuestionName = day2QuestionName )
        question2w = Question2W.objects.get(week2QuestionName = week2QuestionName )
        question2m = Question2M.objects.get(month2QuestionName = month2QuestionName )

        Rocket.objects.filter(rocketName = rocketName).update(
            question2d = question2d, 
            question2w = question2w, 
            question2m = question2m, 
        )

        response = JsonResponse({
                'msg': 'successful'
            },
            safe=True,
            status=status.HTTP_201_CREATED
        )
        return response

class SubscriptionSerializer(serializers.Serializer):
    source = serializers.CharField(max_length=256)

class CreateSubscription(generics.CreateAPIView):
    serializer_class = SubscriptionSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        token = request.META.get('HTTP_AUTHORIZATION').split()[1]
        source = request.data.get("source")
        
        try:
            payload = jwt_decode_handler(token)
        except jwt.ExpiredSignature:
            msg = _('Signature has expired.')
            raise exceptions.AuthenticationFailed(msg)
        except jwt.DecodeError:
            msg = _('Error decoding signature.')
            raise exceptions.AuthenticationFailed(msg)
        except jwt.InvalidTokenError:
            raise exceptions.AuthenticationFailed()
        
        subCustomer = SubscribeCustomer(payload['username'], payload['email'], source)

        customer_exists = subCustomer.customer_exists()
        if (customer_exists):
            response = JsonResponse(json.dumps({
                    "msg": "customer already has subscription."
                }),
                safe=False,
                status=status.HTTP_400_BAD_REQUEST
            )
        else:
            subCustomer.create_customer()
            subCustomer.create_subscription()
            subCustomer.update_teacher()

            response = JsonResponse(json.dumps({
                    "msg": "customer subscribed successfully."
                }),
                safe=False,
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

