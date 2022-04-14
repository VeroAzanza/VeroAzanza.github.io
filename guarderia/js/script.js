$(document).ready(function(){

    const typed = new Typed('.typed',{
        strings: [
            '<i class="palabras">nuestro espacio!</i>',
            '<i class="palabras">nuestro mundo!</i>',
            '<i class="palabras">nuestra casa!</i>'
        ],
        typeSpeed: 75,
        startDelay: 300,
        backSpeed: 75,
        smartBackspace: true,
        shuffle: false,
        backDelay: 1500,
        loop: true,
        loopCount: false,
        contentType: 'html'
    })

    $(window).scroll(function() { 
        if($('#menu').offset().top > 60) {
            $('#menu').css('background', 'white')
            $('#menu').css('opacity', 0.7)
            $('.ir-arriba').css('display', 'inline-block')
        }
        else {
            $('#menu').css('background', 'transparent')
            $('.ir-arriba').css('display', 'none')
        }
    })

    $('.ir-arriba').click(function(){
		$("html, body").animate({scrollTop: 0},'300');
	});

    let abrirPregunta = (id) => {
        id.click(function(){
            if($(id).hasClass('active')) {
                $(id).removeClass('active')
            }
            else {
                $(id).addClass('active')
            }
        })
    }

    abrirPregunta($('#item-1'))
    abrirPregunta($('#item-2'))
    abrirPregunta($('#item-3'))
    abrirPregunta($('#item-4'))

});

//mostrar slide de imagenes

/* let animales = document.querySelectorAll('.slide-animal img')
let img1 = animales[0]
let img2 = animales[1]
let img3 = animales[2]
setInterval( () => {
    if(img1.style.display == 'initial') {
        img1.style.display = 'none'
        img2.style.display = 'initial'
    }
    else if(img2.style.display == 'initial') {
        img2.style.display = 'none'
        img3.style.display = 'initial'
    }
    else {
        img3.style.display = 'none'
        img1.style.display = 'initial'
    }
},3000)  */