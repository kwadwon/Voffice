from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required



# Create your views here.


def index(request):
	return render(request,"index.html")

def dashboard(request):
	if not request.user.is_authenticated():
		return redirect('/doctorapp/login/?next=%s' % request.path)
	if request.method =="POST":
		return render(request,"index.html")
	return render(request,"prebase.html")

def createInstance(request):
	if not request.user.is_authenticated():
		return redirect('/doctorapp/login/?next=%s' % request.path)
	return render(request,"base.html")

def signup(request):
	if request.user.is_authenticated():
		return redirect('/doctorapp/dashboard/')
	if request.method =="POST":
		username = request.POST["username"]
		password = request.POST["password"]
		email = request.POST["email"]
		firstname = request.POST["firstname"]
		lastname = request.POST["lastname"]

		if username and password and email:
			user = User.objects.create_user(username, email, password)
			user.first_name = firstname
			user.last_name = lastname
			user.save()
			return redirect('/doctorapp/login/?next=%s' % request.path)
	return render(request,"signup.html")

def loginuser(request):
	if request.user.is_authenticated():
		return redirect('/doctorapp/dashboard/')
	if request.method =="POST":
		username = request.POST["username"]
		password = request.POST["password"]
		if not username or not password:
			return render(request, "login.html")
		#see if credentials match against some user
		user = authenticate(username = username, password = password)
		if user is not None:
			if user.is_active:
				login(request, user)
				return render(request,"prebase.html")
			else:
				print("The password is valid, but the account has been disabled")
				return render(request, "login.html")
		else:
			print("The username and password were incorrect.")
			return render(request, "login.html")

	return render(request,"login.html")

def logoutuser(request):
	logout(request)
	return render(request,"index.html")
 
