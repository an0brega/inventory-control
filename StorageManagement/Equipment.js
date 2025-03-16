/**
 * Represents the equipment stored on stock
 * @class
 */
export default class Equipment {
    /**
     * @param {equipmentName} mandatory Equipment name to be stored on stock
     * @param {equipmentQuantity}  mandatory Equipment quantity to be stored on stock
     */
    constructor(equipmentName, equipmentQuantity) {

        if (typeof equipmentName !== 'string' || !/^[a-zA-Z]+$/.test(equipmentName)) {
            throw new Error('Equipment name must be string type.');
        }
        /*
        ^ means "string beginning".
        [a-zA-Z] only acepts letter between a and z (lowercase and uppercase).
        + means "one ore more caracters".
        $ means .6+."end of string".
        */

        equipmentQuantity = parseInt(equipmentQuantity);

        if (typeof equipmentQuantity !== 'number' || !Number.isInteger(equipmentQuantity)) {
            throw new Error('Equipment number must be a number.');
        }

        /** @property {string} equipmentName - The name of the equipment. */
        this.equipmentName = equipmentName;

        /** @property {int} equipmentQuantity - The quantity of the equipment. */
        this.equipmentQuantity = equipmentQuantity;
    }
}