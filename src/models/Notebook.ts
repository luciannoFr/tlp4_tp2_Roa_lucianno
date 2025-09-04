import equipos from "./Equipos";

class Notebook extends equipos {
    ram?: string;
    procesador?: string;
    sistema_operativo?: string;
    
    constructor(nombre: string, tipo: string, estado: string, ram?: string, procesador?: string, sistema_operativo?: string) {
        super(nombre, tipo, estado);
        this.ram = ram;
        this.procesador = procesador;
        this.sistema_operativo = sistema_operativo;
    }
    

    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}, Sistema Operativo: ${this.sistema_operativo}`;
    }
}

export default Notebook;
