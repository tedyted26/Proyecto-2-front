/**
 * Modelo con información de las noticias, el cual se carga en {@link NoticiaCardComponent}
 */
export class CardNoticiaModel {
    /**@ignore */
    public id: String;
    /**@ignore */
    public url: String;
    /**@ignore */
    public titulo: String;
    /**@ignore */
    public subtitulo: String;
    /**@ignore */
    public fecha_noticia: String;
    /**@ignore */
    public id_busqueda: String;
    
    /**
     * 
     * @param id id en la BBDD de la noticia
     * @param url 
     * @param titulo 
     * @param subtitulo 
     * @param fecha_noticia 
     * @param id_busqueda id en la BBDD de la busqueda
     */
    constructor(id: String, url: String, titulo: String, subtitulo: String, fecha_noticia: String, id_busqueda: String){
        this.id = id;
        this.url = url;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.fecha_noticia = fecha_noticia;
        this.id_busqueda = id_busqueda;
    }
}
