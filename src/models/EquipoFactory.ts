import Notebook from "./Notebook";
import Desktop from "./Desktop";
import Servidor from "./Servidor";
import type Observer from "./Observer";

class EquipoFactory {
    crearEquipo(tipo: string, nombre: string, estado: string, soporte: Observer, ram?: string | undefined, procesador?: string | undefined, sistema_operativo?: string | undefined, perifericos?: string[] | undefined, uso_especifico?: string | undefined, capacidad?: string | undefined, tipo_disco?: string | undefined): Notebook | Desktop | Servidor {
            switch(tipo){
            case 'Notebook':
                return new Notebook(nombre, tipo, estado, soporte!, ram!, procesador!, sistema_operativo!);
            case 'Desktop':
                return new Desktop(nombre, tipo, estado, soporte!, ram!, procesador!, sistema_operativo!, perifericos!);
            case 'Servidor':
                return new Servidor(nombre, tipo, estado, soporte!, uso_especifico!, capacidad!, tipo_disco!);
            default:
                throw new Error('Tipo de equipo no válido');
        }
    }
}

export default EquipoFactory;