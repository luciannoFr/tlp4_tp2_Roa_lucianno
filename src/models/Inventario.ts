import Equipo from "./Equipos";

class Inventario {
    private static instancia: Inventario;
    private equipos: Equipo[] = [];

    private constructor() {
        this.equipos = [];
    }

    public static obtenerInstancia(): Inventario {
        if (!Inventario.instancia) {
            Inventario.instancia = new Inventario();
        }
        return Inventario.instancia;
    }
    
    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        this.equipos.push(new Equipo(nombre, tipo, estado));
    }

    public listarEquipos(): Equipo[] {
        return [...this.equipos];
    }
}

export default Inventario;
