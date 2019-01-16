from django.contrib import admin
from .models import Rocket, Choice, Class, Student
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.

# class TeacherAdmin(admin.ModelAdmin):
#     readonly_fields=('email', 'name', 'created_at')

# admin.site.register(Teacher, TeacherAdmin)

# admin.site.register(Teacher)
admin.site.register(User, UserAdmin)
admin.site.register(Rocket)
admin.site.register(Choice)
admin.site.register(Class)
admin.site.register(Student)