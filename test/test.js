var expect = require('chai').expect;
var webdriver = require('selenium-webdriver');
var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;

var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

var driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
    .build();


describe('testcase1', function () {
  it('should add items and validate if items are added successfully', function () {
   
        const edited = new Promise((resolve, reject)=>{
        try{
            driver.get("http://localhost:8081/todo");
            //driver.wait(webdriver.until.elementIsVisible(webdriver.By.id('newtodo')),10000);
            driver.findElement(webdriver.By.id('newtodo')).sendKeys("hello entersekt");
            driver.findElement(webdriver.By.id('add')).click();
          
          // driver.wait(webdriver.until.elementIsVisible(webdriver.By.id('txt_edit_0')),10000);
      
            var item =  driver.findElement(webdriver.By.id('txt_edit_0')).getText();
            resolve(item);
        }catch(err){
            resolve(err);
        }
       });
        val.then((val)=>{
         console.log("Val is -> "+val);
          // 3. ASSERT
          expect(item).to.be.equal("hello entersekt");
          driver.quit();
       }).catch((err)={});
  });
});
describe('testcase2', function () {
    it('should edit items in a list and validate if items are edited successfully', function () {
      const edited = new Promise((resolve, reject)=>{
        try{
          driver.get("http://localhost:8081/todo");
          driver.wait(webdriver.until.elementIsVisible(webdriver.By.id('txt_edit_0')),1000);
          driver.findElement(webdriver.By.id('txt_edit_0')).clear();
          driver.wait(webdriver.until.elementIsVisible(webdriver.By.id('txt_edit_0')),1000);
          driver.findElement(webdriver.By.id('txt_edit_0')).sendKeys("Need to secure my transactions through biometrics"); //edit with new text
          driver.findElement(webdriver.By.id('btn_save_1')).click(); //click save
          const itemEdited =  driver.findElement(webdriver.By.id('txt_edit_0')).getText();
          resolve(itemEdited);
        }catch(err){
          reject(err);
        }
    });
    edited.then((val)=>{
      console.log("Val is -> "+val);
      expect(val).to.be.equal("Need to secure my transactions through biometrics"); //assert that it has been edited
      driver.quit();

    }).catch((err)={});

  });
});
describe('testcase3', function () {
    it('should delete item in a list and validate if item is deleted', function () {
      const deleteItem = new Promise((resolve, reject)=>{
        try{
          driver.get("http://localhost:8081/todo");
          driver.wait(webdriver.until.elementIsVisible(webdriver.By.id('btn_delete_1')),1000);
          driver.findElement(webdriver.By.id('btn_delete_1')).click(); //deletes release
          driver.findElements(By.id('email')).then(found => expect(found).to.be.equal(0)); //it should dissappear
          
        }catch(err){
          reject(err);
        }
      });
        deleteItem().then(()=>{
          driver.quit();
        }).catch();
  
    });
  });

