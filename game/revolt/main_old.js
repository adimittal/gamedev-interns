(function (main, $, undefined) {
    // guard to detect browser-specific issues early in development
    "use strict";
    // private var
    var _settings;

    // public var
    main.canvasWidth = 100;
    main.canvasHeight = 100;

    // public method
    main.init = function (settings) {
        _settings = $.extend({}, settings);
    }

    main.sayHello = function () {
        document.write("<div id='hi'>Hello from Mil!</div>");
        $(document).ready(function () {
            main.draw();
        });
    }

    main.draw = function () {
        var c = $("#mycanvas")[0];
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 150);
        ctx.stroke();
    }
}(window.main = window.main || {}, jQuery));