/**
 * Created by Dmitry Burlakov (dantaeusb) on 08/10/15.
 * Copyright Dmitry Burlakov. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

function Navigation() {
    var _self = this;

    this.activeElement = null;
    this.activePointer = null;

    this.DOM = {
        nav: "nav#main-header-nav",
        list: "nav#main-header-nav .header-nav-list.lvl-0"
    };

    document.addEventListener("DOMContentLoaded", function(e) {
        var i = 0;

        for(var _node in _self.DOM) {
            _self.DOM[_node] = $(_self.DOM[_node]);
        }

        _self.DOM.list.find("ul.lvl-1 > li").each(function(i) {
            var indexPosition = i++;
            $(this).mouseenter(function(e) {
                var id = $(this).get(0).id;
                var rg = /pointer-header-(.*)/g;
                var realID = rg.exec(id)[1];

                var neededElement = $("#nested-header-" + realID);

                $(this).data('indexPosition', indexPosition);
                $(this).addClass('active');

                if(neededElement) {
                    if(neededElement !== _self.activeElement) {
                        var ae = _self.activeElement;

                        if(!!ae) {
                            if($(this).data('indexPosition') > _self.activePointer.data('indexPosition')) {
                                ae.addClass('up');
                            } else {
                                ae.addClass('down');
                            }

                            (function() {
                                var _ae = ae;
                                setTimeout(function() {
                                    _ae.css({display: "none"});
                                    _ae.removeClass('up');
                                    _ae.removeClass('down');
                                }, 300)
                            })();
                        }

                        neededElement.css({display: "block"});

                        if(!!_self.activePointer && $(this).data('indexPosition') > _self.activePointer.data('indexPosition')) {
                            neededElement.addClass('down');
                        } else {
                            neededElement.addClass('up');
                        }

                        setTimeout(function() {
                            neededElement.removeClass('up');
                            neededElement.removeClass('down');
                        }, 100);

                        _self.activeElement = neededElement;
                    }
                } else {
                    if(!!_self.activeElement) {
                        ae = _self.activeElement
                        ae.addClass('up');

                        (function() {
                            var _ae = ae;

                            if($(this).data('indexPosition') > _self.activePointer.data('indexPosition')) {
                                ae.addClass('up');
                            } else {
                                ae.addClass('down');
                            }

                            setTimeout(function() {
                                _ae.css({display: "none"});
                                _ae.removeClass('up');
                                _ae.removeClass('down');
                            }, 300)
                        })();

                        _self.activeElement = null;
                    }
                }

                if(!!_self.activePointer) {
                    _self.activePointer.removeClass('active');
                }

                _self.activePointer = $(this);
            });
        });
    });

    return this;
}

var header = new Navigation();
header.__proto__ = module;