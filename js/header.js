/**
 * Created by Dmitry Burlakov (dantaeusb) on 30/09/15.
 * Copyright Dmitry Burlakov. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

function Header(width, height) {
    var imgsize = [];
    var width = width;
    var height = height;

    if ( arguments.callee._singletonInstance )
        return arguments.callee._singletonInstance;
    arguments.callee._singletonInstance = this;

    this.scroll = function(h) {
        var p = h / (height - 57);

        if(p < 1) {
            $("#main-header-nav-bg").css({
                "background-size": width + "px auto",
                "background-position": "50% " + (-h) + "px"
            });

            if(p > .8) {
                $("#main-header-nav-bg").css({
                    opacity: (1 - ((p - .8) * 5)) *.8
                });
                $("#main-header-landing .gradient").css({
                    opacity: ((p - .8) * 5)
                });
            } else {
                $("#main-header-nav-bg").css({
                    opacity: .8
                });
                $("#main-header-landing .gradient").css({
                    opacity: 0
                });
            }
        } else {
            $("#main-header-nav-bg").css({
                opacity: 0
            });
            $("#main-header-landing .gradient").css({
                opacity: 1
            });
        }

        /*$("#main-header").css({
            "background-size": width + "px auto",
            "background-position": "50% " + p + "px"
        });*/
    }
}

$(document).ready(function() {
    var d = {w: $(window).width(), h: $(window).height()};
    var header = new Header(d.w, d.h);

    $(window).scroll(function(e) {
        header.scroll($(window).scrollTop());
    });
});