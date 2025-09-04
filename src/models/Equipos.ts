class equipos{
    nombre: string;
    tipo: string;
    estado: string;
    constructor(nombre: string, tipo: string, estado: string){
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
    }
    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Estado: ${this.estado} ${this.detalles()}`;
    }
}
export default equipos;
