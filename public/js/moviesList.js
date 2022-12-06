window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    
    
    // let modo = confirm('Desea modo oscuro');
    // if(modo){
    //     body.style.backgroundColor = '#7f7f7f'
    //     body.classList.add('fondoMoviesList');
    // }
    let logo = document.querySelector('.logoDH');

    // se agrega la clase en el EJS
    logo.addEventListener('mouseover', function(){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
        moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
        moviesListTitulo.style.color ='white';
        moviesListTitulo.style.backgroundColor = 'teal';
        moviesListTitulo.style.padding = '20px';
    })
    
    // console.log(body);
    // moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    // moviesListTitulo.style.color ='white';
    // moviesListTitulo.style.backgroundColor = 'teal';
    // moviesListTitulo.style.padding = '20px';

}
