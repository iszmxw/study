
# 公司相关
## OA地址

[oa登录](http://oa.tempushold.com:801/login/Login.jsp)

# 项目相关

## 测试服项目相关地址

[Git地址](http://10.10.10.116:10080/tjpay/youjintao)

[xpay后台](http://10.10.10.116:1280)

[xmer商户平台后台](http://10.10.10.116:1880)

## xmer目录结构

```
├── apps
│   ├── admin
│   │   ├── controllers
│   │   ├── lang
│   │   ├── models
│   │   ├── Module.php
│   │   └── views
│   └── front
│       ├── config
│       ├── controllers
│       ├── models
│       ├── Module.php
│       └── views
├── cache
│   ├── logs
│   │   ├── 2020-08-14.log
│   │   └── 2020-08-17.log
│   └── volt
│       ├── _mnt_hgfs_webs_xmer_apps_admin_views_account_bindmobile.html.compiled
│       ├── _mnt_hgfs_webs_xmer_apps_admin_views_account_cash.html.compiled
│       └── _mnt_hgfs_webs_xmer_apps_admin_views_role_index.html.compiled
├── channel
│   ├── channelCommon.php
│   └── tjauth
│       ├── config.php
│       └── tjauthChannel.class.php
├── common
│   ├── models
│   │   ├── MySQLDataface.php
│   │   ├── MySQLModel.php
│   │   └── OracleModel.php
│   ├── mongo
│   │   ├── MongoFs.php
│   │   └── xMongo.php
│   ├── plugins
│   │   ├── font
│   │   ├── Language.php
│   │   ├── PHPExcel
│   │   ├── PHPExcel.php
│   │   ├── phpqrcode
│   │   └── ValidCode.php
│   ├── util
│   │   ├── Arrays.php
│   │   ├── Common.php
│   │   ├── FunctionExtension.php
│   │   ├── HttpClient.php
│   │   ├── Image.php
│   │   ├── Log.php
│   │   ├── ModelEncryptorDES.php
│   │   ├── MongoFs.php
│   │   ├── Mongo.php
│   │   ├── PHPWebSocket.php
│   │   ├── SendMsg.php
│   │   ├── Sms.php
│   │   ├── SocketServer.php
│   │   ├── Tool.php
│   │   └── TradeWebsocket.php
│   ├── vendor
│   │   ├── autoload.php
│   │   ├── composer
│   │   ├── geoip2
│   │   ├── maxmind
│   │   ├── maxmind-db
│   │   └── mongodb
│   └── xSess
│       └── Xsession.php
├── config
│   ├── allow_url.php
│   ├── config.ini
│   ├── filter.php
│   ├── loader.php
│   ├── modules.php
│   ├── routes.php
│   ├── services.php
│   ├── sms_config.php
│   └── tj_public_key.php
├── index.html
├── public
│   ├── admin
│   │   ├── css
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   ├── images
│   │   ├── img
│   │   ├── js
│   │   └── My97DatePicker
│   ├── assets
│   │   ├── css
│   │   ├── images
│   │   ├── js
│   │   └── layui
│   ├── common
│   │   ├── additional-methods.js
│   │   ├── ajaxfileupload.js
│   │   ├── bootstrap.min.js
│   │   ├── Chart.js
│   │   ├── fancywebsocket.js
│   │   ├── jquery-1.10.2.min.js
│   │   ├── jquery.colorbox-min.js
│   │   ├── jquery.cookie.min.js
│   │   ├── jquery.flot.crosshair.js
│   │   ├── jquery.flot.js
│   │   ├── jquery.flot.time.js
│   │   ├── jquery.form.js
│   │   ├── jquery.metadata.js
│   │   ├── jquery-migrate-1.2.1.min.js
│   │   ├── jquery.validate.messages_cn.js
│   │   ├── jquery.validate.min.js
│   │   └── md5.min.js
│   ├── index.php
│   └── static
│       └── css
└── readme.txt
```

## 测试服相关信息

### 数据库

> #### IP：`10.10.10.115`
> #### 端口：`3306`
> #### 用户名：`yjt`
> #### 密码：`Yjt@2019`

### xshell账号
> #### IP：`10.10.10.116`
> #### 账号：`oracle`
> #### 密码：`TJPay_Ora_16`

## xpay 后台相关

> ##### 后台地址：http://10.10.10.116:1280/
> ##### 账号：`admin` 密码：`cs987654*`
> ##### 客户id：1000000007116 不能动


## xmer 后台相关

> ##### 后台地址：http://10.10.10.116:1880/
> ##### 账号：`yuyuyu` 密码：`123456`
> ##### 账号：`admin`  密码：`123456`
> ##### 客户id：1000000007116 不能动

## 支付接口文档

[支付接口文档首页](http://10.10.10.116:8001/)

[实名认证](http://10.10.10.116:8001/auth.html)

[商户入网](http://10.10.10.116:8001/merchant.html)

[快捷支付](http://10.10.10.116:8001/tftpay.html)

[鉴权支付](http://10.10.10.116:8001/authpay.html)

[账单支付](http://10.10.10.116:8001/billpay.html)

[便民支付](http://10.10.10.116:8001/bmpay.html)

[扫码支付](http://10.10.10.116:8001/qrpay.html)

[聚合支付（线下收款）](http://10.10.10.116:8001/aggpay.html)

[代付](http://10.10.10.116:8001/daifu.html)

[普通快捷退款](http://10.10.10.116:8001/refund.html)


## 数据库相关文档

| 表名        | 备注           |
| ----------- | ------------- |
| t_contacts  | 设定为必须通过联系来关联 联系方式 |
| t_link_info | 这个可以有多条，可对应客户、用户、集团的联系信息 |
| t_business  | 业务协议（客户CID开通本系统的服务）用户协议表 |

