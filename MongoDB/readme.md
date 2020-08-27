## 介绍

关于MongoDB的一些介绍

## 安装

[安装MongoDB](https://www.runoob.com/mongodb/mongodb-linux-install.html)

[Linux安装](https://docs.mongodb.com/manual/administration/install-on-linux/)

- [Install on Red Hat](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-red-hat/)

- [Install on Ubuntu](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

- [Install on Debian](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-debian/)

- [Install on SUSE](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-suse/)

- [Install on Amazon](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/)

## sh命令

```shell

[root@localhost /]# mongod --help
Options:
  --networkMessageCompressors arg (=snappy,zstd,zlib)
                                        用于网络消息的用逗号分隔的压缩器列表

常规选项:
  -h [ --help ]                         显示此用法信息
  --version                             显示版本信息
  -f [ --config ] arg                   配置文件指定
                                        附加选项
  --configExpand arg                    在配置中处理扩展指令
                                        file (none, exec, rest)
  --port arg                            默认情况下指定端口号- 27017
  --ipv6                                启用IPv6支持(默认禁用)
  --listenBacklog arg (=128)            设置套接字侦听积压大小
  --maxConns arg (=1000000)             最大同时连接数
  --pidfilepath arg                     pidfile的完整路径（如果未设置，则为否 pidfile已创建）
  --timeZoneInfo arg                    时区信息目录的完整路径， 例如/usr/share/zoneinfo
  --nounixsocket                        禁用监听Unix套接字
  --unixSocketPrefix arg                UNIX域的备用目录 套接字（默认为/ tmp）
  --filePermissions arg                 在UNIX域上设置的权限 套接字文件-默认为0700
  --fork                                叉子服务器过程
  -v [ --verbose ] [=arg(=v)]           更详细（包括多次） 以获得更多详细信息-vvvvv）
  --quiet                               静音输出
  --logpath arg                         日志文件发送到而不是 stdout-必须是文件，而不是 目录
  --syslog                              登录到系统的syslog工具 文件或标准输出
  --syslogFacility arg                  syslog facility used for mongodb syslog
                                        message
  --logappend                           Append to logpath instead of 
                                        over-writing
  --logRotate arg                       Set the log rotation behavior 
                                        (rename|reopen)
  --timeStampFormat arg                 Desired format for timestamps in log 
                                        messages. One of iso8601-utc or 
                                        iso8601-local
  --setParameter arg                    Set a configurable parameter
  --bind_ip arg                         Comma separated list of ip addresses to
                                        listen on - localhost by default
  --bind_ip_all                         Bind to all ip addresses
  --noauth                              Run without security
  --transitionToAuth                    For rolling access control upgrade. 
                                        Attempt to authenticate over outgoing 
                                        connections and proceed regardless of 
                                        success. Accept incoming connections 
                                        with or without authentication.
  --slowms arg (=100)                   Value of slow for profile and console 
                                        log
  --slowOpSampleRate arg (=1)           Fraction of slow ops to include in the 
                                        profile and console log
  --auth                                Run with security
  --clusterIpSourceWhitelist arg        Network CIDR specification of permitted
                                        origin for `__system` access
  --profile arg                         0=off 1=slow, 2=all
  --cpu                                 Periodically show cpu and iowait 
                                        utilization
  --sysinfo                             Print some diagnostic system 
                                        information
  --noscripting                         Disable scripting engine
  --notablescan                         Do not allow table scans
  --shutdown                            Kill a running server (for init 
                                        scripts)
  --keyFile arg                         Private key for cluster authentication
  --clusterAuthMode arg                 Authentication mode used for cluster 
                                        authentication. Alternatives are 
                                        (keyFile|sendKeyFile|sendX509|x509)

Replication options:
  --oplogSize arg                       Size to use (in MB) for replication op 
                                        log. default is 5% of disk space (i.e. 
                                        large is good)

Replica set options:
  --replSet arg                         arg is <setname>[/<optionalseedhostlist
                                        >]
  --enableMajorityReadConcern [=arg(=1)] (=1)
                                        Enables majority readConcern

Sharding options:
  --configsvr                           Declare this is a config db of a 
                                        cluster; default port 27019; default 
                                        dir /data/configdb
  --shardsvr                            Declare this is a shard db of a 
                                        cluster; default port 27018

Storage options:
  --storageEngine arg                   What storage engine to use - defaults 
                                        to wiredTiger if no data files present
  --dbpath arg                          Directory for datafiles - defaults to 
                                        /data/db
  --directoryperdb                      Each database will be stored in a 
                                        separate directory
  --syncdelay arg (=60)                 Seconds between disk syncs
  --journalCommitInterval arg (=100)    how often to group/batch commit (ms)
  --upgrade                             Upgrade db if needed
  --repair                              Run repair on all dbs
  --journal                             Enable journaling
  --nojournal                           Disable journaling (journaling is on by
                                        default for 64 bit)
  --oplogMinRetentionHours arg (=0)     Minimum number of hours to preserve in 
                                        the oplog. Default is 0 (turned off). 
                                        Fractions are allowed (e.g. 1.5 hours)

WiredTiger options:
  --wiredTigerCacheSizeGB arg           Maximum amount of memory to allocate 
                                        for cache; Defaults to 1/2 of physical 
                                        RAM
  --wiredTigerJournalCompressor arg (=snappy)
                                        Use a compressor for log records 
                                        [none|snappy|zlib|zstd]
  --wiredTigerDirectoryForIndexes       Put indexes and data in different 
                                        directories
  --wiredTigerCollectionBlockCompressor arg (=snappy)
                                        Block compression algorithm for 
                                        collection data [none|snappy|zlib|zstd]
  --wiredTigerIndexPrefixCompression arg (=1)
                                        Use prefix compression on row-store 
                                        leaf pages

Free Monitoring Options:
  --enableFreeMonitoring arg            Enable Cloud Free Monitoring 
                                        (on|runtime|off)
  --freeMonitoringTag arg               Cloud Free Monitoring Tags

AWS IAM Options:
  --awsIamSessionToken arg              AWS Session Token for temporary 
                                        credentials

TLS Options:
  --tlsOnNormalPorts                    Use TLS on configured ports
  --tlsMode arg                         Set the TLS operation mode 
                                        (disabled|allowTLS|preferTLS|requireTLS
                                        )
  --tlsCertificateKeyFile arg           Certificate and key file for TLS
  --tlsCertificateKeyFilePassword arg   Password to unlock key in the TLS 
                                        certificate key file
  --tlsClusterFile arg                  Key file for internal TLS 
                                        authentication
  --tlsClusterPassword arg              Internal authentication key file 
                                        password
  --tlsCAFile arg                       Certificate Authority file for TLS
  --tlsClusterCAFile arg                CA used for verifying remotes during 
                                        inbound connections
  --tlsCRLFile arg                      Certificate Revocation List file for 
                                        TLS
  --tlsDisabledProtocols arg            Comma separated list of TLS protocols 
                                        to disable [TLS1_0,TLS1_1,TLS1_2]
  --tlsAllowConnectionsWithoutCertificates 
                                        Allow client to connect without 
                                        presenting a certificate
  --tlsAllowInvalidHostnames            Allow server certificates to provide 
                                        non-matching hostnames
  --tlsAllowInvalidCertificates         Allow connections to servers with 
                                        invalid certificates
  --tlsFIPSMode                         Activate FIPS 140-2 mode at startup
  --tlsLogVersions arg                  Comma separated list of TLS protocols 
                                        to log on connect [TLS1_0,TLS1_1,TLS1_2
                                        ]
```