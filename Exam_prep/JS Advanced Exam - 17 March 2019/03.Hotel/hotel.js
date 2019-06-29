class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity; // count of the hotel's rooms
        this.bookings = [];
        this.rooms = this._getRoomsCapacity();
        this.currentBookingNumber = 1;
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        }
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        }
    }

    _getRoomsCapacity() {
        return {
            single: this.capacity * 0.5,
            double: this.capacity * 0.3,
            maisonette: this.capacity * 0.2
        }
    }


    rentARoom(clientName, roomType, nights) {
        if (this.rooms[roomType] > 0) {
            const newBooking = {
                name: clientName,
                roomType : roomType,
                nights : nights,
                roomNumber: this.currentBookingNumber
            }

            this.bookings.push({
                [this.currentBookingNumber]: newBooking
            });
            this.currentBookingNumber++;
            this.rooms[roomType]--;
            return (`Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`);
        } else {
            const availableRooms = Object.keys(this.rooms).filter(k => this.rooms[k] > 0);
            let message = `No ${roomType} rooms available!`;
            availableRooms.forEach(r => {
                message += ` Available ${r} rooms: ${this.rooms[r]}.`;
            })

            return message;
        }
    }

    roomService(currentBookingNumber, serviceType) {
        const currentBooking = this.bookings.find(b => b.hasOwnProperty(currentBookingNumber))
        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`
        }

        if (!currentBooking[currentBookingNumber].services) {
            currentBooking[currentBookingNumber].services = [];
        }

        currentBooking[currentBookingNumber].services.push(serviceType);
        return `Mr./Mrs. ${currentBooking[currentBookingNumber].name}, Your order for ${serviceType} service has been successful.`
    }

    checkOut(currentBookingNumber) {
        const currentBooking = this.bookings.find(b => b.hasOwnProperty(currentBookingNumber))
        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`
        }
        
        const roomType = currentBooking[currentBookingNumber].roomType;
        const totalMoney = currentBooking[currentBookingNumber].nights * this.roomsPricing[roomType];
        const clientName = currentBooking[currentBookingNumber].name;
       
        this.rooms[roomType]++;

        const index = this.bookings.indexOf(currentBooking);
        this.bookings.splice(index, 1);

        let message = `We hope you enjoyed your time here, Mr./Mrs. ${clientName}.` +
            ` The total amount of money you have to pay is ${totalMoney} BGN.`

        if (currentBooking[currentBookingNumber].services) {
            const services = currentBooking[currentBookingNumber].services;
            let totalServiceMoney = 0;
            services.forEach(s => {
                totalServiceMoney += this.servicesPricing[s];
            })

            message = `We hope you enjoyed your time here, Mr./Mrs. ${clientName}.` +
                ` The total amount of money you have to pay is ${totalMoney + totalServiceMoney} BGN.` +
                ` You have used additional room services, costing ${totalServiceMoney} BGN.`
        }

        return message;
    }

    report() {
        let message = `${this.name.toUpperCase()} DATABASE:\n`;
        message += '-'.repeat(20) + '\n';

        if(this.bookings.length === 0) {
            message += 'There are currently no bookings.'
        } else {
            this.bookings.forEach((b, i) => {
                const bookingNumber = Object.keys(b)[0];
                message += `bookingNumber - ${bookingNumber}\n`;
                message += `clientName - ${b[bookingNumber].name}\n`;
                message += `roomType - ${b[bookingNumber].roomType}\n`;
                message += `nights - ${b[bookingNumber].nights}\n`;
                message += b[bookingNumber].services ? `services: ${b[bookingNumber].services.join(', ')}\n` : '';
                message += i === this.bookings.length - 1 ? '' : '-'.repeat(10) + '\n';
            })
        }
        return message.trim();
    }
}