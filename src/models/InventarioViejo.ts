class InventarioViejo {
    private items: string[] = [];
    
    agregarItem(item: string): void {
        this.items.push(item);
        console.log(`Agregando ${item} al inventario viejo.`);
    }
    
    listarItems(): string[] {
        return [...this.items];
    }
}

export default InventarioViejo;
