import scrapy
from scrapy_dytt.items import ScrapyDyttItem


class DyttSpider(scrapy.Spider):
    name = 'dytt'
    allowed_domains = ['www.dytt8.net']
    start_urls = ['https://www.dytt8.net/html/gndy/china/index.html']

    # 需求:要电影名以及电影名点进去后的图片地址
    def parse(self, response):
        # 获取到所有具有电影名字的selector对象组成的列表
        a_list = response.xpath('//div[@class="co_content8"]//td[2]//a[2]')

        for a in a_list:
            # 电影名
            name = a.xpath('./text()').extract_first()
            # 要点进去的链接
            href = a.xpath('./@href').extract_first()
            # print(name, href)

            # 详情页的地址
            url = 'https://www.dytt8.net' + href

            # 对详情页发起访问
            yield scrapy.Request(url=url,
                                 callback=self.parse_second,
                                 meta={'name': name})

    # 详情页链接的访问方法
    def parse_second(self, response):
        src = response.xpath('//div[@id="Zoom"]//img/@src').extract_first()
        # 接受meta参数的值
        name = response.meta['name']

        movie = ScrapyDyttItem(src=src, name=name)

        # 将movie返回给管道
        yield movie