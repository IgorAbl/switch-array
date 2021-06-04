'use strict';  


//Vehile

class Vehicle{
    constructor(currentYear, brand, model, manufactureDate, dimensions){
        this.currentYear = currentYear; 
        this.brand = brand;
        this.model = model;
        this.manufactureDate = manufactureDate;
        this.dimensions = {
            length: 4.9,
            width: 1.8,
            height: 1.4,
        }          
    }
    getMaxSize(){
        return 2 * (this.dimensions.height * this.dimensions.length + this.dimensions.length * this.dimensions.width + this.dimensions.height * this.dimensions.width); 
    }
    getAge(){
        return this.currentYear - this.manufactureDate;
    }
}

const vehicleAudi = new Vehicle (2021, 'Audi', 'A6 50 TDI', 2018);


console.log('vehicleAudi :>> ', vehicleAudi);
console.log('vehicleAudi Max Size :>> ', vehicleAudi.getMaxSize());
console.log('vehicleAudi Age :>> ', vehicleAudi.getAge());



//Дочерний класс PassengerTransport 

class PassengerTransport extends Vehicle{
    constructor(currentYear, brand, model, manufactureDate, dimensions, passengerCount, passengerLimit){
        super(currentYear, brand, model, manufactureDate);       
        this.passengerCount = passengerCount;
        this.passengerLimit = passengerLimit;
        this.dimensions = {
            length: 5.2,
            width: 2,
            height: 1.8,
        }
    }
    addPassenger(){
        if(this.passengerLimit >= this.passengerCount){
            return true
        }else(this.passengerLimit < this.passengerCount)
            return false
    } 
    
}

const vehicle2 = new PassengerTransport(2021, 'Mercedes-Benz', 'Sprinter', 2000, this.dimensions, 19, 19);


console.log('vehicle2 :>> ', vehicle2);
console.log('vehicle2 :>> ', vehicle2.addPassenger());



//Дочерний класс FreightTransport

class FreightTransport extends PassengerTransport{
    constructor(currentYear, brand, model, manufactureDate, dimensions, weight, capacity){
        super(currentYear, brand, model, manufactureDate);
        this.dimensions = {
            length: 9.5,
            width: 2.6,
            height: 3.4,
        }
        this.weight = weight;
        this.capacity = capacity;

    }
    checkLoadingPossibility(){
        if(this.weight <= this.capacity){
            return true
        }else{
            return false
        }
    }
}


const vehicle3 = new FreightTransport(2021, 'МАЗ', '6501С9', 2015, this.dimensions, 18000, 19000);

console.log('vehicle3 :>> ', vehicle3);
console.log('vehicle3 :>> ', vehicle3.checkLoadingPossibility());