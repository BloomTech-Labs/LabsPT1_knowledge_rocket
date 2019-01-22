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
    name = serializers.CharField(max_length=100)
    className = serializers.CharField(max_length=100)
    
    questionName2d = serializers.CharField(max_length=100)
    reviewText2d = serializers.CharField(max_length=512)
    questionText2d = serializers.CharField(max_length=512)

    questionName2w = serializers.CharField(max_length=100)
    reviewText2w = serializers.CharField(max_length=512)
    questionText2w = serializers.CharField(max_length=512)

    questionName2m = serializers.CharField(max_length=100)
    reviewText2m = serializers.CharField(max_length=512)
    questionText2m = serializers.CharField(max_length=512)

    interval = serializers.CharField(max_length=2)
    choiceText = serializers.CharField(max_length=50)
    isCorrect = serializers.BooleanField()

class RegisterRockets(generics.CreateAPIView):
    serializer_class = RocketSerializer
    permission_classes = (permissions.IsAuthenticated,)
 
    def post(self, request, *args, **kwargs):

        username = request.user
        name = request.data.get("name")
        className = request.data.get("className")

        questionName2d = request.data.get("questionName2d")
        reviewText2d = request.data.get("reviewText2d")
        questionText2d = request.data.get("questionText2d")

        questionName2w = request.data.get("questionName2w")
        reviewText2w = request.data.get("reviewText2w")
        questionText2w = request.data.get("questionText2w")

        questionName2m = request.data.get("questionName2m")
        reviewText2m = request.data.get("reviewText2m")
        questionText2m = request.data.get("questionText2m")

        # interval = request.data.get("interval")
        # choiceText = request.data.get("choiceText")
        # isCorrect = request.data.get("isCorrect")

        classKey = Class.objects.get(name=className) #Searches class table to find matching class name then sets it to variable, which is then applied to Rocket.save()
    
        Rocket(
            name = name, 
            classKey = classKey, 
            user = username, 
        ).save()
        
        rocket = Class.objects.get(name = name)

        Question2D(
            rocket = rocket,
            questionName2d = questionName2d,
            reviewText2d = reviewText2d,
            questionText2d = questionText2d,
        ).save()

        Question2D(
            rocket = rocket,
            questionName2w = questionName2w,
            reviewText2w = reviewText2w,
            questionText2w = questionText2w,
        ).save()

        Question2D(
            rocket = rocket,
            questionName2m = questionName2m,
            reviewText2m = reviewText2m,
            questionText2m = questionText2m,
        ).save()

        question = Question.objects.get(name = questionName )

        Choice(
            question = question,
            choiceText = choiceText,
            isCorrect = isCorrect,
        ).save()

        Rockets.objects.filter(name=name).update(
            question = question, 
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

