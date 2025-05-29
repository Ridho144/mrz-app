export default function ArtikelDetail({children}){
    return(
        <div>
            <h1>Artikel Komputer</h1>
            <br/>
                {children}
            <br/>
            <footer>
            </footer>
            <Judul/>
            <Gambar/>
            <Isi/>
            <Kesimpulan/>
        </div>
    )
}

function Judul(){
    return(
        <h2>Pengertian Komputer</h2>
    )
}

function Gambar(){
    return(
    <img src="img/Komputer.jpeg" alt="Komputer" />
    )
}

function Isi(){
    return(
        <p>Komputer (computer) diambil dari computare (bhs latin) yang berarti menghitung 
            (to compute atau to reckon). Kata computer semula dipergunakan untuk menggambarkan 
            orang yang perkerjaannya melakukan perhitungan aritmatika, dengan atau tanpa alat bantu, 
            tetapi arti kata ini kemudian dipindahkan kepada mesin itu sendiri.
        </p>
    )
}

function Kesimpulan(){
    return(
        <h3>Jadi Komputer.........</h3>
    )
}