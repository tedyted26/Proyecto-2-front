/**
 * Modelo que representa los integrantes del equipo, cargando los datos en
 * {@link TarjetaIntegranteComponent}
 */
export class IntegranteModel {
    /**@ignore */
    public foto: String;
    /**@ignore */
    public nombre: String;
    /**@ignore */
    public rol: String;
    /**@ignore */
    public motivacion: String;

    /**
     * Constructor
     * @param foto 
     * @param nombre 
     * @param rol 
     * @param motivacion 
     */
    constructor(foto: String, nombre: String, rol: String, motivacion: String){
        this.foto = foto;
        this.nombre = nombre;
        this.rol = rol;
        this.motivacion = motivacion;
    }
}
