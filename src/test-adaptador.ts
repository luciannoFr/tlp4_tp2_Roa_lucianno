import InventarioViejo from "./models/InventarioViejo";
import AdaptadorInventario from "./models/AdaptadorInventario";
import { Observer } from "./models/Observer";

// Creamos una implementación simple de Observer para la prueba
class SoporteBasico implements Observer {
    actualizar(equipo: any): void {
        console.log(`[Soporte] Se ha actualizado el estado de ${equipo.nombre} a ${equipo.estado}`);
    }
}

// Ejemplo de uso
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
const soporte = new SoporteBasico();

// Agregamos equipos usando el adaptador
adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible", soporte);
adaptador.agregarEquipo("Notebook HP", "Notebook", "en uso", soporte);

// Listamos los equipos
console.log("Listado de equipos:");
console.log(adaptador.listarEquipos());
