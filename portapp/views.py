from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')

# views.py
from django.shortcuts import render
from .models import Planet

def planet_detail(request, planet_id):
    planet = Planet.objects.get(id=planet_id)
    # Fetch associated projects from the database if needed
    context = {'planet': planet}
    return render(request, 'planet_detail.html', context)
