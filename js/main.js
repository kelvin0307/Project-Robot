$(document).ready(function(){
    //intitial
    $('#mainContent').load('content/index.html');

    //handle menu clicks
    $('header nav ul li a').click(function(){
        var page = $(this).attr('href');
        $('#mainContent').load('content/' + page + '.html');
        return false
    })
});
