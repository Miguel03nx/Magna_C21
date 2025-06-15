import { src, dest, watch, series } from 'gulp' // esto ayuda a conectar gulp con sass 
import * as dartSass from 'sass' // dart es donde esta hecho sass
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass) // y esto lo termina de conectar 

export function js( done ){

    src('src/js/**/*.js') // esto toma el archivo y lo lleva al build js
        .pipe( dest('build/js') )  
    done()

    // si llega a ver algun error al compilar Js los codigos de abajo funcionan bien 
    // src('src/js/app.js') // esto toma el archivo y lo lleva al build js
    //     .pipe( dest('build/js') )  
    // done()
    // src('src/js/botones.js') // esto toma el archivo y lo lleva al build js
    //     .pipe( dest('build/js') )  
    // done()
}

export function css(done){
    src('src/scss/app.scss') // esto ubica el archivo de src 
        .pipe( sass().on('error', sass.logError) ) // el pipe ayuda a compilar sass despues de haberlo ubicado, y el .on sirve para que en la terminal aparazca si hay algun error 
        .pipe( dest('build/css') ) // aqui compila donde se almacenan los cambios de estilos que se hacen en sass 
        // practicamente los 2 pipes es lo mismo que el scrip que esta en package.json
    done() // el done es para que diga donde termina la funcion despues de mandarla llamar 
}

export function dev(){ // en esta funcion no ponemos done porque no queremos que finalice la funcion, queremos que este constatemente viendo los cambios 
    //  /**/*.scss esto significa todas las carpetas y todos los archivos que terminen en .scss
    watch('src/scss/**/*.scss', css) // que archivos quieres estar observando y que funcion es la que se va a ejecutar 
    // entonces una vez que se mande llamar la funcion de dev va a estar observando los cambios de src/scss.... y cuando haya cambios se ejecuta la funcion de css
    watch('src/js/**/*.js', js) // esto va a hacer que compile el archivo de js asi como el de css y se vean reflejados los cambios en el build js 
}

export default series( js, css, dev) // lo que hace esta funcion es mandar llamar Js despues css y por ultimo dev 