import equipos from "./Equipos";

class Observer {
    actualizar(equipo: equipos): void {
        console.log(`Equipo ${equipo.nombre} ha cambiado su estado a ${equipo.estado}`);
    }
}

export default Observer;
