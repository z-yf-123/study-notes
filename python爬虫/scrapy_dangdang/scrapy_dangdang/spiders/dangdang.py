import scrapy
# 导入items.py文件下的ScrapyDangdangItem类
from scrapy_dangdang.items import ScrapyDangdangItem


class DangdangSpider(scrapy.Spider):
    # 爬虫的名字 用于运行爬虫的时候 使用的值
    name = 'dangdang'
    # 允许访问的域名
    # 如果多页下载，就必须调整allowed_domains的范围，一般只写域名
    allowed_domains = ['category.dangdang.com']
    # 起始的url地址 指的是第一次要访问的域名
    start_urls = ['https://category.dangdang.com/cp01.01.02.00.00.00.html']

    # 新增base_url
    base_url = 'https://category.dangdang.com/pg'
    page = 1

    def parse(self, response):
        # 得到的是selector列表对象
        li_list = response.xpath('//ul[@id="component_59"]/li')
        # 遍历selector列表对象
        for li in li_list:
            # 得到selector列表对象中第一个data的值
            src = li.xpath('.//img/@data-original').extract_first()
            # 因为图片做了懒加载，只有加载到了才有正确的src,所以要换成data-original
            if not src:
                #第一张图只有src没有data-original
                src = li.xpath('.//img/@src').extract_first()

            name = li.xpath('.//img/@alt').extract_first()
            price = li.xpath(
                './/span[@class="search_now_price"]/text()').extract_first()
            # print(src, name, price)
            # 将数据放到对象中
            book = ScrapyDangdangItem(src=src, name=name, price=price)
            # 获取一个book就将book交给piplines
            yield book

        # 每一页的爬取的业务逻辑全都是一样，所以只需要再次调用parse方法即可
        # 第二页:https://category.dangdang.com/pg2-cp01.01.02.00.00.00.html
        # 第三页:https://category.dangdang.com/pg3-cp01.01.02.00.00.00.html
        # 第四页:https://category.dangdang.com/pg4-cp01.01.02.00.00.00.html
        if self.page < 5:
            self.page = self.page + 1

            url = self.base_url + str(self.page) + '-cp01.01.02.00.00.00.html'

            # 怎么再次调用parse方法
            # scrapy.Request就是scrapy的get请求
            # url是请求地址
            # callback就是要执行的函数
            yield scrapy.Request(url=url, callback=self.parse)
