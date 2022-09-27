import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Cards from './components/Card';
import Footer from './components/Footer';


function App() {
  return ( 
    <div className='container'>
      <div class="row p-3 justify-content-center" className='head'>
        <Header/>
      </div>
      <div class="row p-3 justify-content-center">
        <Cards src="https://pics.freeartbackgrounds.com/midle/Forest_Sunlight_Background-954.jpg" title="Komorebi - Japonés" description="La luz del sol que se filtra a través de las hojas de un árbol." />
        <Cards src="https://media.istockphoto.com/photos/silhouette-of-a-telescope-at-the-starry-night-and-bright-milky-way-picture-id1166201630?k=20&m=1166201630&s=612x612&w=0&h=2c0Juu25abngK8CVsiHiEur2H486lkUnbhGWTj9XOxY=" title="Serendipia - Inglés" description="Hallazgo afortunado e inesperado que se produce cuando estás buscando otra cosa."/>
        <Cards src="https://images2.alphacoders.com/118/thumbbig-1181186.webp" title="Unkai - Japonés" description="El maravilloso mar de nubes que puedes observar desde la cima de una montaña."/>
        <Cards src="https://dam.ngenespanol.com/wp-content/uploads/2019/09/ciudad-de-Yellowknife-add-.jpg" title="Kairos - Griego" description="Los momentos cruciales, delicadamente perfectos; la fugaz oportunidad de tiempo y lugar que crea la atmósfera oportuna para la acción, las palabras o el movimiento."/>
        <Cards src="https://wallpaperaccess.com/full/1686768.jpg" title="Metanoia - Griego" description="El viaje que cambia la forma de pensar, de sentir, de ser o de vivir de una persona."/>
        <Cards src="https://www.peruhop.com/wp-content/uploads/salar-de-uyuni-featured-1.jpg" title="Sempiterno - Latín" description="Que durará siempre; que habiendo tenido principio, nunca tendrá fin."/>
        <Cards src="https://wallpaperaccess.com/full/5368940.jpg" title="Sisu - Finlandés" description="Extraordinaria determinación, coraje y resolución ante la extrema adversidad."/>
        <Cards src="https://img.freepik.com/free-photo/woman-sunset-lavender-field-with-purple-flowers-brihuega-guadalajara-spain_242111-20467.jpg?w=740&t=st=1662930904~exp=1662931504~hmac=eec6ea8550b9e45642753f5f29b673df52c892f8e7aa3f613907fbf780e61e65" title="Ikigai - Japonés" description="Tu razón de ser, el gran motivo por el que te levantas cada mañana."/>
        <Cards src="https://www.wallpaperflare.com/static/745/220/53/man-pier-lonely-mountains-wallpaper.jpg" title="Ataraxia - Griego" description="Tranquilidad y serenidad, imperturbable ante cualquier deseo o miedo."/>
      </div>
      <div class="row p-3 justify-content-center">
        <div class="foot">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;