from rest_framework import serializers, viewsets, generics, permissions, status
from django.http import JsonResponse
from .models import Rocket, Question, Choice, Class, Student

class ClassSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)

class RegisterClasses(generics.CreateAPIView):
    serializer_class = ClassSerializer
    permission_classes = (permissions.IsAuthenticated,)
 
    def post(self, request, *args, **kwargs):
        name = request.data.get("name")
        Class(name=name).save()
        # user = request.user.username
        response = JsonResponse({
                'msg': 'successful'
            },
            safe=True,
            status=status.HTTP_201_CREATED
        )
        return response



# class TeacherSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Teacher,
#         fields = ('name', 'email')

#     def create(self):
#         print(f'{self}')
#         user = self.context['request'].user
#         teacher = Teacher.objects.create( name = user.name, email = user.email)
#         return teacher

# class TeacherViewset(viewsets.ModelViewSet):
#     serializer_class = TeacherSerializer
#     queryset = Teacher.objects.none()

#     def get_queryset(self):
#         user = self.request.user
# class ClassSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Class,
#         fields = ('name', )



