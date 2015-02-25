/**
 * @fileoverview
 * @author FE개발팀 김성호 sungho-kim@nhnent.com
 */

'use strict';

var Action = require('./action');
var Session = require('./session');
var PartManager = require('./partManager');

/**
 * MarkdownEditor
 * @exports MarkdownEditor
 * @extends {}
 * @constructor
 * @class
 */
function MarkdownEditor(base, options) {
    var self = this;

    this.base = base;
    this.$editorEl = this.base.layout.$editorEl;

    this.action = new Action({
        editor: this
    });

    this.session = new Session(this.base);
    this.partManager = new PartManager();
}

MarkdownEditor.prototype.init = function() {};

MarkdownEditor.prototype.newLine = function() {
    this.session.newLine();
};

MarkdownEditor.prototype.contentChanged = function() {
    var $el = this.$editorEl;

    this.action.stopObserveContent();

    //this.applySyntaxHighlight();

    this.action.observeContent();
};


MarkdownEditor.prototype.applySyntaxHighlight = function() {
    var $el = this.$editorEl;
    $el.html(Prism.highlight($el[0].innerText, Prism.languages.markdown));
};

module.exports = MarkdownEditor;
