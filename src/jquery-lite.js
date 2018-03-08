/*
*  一个轻量级的jQuery库
*  @author chaoshuai
*  @date 2018/3/8
* */
(function () {

    function jquery() {
        this.name = 'chaoshuai';
    }

    window.$ = window.jquery = jquery;
}());