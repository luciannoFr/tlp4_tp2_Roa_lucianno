import Observer from "./Observer";

class equipos {
    nombre: string;
    tipo: string;
    estado: string;
    soporte: Observer;
    
    constructor(nombre: string, tipo: string, estado: string, soporte: Observer) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
        this.soporte = soporte;
    }
    
    detalles(): string {
        return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, Estado: ${this.estado}`;
    }
    agregarObservador(soporte: Observer): void {
        this.soporte = soporte;
    }
    notificarObservadores(): void {
        this.soporte.actualizar(this);
    }
    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }
}

export default equipos;
