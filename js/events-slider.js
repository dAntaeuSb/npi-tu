/**
 * Created by Dmitry Burlakov (dantaeusb) on 15/11/15.
 * Copyright Dmitry Burlakov. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */

$(document).ready(function(e) {
    var swiper = new Swiper('#main-events .events-block', {
        centeredSlides: true,
        spaceBetween: 0,
        nextButton: '#main-events .button-next',
        prevButton: '#main-events .button-prev'
    });
});
