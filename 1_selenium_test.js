const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
// const { Options } = require('selenium-webdriver/chrome')
// 初始化浏览器
const driver = new Builder()
    .forBrowser(Browser.CHROME)
    // .setChromeOptions(new Options().androidChrome())  // 安卓
    // .setChromeOptions(
    //     new Options().setMobileEmulation({ deviceName: 'Nexus 5X' })  // H5
    // )
    .build();

(async function () {
    try {
        // 打开 百度
        await driver.get('http://www.baidu.com');
        // 元素定位 发送操作 类似于 jquery的$(".s_ipt").val("aaa");
        await driver.findElement(By.className('s_ipt')).sendKeys('aaa', Key.RETURN);
        // 元素等待
        // await driver.wait(until.elementLocated(By.id('id'), 10000));
        // 等待页面标题是否匹配
        await driver.wait(until.titleIs('aaa_百度搜索'), 1000);
        // 程序睡眠
        // await driver.sleep(500);//毫秒
        // 执行JavaScript 有返回值
        // await driver.executeScript('location.href="/xx.html" ');
        // const obj = await driver.executeScript('document.getElementById("id").value="value"'); //$("#id").val("value");
        /** 
         * 切换作用域
         * 网页中常常会嵌入一些iframe，或者是标签页面或者是弹窗的形式。
         * 这是要操作iframe里面的元素前就需把当前的作用域切换到iframe，切换后在切换会主页面前所有的操作都是针对iframe，
         * 在iframe内的操作结束后需切换回主页面。
        */
        await driver.switchTo().frame(driver.findElement(By.id("iframe-id")));  //ifra
        /**
         * 切换到弹出框 
         * 有时候一些网页会弹出一些操作提示，提示框会堵塞整个任务的执行，需将其关闭(只针对原生的js弹出框)。
         */
        // const alert = await driver.switchTo().alert();
        // 关闭弹出框
        // await alert.dismiss();
        // 切换回主页面
        // await driver.switchTo().defaultContent();
        // 全屏
        // await driver.manage().window().maximize();
        // 截图 截图后的结果为base64格式，可自行处理。
        // const d = await driver.takeScreenshot()
        // 部分截图 (参考用)
        // driver.findElement(By.className('yanzheng')).then(function(obj){
        //     obj.getSize().then(function(size){          
        //         obj.getLocation().then(function(loc){
        //             driver.takeScreenshot().then(function(d){
        //                   var data={
        //                         d:d,
        //                         width:size.width,
        //                         height:size.height,
        //                         x:loc.x,
        //                         y:loc.y
        //                   };
        //                 //此处省略以下两步
        //                 //1.提交data信息到服务器处理图片
        //                 //2.先根据d获取整张图片信息，再根据需要截取的元素的其实位置x,y以及长宽width,height截取相应的图片
        //             })
        //        }
        //     }
        // })
        await driver.quit();
    } catch (error) {
        console.log(error);
        await driver.quit();
    }
})()