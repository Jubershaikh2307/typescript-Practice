class Vehicle{
    drive(): void {
        console.log("Chupa chup")
    }

    hong(): void{
        console.log("Beep")
    }
    
}

class Car1 extends Vehicle{
    drive(): void{
        console.log("Broom")
    }
}

const car = new Car1()

car.drive()
car.hong()