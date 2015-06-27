jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
    });
});

$(document).click(function() {
    $(".collapse").removeClass("in");
});


        $('.subject').selectize({
    	create: true,
    	sortField: 'text'
		});


  $('[data-toggle="tooltip"]').tooltip();
