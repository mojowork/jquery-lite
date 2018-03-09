/*
*  一个轻量级的jQuery库
*  @author chaoshuai
*  @date 2018/3/8
* */
(function (window) {

    function jquery () {
       return new init();
    }

    // 真实的构造函数
    const init = function () {
        this.name = 'chaoshuai';
    };

    init.prototype = jquery.prototype;

    window.$ = window.jquery = jquery;
}(window));