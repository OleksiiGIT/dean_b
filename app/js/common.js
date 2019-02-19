$(function() {

    // MOBILE FOOTER SETTINGS

    $(".footerFirstWrapperTitle").click(function(e){
        e.preventDefault();
        $(this).siblings(".footerFirstWrapperDesc").toggleClass("activeFooter");
        $(this).toggleClass("activeFooter");
    });

    // LIST WITH LANGUAGES OPEN AND CLOSE WHEN YOU CLICK ON LINK

    $(".selectLangId").click(function(e){
        e.preventDefault();
        $(this).children(".listLanguages").toggle();
    });
    $(".selectLangId").children("a").click(function(e){
        e.preventDefault();
        $(this).children(".listLanguages").hide();
    });

    // OPEN SIMPLE MENU

    function menuOpen(menu){
        $(".overlayBackground").show();
        $(".menus").css("right", "0");
        $(menu).addClass("flexible");
    }

    $(".headerMenu").click(function(e){
        e.preventDefault();
        menuOpen(".mainMenu");
    });
    $(".headerFavorite").click(function(e){
        e.preventDefault();
        menuOpen(".menuFavorites");
    });
    $(".headerBasket").click(function(e){
        e.preventDefault();
        menuOpen(".menuBasket");
    });


    // CLOSE MENUS BUTTON
    // ADD NEW MENU

    function menuClose(menu){
        var size = $(window).width();
        if (size < 767) {
            size = "-100%";
        }else{
            size = "-310px";
        }
        $(".menus").css("right", size);
        $(".overlayBackground").hide();
        $(menu).removeClass("flexible");
    }

    $(".closeBtnId").click(function(e){
        e.preventDefault();
        menuClose(".mainMenu");
        menuClose(".menuFavorites");
        menuClose(".menuBasket");

        // ADD NEW MENU THERE

    });

    /* RESIZE SETTING START */

    $(window).resize(function(){
        if ($(window).width() < 767) {
            menuClose(".mainMenu");
            menuClose(".menuFavorites");
            menuClose(".menuBasket");
        }
    });

});