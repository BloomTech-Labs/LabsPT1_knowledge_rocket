from django.contrib import admin
from .models import Teacher, Rocket, Choice, Class, Student

# Register your models here.

class TeacherAdmin(admin.ModelAdmin):
    readonly_fields=('email', 'name', 'created_at')

admin.site.register(Teacher, TeacherAdmin)

# admin.site.register(Teacher)
admin.site.register(Rocket)
admin.site.register(Choice)
admin.site.register(Class)
admin.site.register(Student)