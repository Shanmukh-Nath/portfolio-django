from django.db import models

# Create your models here.
from django.db import models

class Planet(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='planets/')
    # Add more fields as needed for your planet information

    def __str__(self):
        return self.name
