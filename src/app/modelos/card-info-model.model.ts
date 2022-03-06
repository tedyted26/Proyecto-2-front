export class CardInfoModel {
    public url: String;
    public titulo: String;
    public texto: String;

    constructor(url: String, titulo: String, texto: String){
        this.url = url;
        this.titulo = titulo;
        this.texto = texto;
    }
}
