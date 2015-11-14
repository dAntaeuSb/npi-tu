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
        overlay: "#page-overlay",
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

        _self.inactive = false;
    };

    var _select = function(el) {
        if($(el) !== _self.current.li) {
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
        console.log('out!');
    };

    var _in = function() {
        clearTimeout(_self.timeout);
        console.log('in!');
    };

    this.init = function() {
        this.DOM.main.find('.header-nav-list > li').each(function() {
            if($(this).hasClass('parent')) {
                $(this).click(function() {
                    _select(this);
                });

                $(this).mouseenter(function() {
                    _select(this);
                });
            } else {
                $(this).click(function() {
                    _self.hide();
                });

                $(this).mouseenter(function() {
                    _self.hide();
                });
            }
        });

        this.DOM.button.click(function(e) {
            $('body').toggleClass('sidebar');
        });

        this.DOM.overlay.click(function(e) {
            $('body').removeClass('sidebar');
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