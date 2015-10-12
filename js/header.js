/**
 * Created by Dmitry Burlakov (dantaeusb) on 30/09/15.
 * Copyright Dmitry Burlakov. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

function Header() {
    var _self = this;

    this.DOM = {
        main: "header#header",
        bg: "#main-header-nav-bg",
        gradient: "#main-header-landing .gradient",
        links: "#main-heder-quicklinks"
    };

    this.dim = {
        width: null,
        height: null
    };

    this.resize = function(w, h) {
        this.dim.width = w;
        this.dim.height = h;
    };

    this.scroll = function(t, l) {
        var p = t / (_self.DOM.main.height() - 57);
        console.log(p);

        if(p < 1) {
            _self.DOM.bg.css({
                "margin-top": (-t) + "px"
            });

            if(p > .8) {
                _self.DOM.links.css({
                    opacity: 1 - (p - .5) * 2,
                    marginBottom: -87 * ((p - .5) * 2)
                });
                _self.DOM.bg.css({
                    opacity: (1 - ((p - .8) * 5)) *.8
                });
                _self.DOM.gradient.css({
                    opacity: ((p - .8) * 5)
                });
            } else if (p > .5) {
                _self.DOM.links.css({
                    opacity: 1 - (p - .5) * 2,
                    marginBottom: -87 * ((p - .5) * 2)
                });
                _self.DOM.bg.css({
                    opacity: .8
                });
                _self.DOM.gradient.css({
                    opacity: 0
                });
            } else {
                _self.DOM.links.css({
                    opacity: 1,
                    marginBottom: 0
                });
                _self.DOM.bg.css({
                    opacity: .8
                });
                _self.DOM.gradient.css({
                    opacity: 0
                });
            }
        } else {
            _self.DOM.links.css({
                opacity: 0,
                marginBottom: -87
            });
            _self.DOM.bg.css({
                opacity: 0
            });
            _self.DOM.gradient.css({
                opacity: 1
            });
        }
    };

    document.addEventListener("DOMContentLoaded", function(e) {
        for(var _node in _self.DOM) {
            _self.DOM[_node] = $(_self.DOM[_node]);
        }

        document.addEventListener('scroll', function(e) {
            _self.scroll($(window).scrollTop(), $(window).scrollLeft());
        });

        window.addEventListener('resize', function(e) {
            _self.resize($(window).width(), $(window).height());
        });

        _self.resize($(window).width(), $(window).height());
        _self.scroll($(window).scrollLeft(), $(window).scrollTop());
    });

    return this;
}

var header = new Header();
header.__proto__ = module;