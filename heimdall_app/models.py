from __future__ import unicode_literals
from django.conf import settings
from datetime import timedelta
from django.db import models
from decimal import Decimal
import datetime
import uuid


class Video(models.Model):
    '''
    Video Object
    '''
    path = models.URLField(max_length=200)
    duration = models.DurationField(default=timedelta(0))
    uuid = models.UUIDField(primary_key=True, default=uuid.uuid4,
                            editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return str(self.uuid)


class Provider(models.Model):
    '''
    Provider Model
    '''
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return str(self.name)


class Category(models.Model):
    '''
    Courseware Category Model
    '''
    name = models.CharField(max_length=25)
    thumbnail = models.ImageField(
        upload_to="img/category/",
        default='img/category/default-category.png')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __unicode__(self):
        return self.name

    @property
    def get_thumbnail(self):
        return "{0}{1}".format(settings.BASE_URL, self.thumbnail.url)


class Courseware(models.Model):
    '''
    Courseware Model
    '''
    title = models.CharField(max_length=256)
    provider = models.ForeignKey(Provider, related_name='provider')
    category = models.ForeignKey(Category)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    status = models.IntegerField(default=0, choices=settings.STATUS_CHOICES)
    thumbnail = models.ImageField(
        upload_to="img/thumbnail/",
        default='img/thumbnail/default-course.png')
    video = models.OneToOneField(Video, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_paid = models.BooleanField(default=True)

    @property
    def get_thumbnail(self):
        return "{0}{1}".format(settings.BASE_URL, self.thumbnail.url)

    def __unicode__(self):
        return self.title
