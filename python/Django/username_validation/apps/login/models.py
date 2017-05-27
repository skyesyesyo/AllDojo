# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class UserManager(models.Manager):
	"""docstring for UserManager"""
	def validate(self, username):
		errors = []
		# success = 'Good job!'
		if len(username) <8:
			errors.append('username must be at least 8 characters long')
			# return errors
		if len(username) > 16:
			errors.append('username cannot be more than 16 characters long')
		return errors
		# return success




class User(models.Model):
	"""This is for user table in database"""
	username = models.CharField(max_length=16)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = UserManager()