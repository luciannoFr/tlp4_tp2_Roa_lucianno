import Inventario from "./models/Inventario";
import EquipoFactory from "./models/EquipoFactory";
import Observer from "./models/Observer";
import InventarioViejo from "./models/InventarioViejo";
import AdaptadorInventario from "./models/AdaptadorInventario";

class SoporteBasico implements Observer {
    actualizar(equipo: any): void {
        console.log(`[Soporte] Se ha actualizado el estado de ${equipo.nombre} a ${equipo.estado}`);
    }
}

const inventario = Inventario.obtenerInstancia(); 
const soporte = new SoporteBasico();

const factory = new EquipoFactory();
const notebook = factory.crearEquipo(
    "Notebook",
    "HP EliteBook",
    "disponible",
    soporte,
    "16GB",
    "i7",
    "Windows 10"
);

const computadora = factory.crearEquipo(
    "Desktop", 
    "Dell XPS", 
    "disponible", 
    soporte, 
    "32GB", 
    "i9", 
    "Windows 11", 
    ["monitor", "teclado", "mouse"]
);

const servidor = factory.crearEquipo(
    "Servidor",
    "Dell PowerEdge",
    "en uso",
    soporte,
    undefined, undefined, undefined, undefined,
    "Base de datos",
    "2TB",
    "SSD"
);

inventario.agregarEquipo(notebook);
inventario.agregarEquipo(computadora);
inventario.agregarEquipo(servidor);

console.log(inventario.listarEquipos());

computadora.cambiarEstado("en reparación");
inventario.actualizarEquipo(computadora);
console.log(inventario.listarEquipos());
console.log('\n=== ADAPTADOR PARA INVENTARIO VIEJO ===');
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
adaptador.agregarEquipo("Notebook HP", "Notebook", "en uso");

console.log('Listado de equipos del inventario viejo (a través del adaptador):');
console.log(adaptador.listarEquipos());
