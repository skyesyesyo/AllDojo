# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.contrib import messages
# This allow us to use flash messages. Also can't use var name "messages"
from .models import User
# From models.py file in same folder get User function

# Create your views here.
def index(request):

	return render(request, 'login/index.html')

def validate(request):
	if request.method == 'POST':
		# POST need to be in CAP!
		errors = User.objects.validate(request.POST['username'])
		# success = User.objects.validate(request.POST['username'])
		if errors:
			for error in errors:
				messages.error(request, error)
		else:
			# Validation pass!
			messages.success(request, 'The user name you entered ({}) is valid! Thanks you!'.format(request.POST['username']))
			# Let's add user!
			User.objects.create(username=request.POST['username'])

			return redirect('/success')

		
	return redirect('/')

def success(request):
	context = {
		"users" : User.objects.all()
	}

	return render(request, 'login/success.html', context)
