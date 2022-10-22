const button = document.querySelector('.conteudo-principal-escrito-botao')

button.addEventListener('click', () =>{
    $('html,body').animate({
        scrollTop: $(".portfolio-rolamento").offset().top},
        'slow');
});