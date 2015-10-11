/**
 * Created by Dmitry Burlakov (dantaeusb) on 08/10/15.
 * Copyright Dmitry Burlakov. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

function Module() {
    var _self = this;

    this.dim = {
        width: null,
        height: null
    };

    this.resize = function(w, h) {
        this.dim.width = w;
        this.dim.height = h;
    };

    document.addEventListener("DOMContentLoaded", function(e) {
        _self.resize($(window).width(), $(window).height());

        window.addEventListener('resize', function(e) {
            _self.resize($(window).width(), $(window).height());
        });
    });

    return this;
}

var module = new Module();