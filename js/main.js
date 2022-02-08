$(document).ready(function(){
    //intitial
    $('#content').load('content/index.html');

    //handle menu clicks
    $('header nav ul li a').click(function(){
        var page = $(this).attr('href');
        $('#content').load('content/' + page + '.html');
        return false
    })
});
