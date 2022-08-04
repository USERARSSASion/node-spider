const Crawler = require('crawler');

const c = new Crawler({
  maxConnections: 10,
  jQuery: {
    name: 'cheerio',
    options: {
        normalizeWhitespace: true,
        xmlMode: true
    }
  },
  // This will be called for each crawled page
  callback: (error, res, done) => {
      if (error) {
          console.log(error);
      } else {
          const $ = res.$;
          // $ is Cheerio by default
          //a lean implementation of core jQuery designed specifically for the server
          console.log($('title').text());
      }
      done();
  }
});

// c.queue('http://www.amazon.com');
// c.queue('http://www.baidu.com');
c.queue('http://www.github.com');
// c.queue('http://www.bilibili.com');
