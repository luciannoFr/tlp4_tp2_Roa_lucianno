import Inventario from "./models/Inventario";
import EquipoFactory from "./models/EquipoFactory";

const inventario = Inventario.obtenerInstancia();

inventario.agregarEquipo("Notebook HP", "Portátil", "disponible");
const factory = new EquipoFactory();
const computadora = factory.crearEquipo("Desktop", "Dell XPS", "disponible", "16GB", "i7", "Windows 11", ["monitor", "teclado", "mouse"]); 

inventario.agregarEquipo(computadora.nombre, computadora.tipo, computadora.estado);
console.log(inventario.listarEquipos());

