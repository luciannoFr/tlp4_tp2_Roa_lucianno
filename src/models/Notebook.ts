import equipos from "./Equipos";
import type Observer from "./Observer";

class Notebook extends equipos {
    ram?: string;
    procesador?: string;
    sistema_operativo?: string;
    
    constructor(nombre: string, tipo: string, estado: string, soporte: Observer, ram?: string, procesador?: string, sistema_operativo?: string) {
        super(nombre, tipo, estado, soporte);
        this.ram = ram;
        this.procesador = procesador;
        this.sistema_operativo = sistema_operativo;
    }
    

    detalles(): string {
        return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}, Sistema Operativo: ${this.sistema_operativo}`;
    }
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    notificarObservadores(): void {
        this.soporte.actualizar(this);
    }
}

export default Notebook;
