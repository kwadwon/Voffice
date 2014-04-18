from django.conf.urls import patterns, url

from doctorapp import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^dashboard', views.dashboard, name="dashboard"),    
    url(r'^create', views.createInstance, name="createInstance"),
    url(r'^signup', views.signup, name="signup"),
    url(r'^login',views.loginuser, name="login"),
    url(r'^logout', views.logoutuser, name="logout")
)

