# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class UserManager(models.Manager):
	def validate(self, post):
		username = post['username']
		password = post['password']
		passconf = post['passconf']
		errors = []
		# print '*' * 99
		# print post
		# print post['username']
		# print '*' * 99

		if not username:
			errors.append('username field is required')
		if not password:
			errors.append('password field is required')
		elif len(password) <8:
			errors.append('password must be at least 8 characters long')
		elif not password == passconf:
			errors.append('password and confirm password much match')


		if len(username) <8:
			errors.append('username must be at least 8 characters long')
		if len(username) > 16:
			errors.append('username cannot be more than 16 characters long')
		return errors




class User(models.Model):
	"""This is for user table in database"""
	username = models.CharField(max_length=16)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)
	objects = UserManager()
	# Now we add password need to be able to save it to database
	# Need to make migration after add new field.
	password = models.CharField(max_length=255)