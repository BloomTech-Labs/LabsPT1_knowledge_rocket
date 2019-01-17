from django.contrib import admin
from .models import Rocket, Choice, Class, Student
from django.contrib.auth.admin import UserAdmin
from .models import User

admin.site.register(User, UserAdmin)
admin.site.register(Rocket)
admin.site.register(Choice)
admin.site.register(Class)
admin.site.register(Student)