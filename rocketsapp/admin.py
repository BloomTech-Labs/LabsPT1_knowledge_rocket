from django.contrib import admin
from .models import Rocket, Class, Question2D, Question2W, Question2M, Student ##Choice
from django.contrib.auth.admin import UserAdmin
from .models import User

admin.site.register(User, UserAdmin)
admin.site.register(Rocket)
admin.site.register(Class)
admin.site.register(Question2D)
admin.site.register(Question2W)
admin.site.register(Question2M)

# admin.site.register(Choice)
admin.site.register(Student)