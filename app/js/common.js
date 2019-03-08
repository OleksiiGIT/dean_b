$(function() {

    $(".mainMenu").css("height", window.innerHeight + "px");

    $(window).scroll(function(e) {
        if ($(window).width() < 767 && $(this).scrollTop() > 0){
            $("header").addClass("scrollableHeader");
        } else {
            $("header").removeClass("scrollableHeader");
        }
        if ($(window).width() > 767) {
            if ($(this).scrollTop() > 84) {
                $(".headerCollectionMenu").addClass("fixedTopMenu");
                $(".headerCollection").css("padding-top", "133px")
            } else {
                $(".headerCollectionMenu").removeClass("fixedTopMenu");
                $(".headerCollection").css("padding-top", "78px")
            }
        } else {
            if ($(this).scrollTop() > 0) {
                $(".headerCollectionMenu").addClass("fixedTopMenu");
                $(".headerCollection").css("padding-top", "133px")
            } else {
                $(".headerCollectionMenu").removeClass("fixedTopMenu");
                $(".headerCollection").css("padding-top", "78px")
            }
        }
    });

    // MOBILE FOOTER SETTINGS

    $(".footerFirstWrapperTitle").click(function(e){
        e.preventDefault();
        $(this).siblings(".footerFirstWrapperDesc").toggleClass("activeFooter");
        $(this).toggleClass("activeFooter");
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
            size = "-400px";
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

    $(window).resize(function(){
        slidersMob();
    });

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

    // Owl sliders are here

    $(".quickViewSliderId").owlCarousel({
        items: 1,
        thumbs: true,
        thumbsPrerendered: true,
        stagePadding: 0,
        margin: 20,
        center: true
    });

    function slidersMob() {
        if ($(window).width() < 1024) {
            $(".supportMenuId").owlCarousel({
                stagePadding: 0,
                items: 1,
                loop: false,
                center: false,
                margin: 20,
                dots: false,
                autoWidth: true
            });
        } else {
            $(".supportMenuId").trigger("destroy.owl.carousel");
        }
        if ($(window).width() < 767){
            $(".menuSlide").owlCarousel({
                stagePadding: 0,
                items: 1,
                loop: false,
                center: false,
                dots: false,
                autoWidth: true
            });
        } else {
            $(".menuSlide").trigger("destroy.owl.carousel");
        }
    }

    slidersMob();

    // ADD MATCHING PRODUCTS SLIDER

    $(".addMatchId").one("click", function() {

        var $this = $(this);

        // Start ajax
        // Code below add to success ajax request

        $this.parents(".productInCart").children(".matchingStrapWrapper").append(
        "<div class='matchingStrapSlider owl-carousel matchingStrapSliderId'>"+
            "<div class='matchingItem'>"+
                "<div class='matchingItemImg'>"+
                    "<img src='img/prod.png' alt='dean_b'>"+
                "</div>"+
                "<div class='matchingItemDesc'>"+
                    "<div class='closeBtn closeMatchingBtn'></div>"+
                    "<h5>$49.00</h5>"+
                    "<ul><li>Mysterieux</li><li>36mm</li><li>Rose gold</li></ul>"+
                    "<p>Genuine leather strap</p>"+
                "</div>"+
            "</div>"+
            "<div class='matchingItem'>"+
                "<div class='matchingItemImg'>"+
                    "<img src='img/prod.png' alt='dean_b'>"+
                "</div>"+
                "<div class='matchingItemDesc'>"+
                    "<div class='closeBtn closeMatchingBtn'></div>"+
                    "<h5>$48.00</h5>"+
                    "<ul><li>Mysterieux</li><li>36mm</li><li>Rose gold</li></ul>"+
                    "<p>Genuine leather strap</p>"+
                "</div>"+
            "</div>"+
        "</div>"
        );

        $this.addClass("invertion");
        $this.removeClass("addMatchId");

        $this.on("click", function () {
            var current = $this.parents(".productInCart").children(".matchingStrapWrapper").children(".matchingStrapSliderId").children(".owl-stage-outer").children(".owl-stage").children(".active").html();
            $this.parents(".productInCart").children(".matchingStrapWrapper").append(current);
            $this.parents(".productInCart").children(".matchingStrapWrapper").children(".matchingItem").addClass("finallyAddedCase");
            $this.parents(".productInCart").children(".matchingStrapWrapper").children(".matchingStrapSliderId").remove();
            $this.hide();
            $this.removeClass("invertion");
            $this.addClass("addMatchId");
        });

        $this.parents(".productInCart").children(".matchingStrapWrapper").children(".matchingStrapSliderId").owlCarousel({
            items: 1,
            loop: false,
            dots: false,
            nav: true
        });

    });

});
