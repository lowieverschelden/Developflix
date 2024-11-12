import peliculas from './peliculas.js'

console.log(peliculas);

const accioncontainer = document.getElementById('genero-28');
const thrillercontainer = document.getElementById('genero-53');
const aventuracontainer = document.getElementById('genero-12');


console.log(accioncontainer);

let accionmovies = peliculas.filter((pelicula) => pelicula.genre_ids.includes(28));
let thrillermovies = peliculas.filter((pelicula) => pelicula.genre_ids.includes(53));
let aventuramovies = peliculas.filter((pelicula) => pelicula.genre_ids.includes(12));

console.log(accionmovies);

accionmovies.forEach((item) => {
        let div = document.createElement('div');
        div.id = 'accion-'+ item.original_title;
        div.innerHTML = `<ul>
                            <li><img src ="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.original_title}"</li>
                            <li><h3 class=pelicula-titulo>${item.original_title}</h3></li>
                        </ul>`;
        accioncontainer.appendChild(div);
    }
);

thrillermovies.forEach((item) => {
    let div = document.createElement('div');
    div.id = 'accion-'+ item.original_title;
    div.innerHTML = `<ul>
                        <li><img src ="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.original_title}"</li>
                        <li><h3 class=pelicula-titulo>${item.original_title}</h3></li>
                    </ul>`;
    thrillercontainer.appendChild(div);
}
);

aventuramovies.forEach((item) => {
    let div = document.createElement('div');
    div.id = 'accion-'+ item.original_title;
    div.innerHTML = `<ul>
                        <li><img src ="https://image.tmdb.org/t/p/w200${item.poster_path}" alt="${item.original_title}"</li>
                        <li><h3 class=pelicula-titulo>${item.original_title}</h3></li>
                    </ul>`;
    aventuracontainer.appendChild(div);
}
);


