# -- coding: utf-8 --
from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json
from django.core import serializers
from myapp.models import User
from myapp.middle.myappUtils import token as tokenUtil, myUtils
from django.core.cache import cache
# django自带的邮件发送模块
from django.core.mail import send_mail

from myproject.settings import EMAIL_FROM

import logging

# 生成一个以当前文件名为名字的logger实例
logger = logging.getLogger(__name__)
# 生成一个名为collect的logger实例
validCode_logger = logging.getLogger("valiCode")
login_record_logger = logging.getLogger("login_record")
rubbish_record_logger = logging.getLogger("rubbish")


@require_http_methods(["POST"])
def send_register_email(request, send_type='register'):
    response = {}
    # 实例化EmailVerifyRecord对象，将邮件内容保存到数据库，便于查询激活链接是否存在
    # email_record = EmailVerifyRecord()
    # email_record.email = email
    # email_record.send_type = send_type
    # email_record.code = random_str(20) #生成长20的随机字符串用以构成激活链接(域名/active/随机code/)
    # # 只要编写逻辑判断激活链接中的code是否有，就可以对应user的is_active=true
    # email_record.save()

    # 发送邮件功能如下
    # email_title = ""邮件标题
    # email_body = ""主体
    email_to = []
    username = request.data['username'].lower()
    email = request.data['email']
    email_to.append(email)

    validCode = myUtils.getValidCode()
    cache.set(username + ':' + email, validCode, 5 * 60)

    validCode_logger.info(username + ' : ' + email + ' : ' + validCode)

    if send_type == "register":
        email_title = "RainRose注册验证码"
        email_body = '''{}：\n\t欢迎注册RainRose，您的验证码为：{}'''.format(
            username, validCode)
        # Parameter：subject标题, message主体, from_email发送邮箱, recipient_list邮件列表,
        send_status = send_mail(email_title, email_body,
                                EMAIL_FROM, email_to)  # 返回真值，判断是否发送OK
        if send_status:
            # 你想怎样
            response['msg'] = 'success'
            return JsonResponse(response)
        else:
            response['msg'] = '发送邮件失败'
            return JsonResponse(response)


# Create your views here.
@require_http_methods(["POST"])
def add_user(request):
    response = {}
    data = json.loads(request.body)
    username = data['username'].lower()
    password = data['password']
    email = data['email']
    inputValidCode = str(data['validCode']).lower()
    rightValidCode = str(cache.get(username + ':' + email)).lower()

    # 判断验证码是否正确
    if inputValidCode != rightValidCode or rightValidCode == 'none':
        response['msg'] = '验证码错误，请重试（更换用户名或邮箱需重新发送验证码）'
        return JsonResponse(response)

    # 判断账号是否存在
    user = User.objects.filter(username=username)
    userList = json.loads(serializers.serialize("json", user))
    if (len(userList) != 0):
        response['msg'] = '用户名已存在'
        return JsonResponse(response)

    try:
        user = User(username=username, password=password, email=email)
        user.save()
        response['msg'] = 'success'
    except Exception as e:
        response['msg'] = str(e)

    return JsonResponse(response)


@require_http_methods(["POST"])
def login(request):
    response = {}
    data = json.loads(request.body)
    username = data['username'].lower()
    password = data['password']
    try:
        user = User.objects.filter(username=username)
        userList = json.loads(serializers.serialize("json", user))
    except Exception as e:
        response['msg'] = str(e)

    if userList != []:
        validPwd = userList[0]['fields']['password']
        if (password == validPwd):
            response['token'] = tokenUtil.create_token(username)
            response['msg'] = 'success'
            login_record_logger.info('log in success. user : ' + username)
        else:
            login_record_logger.info('log in failed. user : ' + username)
            response['msg'] = '密码错误'
    else:
        response['msg'] = '该用户不存在，请先注册'

    return JsonResponse(response)


@require_http_methods(["POST"])
def get_username(request):
    response = {}
    accessToken = request.data.get('token')
    try:
        if accessToken is not None:
            username = tokenUtil.get_username(accessToken)
            response['username'] = username
            response['msg'] = 'success'
    finally:
        if response.get('msg') != 'success':
            response['msg'] = '登陆信息已失效，请重新登陆'
    return JsonResponse(response)


@require_http_methods(["POST"])
def other_request(request):
    response = {'msg': 'you sb'}
    rubbish_record_logger.info("I'm a rubbish request. ")
    return JsonResponse(response)


@require_http_methods(["POST"])
def check_username(request):
    response = {}
    username = request.data.get('username')
    try:
        if username is not None:
            username_list = User.objects.filter(username=username)
            userList = json.loads(serializers.serialize("json", username_list))
            if len(userList) == 0:
                response['msg'] = 'success'
            else:
                response['msg'] = 'false'
    except Exception as e:
        response['msg'] = str(e)
    return JsonResponse(response)
