const button = document.querySelector('.conteudo-principal-escrito-botao')

button.addEventListener('click', () =>{
    $('html,body').animate({
        scrollTop: $(".portfolio-rolamento").offset().top},
        'slow');});

//ScrollReveal
window.sr = ScrollReveal ({reset: true});
sr.reveal('.conteudo-principal-escrito-titulo', {duration:1000});
sr.reveal('.conteudo-principal-escrito-subtitulo', {duration:2000});
sr.reveal('.conteudo-principal-escrito-botao', {duration:3000});
sr.reveal('.portfolio-title', {duration:2000});
sr.reveal('.imagem-cards', {duration:3000});
