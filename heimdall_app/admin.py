'''
fitribe_app Admin
'''

from django.contrib import admin
from heimdall_app.models import Video, Courseware, Category, Provider


class VideoAdmin(admin.ModelAdmin):
    list_display = ('uuid', 'path', 'duration', 'created_at', 'updated_at')


class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name', 'thumbnail', 'created_at', 'updated_at',)

class ProviderAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'created_at', 'updated_at',)

class CoursewareAdmin(admin.ModelAdmin):
    list_display = ('title', 'provider', 'category',
                    'start_time', 'end_time', 'description',
                    'status', 'video', 'created_at', 'updated_at',
                    'is_paid')
    list_filter = ('status', 'is_paid',)
    fieldsets = (
        (None, {'fields': ('title', 'provider', 'category',
                        'start_time', 'end_time', 'description',
                        'status', 'video', 'created_at', 'updated_at',
                        'is_paid',)}),
        ('Video', {
            'fields': ('thumbnail', 'video', )}),
        ('Status', {
            'fields': ('status', 'is_paid',)}),
        ('Description', {
            'fields': ('description',)}),
    )


admin.site.register(Courseware, CoursewareAdmin)
admin.site.register(Category, CategoryAdmin)
admin.site.register(Video, VideoAdmin)
admin.site.register(Provider, ProviderAdmin)
