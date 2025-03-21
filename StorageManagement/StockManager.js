import Equipment from './Equipment.js';

/**
 * Contains the methods to add, remove and show the stock of Equipment type.
 * @class
 */
export default class StockManager {
    constructor() {
        this.totalStock = [];
    }

    /**
     * Adds a new equipment to the array based on the name and quantity passed in
     * @param {name} mandatory The equipment name to be added
     * @param {quantity} mandatory The equipment quantity to be added
     */
    addEquipment(name, quantity) {
        const nameToLowerCase = name.toLowerCase();
        quantity = parseInt(quantity, 10);

        const equipmentExists = this.totalStock.some(equipment => equipment.equipmentName.toLowerCase() === nameToLowerCase);
        //.some() -> Verifies if at least one element of the array satisfies the condition, returns a boolean.
        //if the equipment imputed is equal to the one in lowerCase, it returns true.

        if (equipmentExists) {
            let item = this.totalStock.find(e => e.equipmentName.toLowerCase() === nameToLowerCase);
            if (item) {
                item.equipmentQuantity += quantity;
            }
            return; //Stops de execution
        }

        alert(`The item: ${name} was added to stock. \n`);

        const equipment = new Equipment(name, quantity);
        this.totalStock.push(equipment);
    }

    /** 
     * Removes a existing equipment to the array based on the name and quantity passed in
     * @param {name} mandatory The equipment name to be removed. 
     * @param {qtyToRemove} optional equipment name to be removed. 
     */
    removeEquipment(name, qtyToRemove = null) {
       const nameToLowerCase = name.toLowerCase();

        const itemFound = this.totalStock.findIndex(item => item.equipmentName.toLowerCase() === nameToLowerCase);

        if (itemFound !== -1) {
            //Why -1? By default, if the findIndex method doesn't find a item, it returns a -1.
            const item = this.totalStock[itemFound];

            if (qtyToRemove === '') {
                this.totalStock.splice(itemFound, 1)
                alert(`\n The item: ${name} and all his itens has been removed from the stock. \n`);
            }

            if (item.equipmentQuantity >=  qtyToRemove) {
                item.equipmentQuantity -= qtyToRemove; //reduces the quantity of the equipment inside the stock
                alert(`${qtyToRemove} unit(s) of ${name} have been removed. \n`);
            } else
                alert(`There's not enough quantity of ${name} in stock to remove. \n`);
        }
        else
            alert(`\n The item: ${name} wasn't found, please try again. \n`);
    }

    /**
     * Shows all the items currently on stock.
     */
    showStock() {
        if (this.totalStock.length === 0)
            alert('Sorry, the stock is empty');
        else {
            this.totalStock.forEach(item => {
                alert(`This is all you have on stock: 
                Name: ${item.equipmentName}
                Quantity: ${item.equipmentQuantity}`);
            })
        }
    }
}