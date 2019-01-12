from rest_framework import serializers, viewsets
from .models import Teacher, Rocket, Question, Choice, Class, Student

class TeacherSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Teacher,
        fields = ('name', 'email')

    def create(self):
        print(f'{self}')
        user = self.context['request'].user
        teacher = Teacher.objects.create( name = user.name, email = user.email)
        return teacher

class TeacherViewset(viewsets.ModelViewSet):
    serializer_class = TeacherSerializer
    queryset = Teacher.objects.none()

    def get_queryset(self):
        user = self.request.user
# class ClassSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = Class,
#         fields = ('name', )

