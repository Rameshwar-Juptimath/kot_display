$(document).ready(function(){

    $('.layout-table-list .item-table').click(function(){
        if($(this).hasClass('table-opened')){
            return false;
        }
        else{
            $('.item-table').removeClass('table-opened');
            $(this).addClass('table-opened');
            $('.sidebar').addClass('show');
        }
    });

    $('.sidebar-close').click(function(){
        $('.item-table').removeClass('table-opened');
        $('.sidebar').removeClass('show');
    });

    $('.add-new').click(function(){
        $('.sidebar').addClass('fixed-left');
        $('.add-more-items').addClass('show');
    });

    $('.addItem-close').click(function(){
        $('.sidebar').removeClass('fixed-left');
        $('.add-more-items').removeClass('show');
    });


});

