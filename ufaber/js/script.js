$(document).ready(function(){    
    $('.badge-carousel .owl-carousel').owlCarousel({
        loop:false,
        margin:25,
        dots:false,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		smartSpeed: 500,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false,
                margin:20
            },
            500:{
                items:1,
                dots:true,
                nav:false,
                margin:20,	
            },
            800:{
                items:2,
                dots:true,
                nav:false
            },
            1000:{
                items:3
            }
        }
    });     
    $('.skill-carousel .owl-carousel').owlCarousel({
        loop:false,
        margin:25,
        dots:false,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
		smartSpeed: 500,
        responsive:{
            0:{
                items:1,
                dots:true,
                nav:false,
                margin:20
            },
            500:{
                items:2,
                dots:true,
                nav:false,
                margin:20,
            },
            800:{
                items:3,
                nav:false,
                dots:true                
            },
            1000:{
                items:4
            }
        }
    });     
    $('.created-carousel .owl-carousel').owlCarousel({
        loop:true,
        center: true,
        margin:0,
        nav:true,
        navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
        dots:false,
		smartSpeed: 500,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            993:{
                items:5
            }
        }
    });     
    $('.assign-carousel .owl-carousel').owlCarousel({
        loop:false,
        margin:25,
        dots:false,
		smartSpeed: 500,
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:20
            },
            500:{
                items:1,
                dots:true,
                margin:20,	
                stagePadding: 40,
            },
            800:{
                items:2,
                dots:true
            },
            1000:{
                items:3
            }
        }
    });   
    $('.step-carousel .owl-carousel').owlCarousel({
        loop:false,
        margin:20,
        dots:false,
		smartSpeed: 500,
        responsive:{
            0:{
                items:1,
                dots:true,
                margin:10,	
                stagePadding: 40,
            },
            500:{
                items:2,
                dots:true,
                margin:10,	
                stagePadding: 40,
            },
            800:{
                items:3,
                dots:true,
                stagePadding: 40,
            },
            1000:{
                items:4
            }
        }
    });
});