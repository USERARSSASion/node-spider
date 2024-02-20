const Crawler = require('crawler');
// const jsdom = require("jsdom");
// const { JSDOM } = jsdom;

const c = new Crawler({
  maxConnections: 10,
  // jQuery: {
  //   name: 'cheerio',
  //   options: {
  //       normalizeWhitespace: true,
  //       xmlMode: true
  //   }
  // },
  // encoding: null,
  // jQuery: jsdom,
  jquery: false,
  json: true,
  skipDuplicates: true,
  // retries:0,
  // timeout:100,
  // This will be called for each crawled page
  callback: (error, res, done) => {
      if (error) {
          console.log(error);
      } else {
        console.log(res.body, res.options.platform);
        // const { document } = (new JSDOM(res.body)).window;
        // console.log(document.getElementById("international-home-app"));
          // const $ = res.$;
          // $ is Cheerio by default
          //a lean implementation of core jQuery designed specifically for the server
          // console.log($('title').text());
      }
      done();
  }
});

// c.queue('http://www.amazon.com');
// c.queue('http://www.baidu.com');
// c.queue('http://www.github.com');
// c.queue({ uri: 'http://www.bilibili.com', platform: 'bilibili' });
c.queue({ uri: 'https://a.sina.cn/t/Inside/hotSearch/lists?is_new_engine=0&get_from=wb&sort_by=hot', platform: 'weibo' })
