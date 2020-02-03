$(document).ready(function(){
    $("img").click(function(){
        var newSource = $(this).attr('data-alt-src');
        console.log('data-alt-src value is', newSource);
        $(this).attr("src",newSource);
    });
});
