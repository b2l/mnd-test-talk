var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var TabWidget = require('../app/tabWidget');

describe('Tab Widget', function () {

    // Initialize the test suite
    before(function () {
      document.body.innerHTML = __html__['app/tab.html'];

      new TabWidget(document.querySelector('#tab'));
    });

    it('Should initialize the widget on load', function () {
        var tabWrapper = document.querySelector('#tab');

        expect(tabWrapper).to.be.defined;

        var tabs = tabWrapper.querySelectorAll('.tab');

        expect(tabs.length).to.equal(2);

        var pane2 = tabWrapper.querySelector('#tab2');

        expect(isHidden(pane2)).to.be.true;
    });

    it('Should display the matching pane when we click on a tab', function(done) {
        var tabWrapper = document.querySelector('#tab');

        var secondTab = tabWrapper.querySelector('.tab:nth-child(2) a');

        setTimeout(function() {
          secondTab.click();

          var pane1 = tabWrapper.querySelector('#tab1');
          var pane2 = tabWrapper.querySelector('#tab2');

          expect(isHidden(pane1)).to.be.true;
          expect(isHidden(pane2)).to.be.false;
          done();
        }, 1000);
    });
});

function isHidden(node) {
  return node.style.visibility === 'hidden' || node.style.display === 'none';
}
