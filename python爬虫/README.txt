1.安装scrapy
   pip install scrapy
2.创建scrapy项目
   scrapy startproject 项目名称
3.项目组成
    spiders
        _init_-py
        自定义的爬虫文件.py  由我们自己创建，是实现爬虫核心功能的文件
    _init__.py
    items.py    定义数据结构的地方，是一个继承自scrapy.Item的类
    middlewares.py      中间件 代理
    pipelines.py    管道文件，里面只有一个类,用于处理下载数据的后续处理
                    默认是30o优先级，值越小优先级越高〔1-1000)
    settings.py     配置文件 比如:是否遵守robots协议，User-Agent定义等
4.创建爬虫文件
    跳转到spiders文件夹
    scrapy genspider 爬虫名字 网页域名(注意不要加http)
5.response的属性和方法
    response.text 获取的是响应的字符串
    response.body  获取的是二进制数据
    response.xpath  可以直接是xpath方法来解析response中的内容
    response.extract()  提取seletor对象的data属性值
    response.extract_first()    提取的seletor列表的第一个数据
6.运行代码 
    在spiders文件夹下执行scrapy crawl 爬虫文件名