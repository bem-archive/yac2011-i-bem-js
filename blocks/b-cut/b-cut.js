/** @requires BEM */
/** @requires BEM.DOM */

(function() {

BEM.DOM.decl('b-cut', {

    onSetMod : {
        'js' : function() {
            BEM.blocks['b-link'].liveCtxBind(this.elem('opener'), 'click', this.open, this);
            this.bindTo(this.elem('close'), 'leftclick', this.close);
        }
    },
    open : function() {
        this.setMod('state', 'opened');
    },
    close: function() {
        this.setMod('state', '');
    }

}, {

    live : function() {
        this.liveInitOnBlockInsideInit('b-link');
    }

});

})();
