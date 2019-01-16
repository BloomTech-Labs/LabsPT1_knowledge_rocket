from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User

# All models are subject to change and can be altered to meet our needs


# Create your models here.
# class Teacher(models.Model):
#     id            = models.UUIDField(primary_key=True, default=uuid4, editable=False)
#     user          = models.OneToOneField(User, blank = False, unique = True, on_delete=models.CASCADE)
#     name          = models.CharField(max_length=100, blank = False)
#     email         = models.EmailField(blank = False)
#     premium       = models.BooleanField(default = False)
#     created_at    = models.DateTimeField(auto_now_add=True)
#     last_modified = models.DateTimeField(auto_now=True)

#     class Meta:
#         db_table            = 'Teachers'
#         verbose_name_plural = 'teachers'

class Class(models.Model):
    id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    name          = models.CharField(max_length=100, blank = False)
    user          = models.ForeignKey(User, default = '', blank = False, on_delete=models.CASCADE)
    created_at    = models.DateTimeField(auto_now_add = True)
    last_modified = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Classes'
        verbose_name_plural = 'classes'

class Rocket(models.Model):
    id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    name          = models.CharField(max_length=100, blank = False)
    interval      = models.CharField(max_length=10, default = 60, blank = False)
    user          = models.ForeignKey(User, default = '', blank = False, on_delete=models.CASCADE)
    classKey      = models.ForeignKey('Class', default = '', blank = False, on_delete = models.CASCADE, related_name='classes')
    reviewText    = models.CharField(max_length=512, blank = False)
    questionText  = models.CharField(max_length=512, blank = False)
    # choice        = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='choices')
    created_at    = models.DateTimeField(auto_now_add = True)
    last_modified = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Rockets'
        verbose_name_plural = 'rockets'


# class Question(models.Model):
#     id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
#     Rocket        = models.ForeignKey('Rocket', default = '', on_delete = models.CASCADE)
#     text          = models.TextField(blank = False)
#     created_at    = models.DateTimeField(auto_now_add = True)
#     last_modified = models.DateTimeField(auto_now = True)

#     class Meta:
#         db_table            = 'Questions'
#         verbose_name_plural = 'questions'


class Choice(models.Model):
    id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    rocket        = models.ForeignKey('Rocket', default = '',  on_delete = models.CASCADE, related_name='rockets')
    choice        = models.CharField(max_length=50, blank = False)
    isCorrect     = models.BooleanField()
    created_at    = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table            = 'Choices'
        verbose_name_plural = 'choices'


class Student(models.Model):
    id            = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name          = models.CharField(max_length=50, blank=False)
    user          = models.ForeignKey(User, default = '', blank = False, on_delete=models.CASCADE)
    email         = models.CharField(max_length=256, blank=False)
    className     = models.ForeignKey('Class', default = '', blank = False, on_delete = models.CASCADE)
    rocket        = models.ForeignKey('Rocket', default = '', blank = False, on_delete = models.CASCADE)
    created_at    = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)

    class Meta:
        db_table            = 'Students'
        verbose_name_plural = 'students'
