$(function() {

    $(".mainMenu").css("height", window.innerHeight + "px");

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
        $(".overlayBackgroundLight").show();
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

    $(".headerBasketMobileInsideMenu").click(function(e) {
        e.preventDefault();
        menuClose(".mainMenu");
        menuOpen(".menuBasket");
    });

    $(".headerFavoriteMobileInsideMenu").click(function(e) {
        e.preventDefault();
        menuClose(".mainMenu");
        menuOpen(".menuFavorites");
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

    $(".closeBtnLogin").click(function(){
        $(".loginWindow").removeClass("flexible");
    });

    $(".overlayBackgroundLight").click(function () {
        menuClose(".mainMenu");
        menuClose(".menuFavorites");
        menuClose(".menuBasket");
    });

    /* RESIZE SETTING START */

    // $(window).resize(function(){
    //     if ($(window).width() < 767) {
    //         menuClose(".mainMenu");
    //         menuClose(".menuFavorites");
    //         menuClose(".menuBasket");
    //     }
    // });

    /* RESIZE SETTING END */

    $(".loginPopup").click(function(e){
        e.preventDefault();
        menuClose(".mainMenu");
        $(".loginWindow").addClass("flexible");
        $(".overlayBackgroundDark").show();
    });

    function isSubscribe() {
        if (!window.localStorage.getItem("isSubscribe")) {
            $(".subscribePopup").show();
            if ($(window).width() < 767) {
                $(".overlayBackgroundDarkSubscribe").show();
            }
        }
    }

    var timeout = window.setTimeout(isSubscribe, 1000);

    $(".closeBtnSubscribe").click(function(){
        $(".subscribePopup").hide();
        $(".overlayBackgroundDarkSubscribe").hide();
        window.clearTimeout(timeout);
        window.localStorage.setItem("isSubscribe", "true");
    });

    $(".formSubscribe").submit(function(e){
        e.preventDefault();
        if ($(this).children("input").val() !== "") {
            $(".subscribePopupWrapper").hide();
            $(".subscribePopupThankYou").show();
            window.localStorage.setItem("isSubscribe", "true");
            $(".closeBtnSubscribe").css("top", "13px");
        }else {
            $(this).children("input[type='email']").css("border", "1px solid red");
        }
    });

    $(".cancelSubId").click(function(e){
        e.preventDefault();
        $(".cancelSubscribeWrapper").empty();
        $('.cancelSubscribeWrapper').append("<h3>Your newsletter subscription\n" +
            "has been canceled.</h3>");
    });

    $("#contactOpen").click(function(e){
        e.preventDefault();
        if ($(window).width() > 767) {
            $(".loginPopup").toggle();
            $(".contactMain").toggleClass("opacityActive");
        } else {
            $(".mainMenuHeaderMobile").toggle();
            $(".linksList").toggle();
            $(".loginPopup").toggle();
            $(".contactMain").toggleClass("opacityActive");
            $(".contactMain").toggleClass("flexible");
            $(".mainMenu").css("background", "white");
        }
    });

    $(".closeContactBtn").click(function(){
        closeAfterContact();
    });

    function closeAfterContact(){
        $(".mainMenuHeaderMobile").show();
        $(".linksList").show();
        $(".loginPopup").show();
        $(".contactMain").toggleClass("opacityActive");
        $(".contactMain").toggleClass("flexible");
        $(".mainMenu").css("background", "");
    }

    $(window).scroll(function(){
       $(".mainMenu").css("height", window.innerHeight + "px");
    });

});