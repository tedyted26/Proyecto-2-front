export class CardNoticiaModel {
    public id: String;
    public url: String;
    public titulo: String;
    public subtitulo: String;
    public fecha_noticia: String;
    public id_busqueda: String;
    

    constructor(id: String, url: String, titulo: String, subtitulo: String, fecha_noticia: String, id_busqueda: String){
        this.id = id;
        this.url = url;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.fecha_noticia = fecha_noticia;
        this.id_busqueda = id_busqueda;
    }
}
