# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render, redirect
from django.contrib import messages
# This allow us to use flash messages. Also can't use var name "messages"
from .models import User
# From models.py file in same folder get User function
import bcrypt
# need this to use hash



# Create your views here.
def index(request):

	return render(request, 'login/index.html')

def validate(request):
	# This what what are you getting from request.POST
	# print '*' * 99
	# print request.POST
	# print '*' * 99

	if request.method == 'POST':
		# POST need to be in CAP!
		errors = User.objects.validate(request.POST)
		# success = User.objects.validate(request.POST['username'])
		if errors:
			for error in errors:
				messages.error(request, error)
		else:
			# Validation pass!
			messages.success(request, 'The user name you entered ({}) is valid! Thanks you!'.format(request.POST['username']))
			# Let's hash & salt password!
			hashed_pass = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())

			# Let's add user!  &hashed password
			User.objects.create(username=request.POST['username'], password=hashed_pass)

			return redirect('/success')

		
	return redirect('/')

def success(request):
	context = {
		"users" : User.objects.all()
	}

	return render(request, 'login/success.html', context)

def login(request):
	if request.method == "POST":
		users = User.objects.filter(username=request.POST['username'])
		if users:
			user = users[0]
			hashed_pass = bcrypt.hashpw(request.POST['password'].encode(), user.password.encode())
			if user.password == hashed_pass:
				messages.success(request, "You have logged in successfully!")
				request.session['logged_user'] = user.id
				return redirect('/success')

		messages.error(request, "Invalid password")
	return redirect('/')