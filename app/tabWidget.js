function TabWidget(node) {
  this._node = node;
  this._selectedTab = 0;
  this.init();
  this.bindEvent();
}

TabWidget.prototype = {};
TabWidget.prototype.constructor = TabWidget;

TabWidget.prototype.init = function() {
  var tabs = this._node.querySelectorAll('.tabs li');
  Array.prototype.forEach.call(tabs, function(tab) {
    tab.classList.add('tab');
  });

  var panes = this._node.querySelectorAll('.panes div');
  Array.prototype.forEach.call(panes, function(pane) {
    pane.style.display = 'none';
  });

  this.selectTab(tabs[this._selectedTab]);
};

TabWidget.prototype.bindEvent = function() {
  this._node.querySelector('.tabs').addEventListener('click', this.tabClickHandler.bind(this));
};

TabWidget.prototype.tabClickHandler = function(e) {
  e.preventDefault();

  var node = e.target.parentNode;
  this.selectTab(node);
};

TabWidget.prototype.getSelector = function(tabNode) {
  return tabNode.querySelector('a').getAttribute('href');
};

TabWidget.prototype.getTab = function(tabNumber) {
  return this._node.querySelectorAll('.tabs li')[tabNumber];
};

TabWidget.prototype.selectTab = function(tabNode) {
  var oldPaneSelector = this.getSelector(this.getTab(this._selectedTab));
  var paneSelector = tabNode.querySelector('a').getAttribute('href');

  this._node.querySelector(oldPaneSelector).style.display = 'none';
  this._node.querySelector(paneSelector).style.display = 'block';
};

module.exports = TabWidget;
