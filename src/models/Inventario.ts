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
    
    public agregarEquipo(equipo: Equipo): void {
        this.equipos.push(equipo);
    }

    public listarEquipos(): any[] {
        return this.equipos.map(equipo => {
            const baseProps = {
                nombre: equipo.nombre,
                tipo: equipo.tipo,
                estado: equipo.estado
            };

            if ('ram' in equipo) {
                const specificProps = {
                    ram: (equipo as any).ram,
                    procesador: (equipo as any).procesador,
                    sistema_operativo: (equipo as any).sistema_operativo
                };

                if ('perifericos' in equipo) {
                    return { ...baseProps, ...specificProps, perifericos: (equipo as any).perifericos };
                }
                
                if ('uso_especifico' in equipo) {
                    return {
                        ...baseProps,
                        uso_especifico: (equipo as any).uso_especifico,
                        capacidad: (equipo as any).capacidad,
                        tipo_disco: (equipo as any).tipo_disco
                    };
                }

                return { ...baseProps, ...specificProps };
            }

            return baseProps;
        });
    }

    public actualizarEquipo(equipo: Equipo): void {
        const index = this.equipos.findIndex(e => e.nombre === equipo.nombre);
        if (index !== -1) {
            this.equipos[index] = equipo;
        }
    }
}

export default Inventario;
