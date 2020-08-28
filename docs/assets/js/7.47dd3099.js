(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{200:function(t,a,n){"use strict";n.r(a);var s=n(0),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍","aria-hidden":"true"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),n("p",[t._v("关于MongoDB的一些介绍")]),t._v(" "),n("h2",{attrs:{id:"安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://docs.mongodb.com/manual/administration/install-on-linux/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Linux上安装"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[n("p",[n("router-link",{attrs:{to:"/mongodb/InstallRedHat.html"}},[t._v("Install on Red Hat")]),t._v("（文档已更新）")],1)]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install on Ubuntu"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install on Debian"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-suse/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install on SUSE"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Install on Amazon"),n("OutboundLink")],1)])])]),t._v(" "),n("h2",{attrs:{id:"sh命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sh命令","aria-hidden":"true"}},[t._v("#")]),t._v(" sh命令")]),t._v(" "),n("blockquote",[n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@localhost /"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# mongod --help")]),t._v("\n选项:\n  --networkMessageCompressors arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("snappy,zstd,zlib"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                        用于网络消息的用逗号分隔的压缩器列表\n\n常规选项:\n  -h "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" --help "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("                         显示此用法信息\n  --version                             显示版本信息\n  -f "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" --config "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" arg                   配置文件指定\n                                        附加选项\n  --configExpand arg                    在配置中处理扩展指令\n                                        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("none, exec, rest"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --port arg                            默认情况下指定端口号- "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("27017")]),t._v("\n  --ipv6                                启用IPv6支持"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认禁用"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --listenBacklog arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            设置套接字侦听积压大小\n  --maxConns arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             最大同时连接数\n  --pidfilepath arg                     pidfile的完整路径（如果未设置，则为否 pidfile已创建）\n  --timeZoneInfo arg                    时区信息目录的完整路径， 例如/usr/share/zoneinfo\n  --nounixsocket                        禁用监听Unix套接字\n  --unixSocketPrefix arg                UNIX域的备用目录 套接字（默认为/ tmp）\n  --filePermissions arg                 在UNIX域上设置的权限 套接字文件-默认为0700\n  --fork                                叉子服务器过程\n  -v "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" --verbose "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("arg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("           更详细（包括多次） 以获得更多详细信息-vvvvv）\n  --quiet                               静音输出\n  --logpath arg                         日志文件发送到而不是 stdout-必须是文件，而不是 目录\n  --syslog                              登录到系统的syslog工具 文件或标准输出\n  --syslogFacility arg                  用于mongodb syslog的syslog工具消息\n  --logappend                           附加到日志路径而不是盖写\n  --logRotate arg                       设置日志旋转行为"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("重命名"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("开放"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --timeStampFormat arg                 日志中所需的时间戳格式消息。iso8601-utc或 iso8601-local\n  --setParameter arg                    设置一个可配置参数\n  --bind_ip arg                         逗号分隔的ip地址列表，默认侦听本地主机\n  --bind_ip_all                         绑定到所有ip地址\n  --noauth                              无认证模式运行\n  --transitionToAuth                    用于滚动访问控制升级。尝试通过传出进行身份验证连接和继续不管成功。接受传入的连接是否有身份验证。\n  --slowms arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                   配置文件和控制台的慢值日志\n  --slowOpSampleRate arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           慢行动的部分，包括在配置文件和控制台日志\n  --auth                                认证模式运行\n  --clusterIpSourceWhitelist arg        网络CIDR规范允许 origin "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("__system"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" access\n  --profile arg                         "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("off "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("slow, "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("all\n  --cpu                                 定期显示cpu和iowait利用\n  --sysinfo                             打印一些诊断系统信息\n  --noscripting                         关闭脚本引擎\n  --notablescan                         不运行表扫描\n  --shutdown                            杀死正在运行的服务器"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("用于init"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("脚本"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --keyFile arg                         用于集群身份验证的私钥\n  --clusterAuthMode arg                 用于集群的身份验证模式身份验证。替代"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("密钥文件"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sendKeyFile "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" sendX509 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" x509"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n复制选项:\n  --oplogSize arg                       复制操作使用的大小"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("单位为MB"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("日志。默认为5%的磁盘空间"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("即大是好的"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n副本设置选项:\n  --replSet arg                         arg is "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("setname"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("/"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("optionalseedhostlist"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --enableMajorityReadConcern "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("arg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                        使多数readConcern\n\n分片选项:\n  --configsvr                           声明这是一个配置数据库集群"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("默认端口27019"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("默认的 "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dir")]),t._v(" /data/configdb\n  --shardsvr                            声明这是a的一个碎片db集群"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("默认端口27018\n\n储存选项:\n  --storageEngine arg                   使用什么存储引擎-如果没有数据文件，默认使用wiredTiger\n  --dbpath arg                          数据文件目录-默认为"),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),t._v("/data/db"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n  --directoryperdb                      每个数据库将存储在单独的目录中\n  --syncdelay arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                 磁盘同步之间的秒数\n  --journalCommitInterval arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    分组/批处理提交的频率"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ms"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --upgrade                             如果需要就更新数据库\n  --repair                              修复所有的数据库\n  --journal                             启用日志记录\n  --nojournal                           禁用日志记录"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("默认为64位日志记录"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --oplogMinRetentionHours arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     oplog中保存的最小小时数。默认值为0"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("关闭"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。允许分数"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("如1.5小时"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nWiredTiger选项:\n  --wiredTigerCacheSizeGB arg           为缓存分配的最大内存量"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("默认为物理RAM的1/2\n  --wiredTigerJournalCompressor arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("snappy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                        使用压缩器保存日志记录 \n                                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("snappy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("zlib"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("zstd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --wiredTigerDirectoryForIndexes       将索引和数据放在不同的目录中\n  --wiredTigerCollectionBlockCompressor arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("snappy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                        采集数据的块压缩算法"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("none"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("snappy"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("zlib"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("zstd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --wiredTigerIndexPrefixCompression arg "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                                        对行存储的叶页使用前缀压缩\n\n免费监控选项:\n  --enableFreeMonitoring arg            启用无云监控 \n                                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("on"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("runtime"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("off"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --freeMonitoringTag arg               无云监控标签\n\nAWS IAM 选项:\n  --awsIamSessionToken arg              用于临时凭证的AWS会话令牌\n\nTLS 选项:\n  --tlsOnNormalPorts                    在配置的端口上使用TLS\n  --tlsMode arg                         设置TLS操作模式\n                                        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("disabled"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("allowTLS"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("preferTLS"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("requireTLS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  --tlsCertificateKeyFile arg           TLS证书和密钥文件\n  --tlsCertificateKeyFilePassword arg   密码解锁密钥在TLS\n                                        证书密钥文件\n  --tlsClusterFile arg                  内部TLS的密钥文件\n                                        authentication\n  --tlsClusterPassword arg              内部认证密钥文件\n                                        password\n  --tlsCAFile arg                       TLS证书权威文件\n  --tlsClusterCAFile arg                期间用于验证远程的CA\n                                        inbound connections\n  --tlsCRLFile arg                      证书撤销列表文件\n                                        TLS\n  --tlsDisabledProtocols arg            用逗号分隔的TLS协议列表，禁用"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TLS1_0,TLS1_1,TLS1_2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  --tlsAllowConnectionsWithoutCertificates \n                                        允许客户端连接不提供证书\n  --tlsAllowInvalidHostnames            允许服务器证书提供不匹配的主机名\n  --tlsAllowInvalidCertificates         允许连接到使用无效证书的服务器\n  --tlsFIPSMode                         启动FIPS "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("140")]),t._v("-2模式\n  --tlsLogVersions arg                  用于登录的TLS协议列表"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TLS1_0,TLS1_1,TLS1_2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);