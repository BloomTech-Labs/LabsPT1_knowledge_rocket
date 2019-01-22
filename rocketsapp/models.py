from django.db import models
from uuid import uuid4
from django.contrib.auth.models import User, AbstractUser

# All models are subject to change and can be altered to meet our needs

class User(AbstractUser):
    is_premium       = models.BooleanField(default = False)
    customer_ID       = models.CharField(max_length=256, blank=True, default='')

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
    name          = models.CharField(max_length=100, blank = False, unique = True)
    user          = models.ForeignKey(User, default = '', blank = False, on_delete=models.CASCADE)
    classKey      = models.ForeignKey('Class', default = '', blank = False, on_delete = models.CASCADE, related_name='rocketClasses')
    question2d     = models.ForeignKey('Question2d', null=True, blank = True, on_delete = models.CASCADE, related_name='rocketquestion2d')
    question2w     = models.ForeignKey('Question2w', null=True, blank = True, on_delete = models.CASCADE, related_name='rocketquestion2w')
    question2m     = models.ForeignKey('Question2m', null=True, blank = True, on_delete = models.CASCADE, related_name='rocketquestion2m')
    created_at    = models.DateTimeField(auto_now_add = True)
    last_modified = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Rockets'
        verbose_name_plural = 'rockets'

class Question2D(models.Model):
    id               = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    rocket           = models.ForeignKey('Rocket', default = '', blank = False, on_delete = models.CASCADE, related_name='question2dRocket')    
    day2QuestionName = models.CharField(max_length=100, blank = False, unique = True)
    day2ReviewText   = models.CharField(max_length=512, blank = False)
    day2QuestionText = models.CharField(max_length=512, blank = False)
    # choice1        = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2dChoice1')    
    # choice2        = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2dChoice2')    
    # choice3        = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2dChoice3')    
    # choice4        = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2dChoice4')  
    created_at       = models.DateTimeField(auto_now_add = True)
    last_modified    = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Questions2d'
        verbose_name_plural = 'questions2d'

class Question2W(models.Model):
    id                = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    rocket            = models.ForeignKey('Rocket', default = '', blank = False, on_delete = models.CASCADE, related_name='question2wRocket')    
    week2QuestionName = models.CharField(max_length=100, blank = False, unique = True)
    week2ReviewText   = models.CharField(max_length=512, blank = False)
    week2QuestionText = models.CharField(max_length=512, blank = False)
    # choice1         = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2wChoice1')    
    # choice2         = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2wChoice2')    
    # choice3         = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2wChoice3')    
    # choice4         = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2wChoice4')  
    created_at        = models.DateTimeField(auto_now_add = True)
    last_modified     = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Questions2w'
        verbose_name_plural = 'questions2w'

class Question2M(models.Model):
    id                 = models.UUIDField(primary_key=True, default = uuid4, editable = False)
    rocket             = models.ForeignKey('Rocket', default = '', blank = False, on_delete = models.CASCADE, related_name='question2mRocket')    
    month2QuestionName = models.CharField(max_length=100, blank = False, unique = True)
    month2ReviewText   = models.CharField(max_length=512, blank = False)
    month2QuestionText = models.CharField(max_length=512, blank = False)
    # choice1          = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2mChoice1')    
    # choice2          = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2mChoice2')    
    # choice3          = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2mChoice3')    
    # choice4          = models.ForeignKey('Choice', default = '', blank = False, on_delete = models.CASCADE, related_name='question2mChoice4')    
    created_at         = models.DateTimeField(auto_now_add = True)
    last_modified      = models.DateTimeField(auto_now = True)

    class Meta:
        db_table            = 'Questions2m'
        verbose_name_plural = 'questions2m'


# class Choice(models.Model):
#     id            = models.UUIDField(primary_key=True, default = uuid4, editable = False)
#     rocket        = models.ForeignKey('Rocket', default = '', blank = False, on_delete = models.CASCADE, related_name='choiceRocket')    
#     interval      = models.CharField(max_length=10, blank = False)
#     choiceText    = models.CharField(max_length=50, blank = False)
#     isCorrect     = models.BooleanField()
#     created_at    = models.DateTimeField(auto_now_add=True)
#     last_modified = models.DateTimeField(auto_now=True)

#     class Meta:
#         db_table            = 'Choices'
#         verbose_name_plural = 'choices'


# class Student(models.Model):
#     id            = models.UUIDField(primary_key=True, default=uuid4, editable=False)
#     name          = models.CharField(max_length=50, blank=False)
#     teacher       = models.ForeignKey(User, default = '', blank = False, on_delete=models.CASCADE)
#     email         = models.CharField(max_length=256, blank=False)
#     className     = models.ForeignKey('Class', default = '', blank = False, on_delete = models.CASCADE, related_name='studentClasses' )
#     rocket        = models.ForeignKey('Rocket', default = '', blank = False, on_delete = models.CASCADE, related_name='studentRockets')
#     created_at    = models.DateTimeField(auto_now_add=True)
#     last_modified = models.DateTimeField(auto_now=True)

#     class Meta:
#         db_table            = 'Students'
#         verbose_name_plural = 'students'
