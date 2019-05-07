# -- coding: utf-8 --
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse, HttpResponse
import json, os
from django.core import serializers
from myapp.models import Img
from django.conf import settings

@require_http_methods(["POST"])
def uploadImg(request): # 图片上传函数
    response = {}
    file = request.FILES.get('file')
    try:
        img = Img(imgUrl=file,imgName=file.name)
        img.save()
        response['msg'] = 'success'
    except Exception as e:
        response['msg'] = str(e)
    # return render(request, 'index.html')
    return JsonResponse(response)

@require_http_methods(["POST"])
def showImg(request):
    response = {}
    try:
        imgs = Img.objects.all() # 从数据库中取出所有的图片路径
        response['list'] = json.loads(serializers.serialize("json", imgs))
        response['msg'] = 'success'
    except  Exception as e:
        response['msg'] = str(e)
    return JsonResponse(response)
    # imagepath = os.path.join(settings.BASE_DIR, "appfront/src/upload/media/8.jpg")  # 图片路径
    # with open(imagepath, 'rb') as f:
    #     image_data = f.read()
    # return HttpResponse(image_data, content_type="image/png")
