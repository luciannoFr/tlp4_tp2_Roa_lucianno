import InventarioViejo from "./InventarioViejo";

class AdaptadorInventario {
    private inventarioViejo: InventarioViejo;
    private equipos: Array<{nombre: string, tipo: string, estado: string}> = [];

    constructor(inventarioViejo: InventarioViejo) {
        this.inventarioViejo = inventarioViejo;
    }

    public agregarEquipo(nombre: string, tipo: string, estado: string): void {
        const item = `${nombre} (${tipo}) - Estado: ${estado}`;
        this.inventarioViejo.agregarItem(item);
        
        this.equipos.push({ nombre, tipo, estado });
    }

    public listarEquipos(): Array<{nombre: string, tipo: string, estado: string}> {
        return [...this.equipos];
    }

    private static instancia: AdaptadorInventario;
    
    public static obtenerInstancia(inventarioViejo: InventarioViejo): AdaptadorInventario {
        if (!AdaptadorInventario.instancia) {
            AdaptadorInventario.instancia = new AdaptadorInventario(inventarioViejo);
        }
        return AdaptadorInventario.instancia;
    }
}

export default AdaptadorInventario;
