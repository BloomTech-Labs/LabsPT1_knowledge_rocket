from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User


# Create your models here.
class Teacher(models.Model):
    id            = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    user          = models.OneToOneField(User, blank = False, unique = True, on_delete=models.CASCADE)
    name          = models.CharField(max_length=100, blank = False)
    email         = models.EmailField(blank = False)
    premium       = models.BooleanField(default = False)
    created_at    = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table            = 'Teachers'
        verbose_name_plural = 'teachers'

class Class(models.Model):
    id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    name          = models.CharField(max_length=100, blank = False)
    Teacher       = models.ForeignKey('Teacher', on_delete=models.CASCADE)
    created_at    = models.DateTimeField(auto_now_add = True)
    last_modified = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Classes'
        verbose_name_plural = 'classes'

class Rocket(models.Model):
    id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    name          = models.CharField(max_length=100, blank = False)
    Teacher       = models.ForeignKey('Teacher', on_delete=models.CASCADE)
    Classes       = models.ManyToManyField(Class)
    created_at    = models.DateTimeField(auto_now_add = True)
    last_modified = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Rockets'
        verbose_name_plural = 'rockets'


class Question(models.Model):
    id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    Rocket        = models.ForeignKey('Rocket', on_delete = models.CASCADE)
    text          = models.TextField(blank = False)
    created_at    = models.DateTimeField(auto_now_add = True)
    last_modified = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Questions'
        verbose_name_plural = 'questions'
    

class Choice(models.Model):
    id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    Question      = models.ForeignKey('Question', on_delete = models.CASCADE)
    text          = models.TextField()
    isCorrect     = models.BooleanField()
    created_at    = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table            = 'Choices'
        verbose_name_plural = 'choices'


class Student(models.Model):
    id            = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name          = models.CharField(max_length=50, blank=False)
    email         = models.CharField(max_length=256, blank=False)
    Classes       = models.ManyToManyField(Class)
    Rockets       = models.ManyToManyField(Rocket)
    created_at    = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table            = 'Students'
        verbose_name_plural = 'students'
