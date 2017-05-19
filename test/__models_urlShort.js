const expect = require('chai').expect;
const Url = require('../models/data/urlShort');
const url = require('../models/url');
const util = require('../tool/utility');


describe('url model', () => {
  let testUrl ={
    url: 'http://www.msn.com',
    urlShort: url.shortURL('http://www.msn.com'),
  };
  let testId;
  let urlShort;

  it('Create url', (done) => {
    Url.create(testUrl, (fail) => {

    }, (url) => {
      testId = url.id;
      urlShort = url.urlShort;
      expect(url.url).to.be.equal(testUrl.url);
      expect(url.urlShort).to.be.equal(testUrl.urlShort);
      done();
    }
    );
  });
  it('Read all urls', (done) => {
    Url.findAll((fail) => {

    //  callback
    }, (urls) => {
      this.testUrls = urls;
      expect(this.testUrls.length).to.be.above(0);
      done();
    }
  );
  });
  it('Update url', (done) => {
    testUrl = {
      id: testId,
      url: 'http://www.tweeter.com',
      shortURL: url.shortURL('http://www.tweeter.com'),
    };
    // update method
    Url.update(testUrl, (fail) => {

    // callback
    }, (url) => {
      expect(url.dataValues.url).to.be.equal(testUrl.url);
      done();
    }
    );
  });
  it('Delete url', (done) => {
    Url.destroy(testUrl, (fail) => {
    
  //  callback
  }, (res) => {
    expect(res).to.be.equal(1);
    done();
  }
  );
});
});
