describe('Car widgets', function(){
    it('should return all the makes of car', function(){
        assert.deepEqual([{make: 'Nissan', model: 'Juke', color: 'Orange', price: 70532, reg_number: 'CJ 34237'},
        {make: 'Ford', model: 'Ranger', color: 'Red', price: 53993, reg_number: 'CJ 30043'},
        {make: 'Volkswagen', model: 'Polo', color: 'Orange', price: 83231, reg_number: 'CJ 20777'},
        {make: 'Volkswagen', model: 'Touran', color: 'Blue', price: 85201, reg_number: 'CJ 48393'},
        {make: 'Volkswagen', model: 'Touran', color: 'Orange', price: 73958, reg_number: 'CY 71447'},
        {make: 'Nissan', model: 'Sentra', color: 'White', price: 71289, reg_number: 'CJ 81428'},
        {make: 'Toyota', model: 'Hilux', color: 'White', price: 135038, reg_number: 'CL 1836'},
        {make: 'Nissan', model: 'Juke', color: 'Orange', price: 117993, reg_number: 'CK 87163'},
        {make: 'Ford', model: 'Fiesta', color: 'Blue', price: 111495, reg_number: 'CY 62077'},
        {make: 'Volkswagen', model: 'Polo', color: 'Orange', price: 109764, reg_number: 'CF 61176'},
        {make: 'Toyota', model: 'Corolla', color: 'Red', price: 148910, reg_number: 'CF 64239'},
        {make: 'Nissan', model: 'Qashqai', color: 'Orange', price: 63199, reg_number: 'CJ 66133'},
        {make: 'Nissan', model: 'Juke', color: 'Orange', price: 135084, reg_number: 'CK 78230'},
        {make: 'Nissan', model: 'Sentra', color: 'Red', price: 68490, reg_number: 'CK 73607'},
        {make: 'Ford', model: 'Focus', color: 'White', price: 142258, reg_number: 'CY 42475'},
        {make: 'Toyota', model: 'Hilux', color: 'White', price: 137279, reg_number: 'CF 59936'},
        {make: 'Ford', model: 'EcoSport', color: 'White', price: 95600, reg_number: 'CJ 63082'},
        {make: 'Toyota', model: 'Tazz', color: 'White', price: 65453, reg_number: 'CA 23171'},
        {make: 'Nissan', model: 'Juke', color: 'White', price: 107154, reg_number: 'CA 70434'},
        {make: 'Ford', model: 'Fiesta', color: 'White', price: 101432, reg_number: 'CY 26333'},
        {make: 'Nissan', model: 'Micra', color: 'Blue', price: 130059, reg_number: 'CY 24668'},
        {make: 'Toyota', model: 'Corolla', color: 'White', price: 108267, reg_number: 'CA 94547'},
        {make: 'Nissan', model: 'Sentra', color: 'Orange', price: 104493, reg_number: 'CJ 50065'},
        {make: 'Volkswagen', model: 'Polo', color: 'Red', price: 130113, reg_number: 'CJ 66988'},
        {make: 'Volkswagen', model: 'Touran', color: 'Blue', price: 66229, reg_number: 'CK 72469'},
        {make: 'Nissan', model: 'Juke', color: 'White', price: 87311, reg_number: 'CY 94371'},
        {make: 'Volkswagen', model: 'Touran', color: 'Red', price: 120855, reg_number: 'CA 8438'},
        {make: 'Toyota', model: 'Tazz', color: 'Blue', price: 126990, reg_number: 'CA 94801'},
        {make: 'Volkswagen', model: 'Golf', color: 'Orange', price: 134378, reg_number: 'CF 25628'}
        ], getAllCars())
    });
})