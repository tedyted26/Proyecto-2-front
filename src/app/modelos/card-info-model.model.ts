/**
 * Modelo de información para {@link DescriptionCardComponent}
 */
export class CardInfoModel {
    /**
     * Url de la imagen de la tarjeta
     */
    public url: String;
    /**
     * Titulo de la tarjeta
     */
    public titulo: String;
    /**
     * Texto de la tarjeta
     */
    public texto: String;

    /**
     * Constructor
     * @param url 
     * @param titulo 
     * @param texto 
     */
    constructor(url: String, titulo: String, texto: String){
        this.url = url;
        this.titulo = titulo;
        this.texto = texto;
    }
}
