$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Backend Developer", "Devops Engineer", "Cloud Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Backend Developer", "Devops Engineer", "Cloud Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
ScrollReveal({
    reset: true,
    duration: 1000,
    delay:100,
    distance: '60px',
});
$('.dark-btn').click(function(){
    $('body').toggleClass('dark-mode');
    if($('body').hasClass('dark-mode')){
        $('.dark-btn i').attr('class','fa-regular fa-sun');
    }
    else{
        $('.dark-btn i').attr('class','fa-regular fa-moon');
    }
});
ScrollReveal().reveal('.home-content',{origin:'left'});
ScrollReveal().reveal('.sci',{origin:'bottom'});
ScrollReveal().reveal('.title',{origin:'bottom'});
ScrollReveal().reveal('.left',{origin:'left'});
ScrollReveal().reveal('.right',{origin:'right'});
ScrollReveal().reveal('.serv-content',{origin:'bottom'});
ScrollReveal().reveal('.webdev',{origin:'right'});
/* send message */
function sendMail(){
        var templateParams = {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            from_subject: document.getElementById("Subject").value,
            from_message: document.getElementById("message").value,
        };
        var service_id = "service_g1qv1ob";
        var template_id = "template_uaaeqfc";

        emailjs.send(service_id, template_id, templateParams)
            .then( (res) => {
                console.log(res);
                alert("Message sent successfully");
            })
            .cathch( (err) => {
                console.log(err);
                alert("Error sending message");
            });
}


