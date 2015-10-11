/**
 * Created by Dmitry Burlakov (dantaeusb) on 09/10/15.
 * Copyright Dmitry Burlakov. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

function Nav() {
    var _self = this;
    var _timeout = null;
    var _inactive = false;

    this.current = {
        li: null,
        nesting: null
    };

    this.DOM = {
        main: "#main-header-nav",
        list: ".header-nav-list",
        button: "#header-nav-open-button-wrap"
    };

    this.dim = {
        width: null,
        height: null
    };

    this.hide = function() {
        _self.inactive = true;
        _self._timeout = null;

        if(_self.current.li != null) {
            _self.current.li.removeClass('active');
        }

        _self.current = {
            li: null,
            nesting: null
        };

        _self.inactive = false;
    };

    var _select = function(el) {
        if(!_self.inactive && $(el) !== _self.current.li) {
            console.info($(el));
            console.info(_self.current.li);

            _self.hide();

            _self.current.li = $(el);
            _self.current.nesting = $(el).find('.nesting-menu-wrapper > .nesting-menu');

            _self.current.li.addClass('active');
            _self.current.nesting.mouseleave(function(e) {
                _out();
            });
            _self.current.nesting.mouseenter(function(e) {
                _in();
            });
        }
    };

    var _out = function() {
        _self._timeout = setTimeout(function() {
            _self.hide();
        }, 1000);
    };

    var _in = function() {
        clearTimeout(_self.timeout);
        //alert('cleared ' + _self.timeout);
    };

    this.init = function() {
        this.DOM.main.find('.header-nav-list').find('li.parent').each(function() {
            $(this).click(function() {
                _select(this);
            });

            $(this).hover(function() {
                _select(this);
            });
        });

        this.DOM.button.click(function(e) {
            $('body').toggleClass('sidebar');
        });
    };

    document.addEventListener("DOMContentLoaded", function(e) {
        for(var _node in _self.DOM) {
            _self.DOM[_node] = $(_self.DOM[_node]);
        }

        _self.init();
    });

    return this;
}

var nav = new Nav();
nav.__proto__ = module;