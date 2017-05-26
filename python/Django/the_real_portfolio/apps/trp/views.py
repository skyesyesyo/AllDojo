# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):

	return render(request, "trp/index.html")

def projects(request):

	return render(request, "trp/projects.html")

def about(request):

	return render(request, "trp/about.html")

def testimonials(request):

	return render(request, "trp/testimonials.html")