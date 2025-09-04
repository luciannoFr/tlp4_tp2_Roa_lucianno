import equipos from "./Equipos";
import type Observer from "./Observer";

class Servidor extends equipos {
    uso_especifico?: string;
    capacidad?: string;
    tipo_disco?: string;

    constructor(nombre: string, tipo: string, estado: string, soporte: Observer, uso_especifico?: string, capacidad?: string, tipo_disco?: string) {
        super(nombre, tipo, estado, soporte);
        this.uso_especifico = uso_especifico;
        this.capacidad = capacidad;
        this.tipo_disco = tipo_disco;
    }

    detalles(): string {
        return `Tipo: Servidor, Nombre: ${this.nombre}, Uso Especifico: ${this.uso_especifico}, Capacidad: ${this.capacidad}, Tipo de Disco: ${this.tipo_disco}`;
    }
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
    notificarObservadores(): void {
        this.soporte.actualizar(this);
    }
}
export default Servidor;