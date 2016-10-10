
$(function(){
    var $btnSideContent = $('.btn-side-content');
    var $sideContent = $('.side-content');
    var $btnSideContentClose = $('.btn-side-content-close');
    $btnSideContent.on('click',function(){
        $sideContent.addClass('on');
    });
    $btnSideContentClose.on('click',function(){
        $sideContent.removeClass('on');
    });
});