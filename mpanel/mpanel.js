	(function($){
    var methods = {
    	buttons:0,
        init : function(options) { 

            var mpTemplate='<div class="mp__panel"><div class="mp__wr"><button class="mp__button mp__button-main"><span class="mp__line"></span></button></div></div><div class="mp__overlay"></div>';
            $('body').append(mpTemplate);

            if(options.navbar){
                $(options.navbar).addClass('mp__nav-panel mp__nav-panel_main');
            	$('.mp__button-main').on('click', function(){
                   // $('.mp__nav-panel').not('.mp__nav-panel_main').removeClass('mp--on');
                  //  $('.mp__panel .mp__button').not(this).removeClass('mp--on');
            		$(this).toggleClass('mp--on');
            		$(options.navbar).toggleClass('mp--on');
            		$(".mp__overlay").toggleClass('mp--on');
            		return false;
            	});


            }

            $(".mp__overlay").click( function() {
		      $(this).removeClass('mp--on');
		      $('.mp__button').removeClass('mp--on');
		      $(options.navbar).removeClass('mp--on');
		      return false;
		    });
        },
        show : function( ) {
        	$('.mp__panel').show();
        },
        hide : function( ) {
        	$('.mp__panel').hide();
        },
        button : function(options) {

            methods.buttons++;


            var $button=$('<button class="mp__button mp__button-text '+
            'mp__button-'+methods.buttons+
            (options.center?' mp__button-text--center':'')+
            '">'+options.text+'</button>');

            $('.mp__wr').append($button);	
/*
            $('.mp__wr').append('<button class="mp__button mp__button-text '+
            	'mp__button-'+methods.buttons+
            	(options.center?' mp__button-text--center':'')+
            	'">'+options.text+'</button>');
*/

            if(options.navbar){
                $(options.navbar).addClass('mp__nav-panel mp__nav-panel_second mp__nav-panel_second-'+methods.buttons);
            	$('.mp__button-'+methods.buttons).on('click', function(){
                  //  $('.mp__nav-panel, .mp__panel .mp__button').removeClass('mp--on');
            		$(this).toggleClass('mp--on');
            		$(options.navbar).toggleClass('mp--on');
            		$(".mp__overlay").toggleClass('mp--on');
            		return false;
            	});


            }

            $(".mp__overlay").click( function() {
		      $(options.navbar).removeClass('mp--on');
		      return false;
            });
            
            return $button;
        },

        notification:function(options){
			if($('.mp__notification', options.button).length){
				$('.mp__notification', options.button).html(options.value);
			} else {
				options.button.append('<div class="mp__notification">'+options.value+'</div>');
			}
		}
    };

    $.mobilePanel = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || ! method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Метод с именем ' +  method + ' не существует' );
        } 
    };
})(jQuery);