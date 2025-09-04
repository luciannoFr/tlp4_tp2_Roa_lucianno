import equipos from "./Equipos";
import type Observer from "./Observer";

class Desktop extends equipos {
    ram?: string;
    procesador?: string;
    sistema_operativo?: string;
    perifericos?: string[];
    constructor(nombre: string, tipo: string, estado: string, soporte: Observer, ram?: string, procesador?: string, sistema_operativo?: string, perifericos?: string[]) {
        super(nombre, tipo, estado, soporte);
        this.ram = ram;
        this.procesador = procesador;
        this.sistema_operativo = sistema_operativo;
        this.perifericos = perifericos;
    }

    detalles(): string {
        return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}, Sistema Operativo: ${this.sistema_operativo}, Perifericos: ${this.perifericos}`;
    }
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    notificarObservadores(): void {
        this.soporte.actualizar(this);
    }
}

export default Desktop;
