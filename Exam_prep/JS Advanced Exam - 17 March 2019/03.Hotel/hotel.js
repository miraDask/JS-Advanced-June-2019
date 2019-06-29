class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity; // count of the hotel's rooms
        this.bookings = [];
        this._roomsCapacity = this._getRoomsCapacity();
        this._servicesPrices = this.servicesPricing;
        this._roomsPrices = this.roomsPricing;

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
        if (this._roomsCapacity[roomType] > 0) {
            const newBooking = {
                clientName,
                roomType,
                nights,
                roomNumber: this.currentBookingNumber
            }

            this.bookings.push({
                [this.currentBookingNumber]: newBooking
            });
            this.currentBookingNumber++;
            this._roomsCapacity[roomType]--;
            return (`Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${this.currentBookingNumber - 1}.`);
        } else {
            const availableRooms = Object.keys(this._roomsCapacity).filter(k => k !== roomType && this._roomsCapacity[k] > 0);
            let message = `No ${roomType} rooms available!`;
            availableRooms.forEach(r => {
                message += ` Available ${r} rooms: ${this._roomsCapacity[r]}.`;
            })

            return message;
        }
    }

    roomService(currentBookingNumber, serviceType) {
        const currentBooking = this.bookings.find(b => b.hasOwnProperty(currentBookingNumber))
        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        if (!this._servicesPrices.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`
        }

        if (!currentBooking[currentBookingNumber].services) {
            currentBooking[currentBookingNumber].services = [];
        }

        currentBooking[currentBookingNumber].services.push(serviceType);
        return `Mr./Mrs. ${currentBooking[currentBookingNumber].clientName}, Your order for ${serviceType} service has been successful.`
    }

    checkOut(currentBookingNumber) {
        const currentBooking = this.bookings.find(b => b.hasOwnProperty(currentBookingNumber))
        if (!currentBooking) {
            return `The booking ${currentBookingNumber} is invalid.`
        }

        const totalMoney = currentBooking[currentBookingNumber].nights *
            this._roomsPrices[currentBooking[currentBookingNumber].roomType];
        const clientName = currentBooking[currentBookingNumber].clientName;
        const roomType = currentBooking[currentBookingNumber].roomType
        this._roomsCapacity[roomType]++;

        const index = this.bookings.indexOf(currentBooking);
        this.bookings.splice(index, 1);

        let message = `We hope you enjoyed your time here, Mr./Mrs. ${clientName}.` +
            ` The total amount of money you have to pay is ${totalMoney} BGN.`

        if (currentBooking[currentBookingNumber].services) {
            const services = currentBooking[currentBookingNumber].services;
            let totalServiceMoney = 0;
            services.forEach(s => {
                totalServiceMoney += this._servicesPrices[s];
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

        this.bookings.forEach((b, i) => {
            const bookingNumber = Object.keys(b)[0];
            message += `bookingNumber - ${bookingNumber}\n`;
            message += `clientName - ${b[bookingNumber].clientName}\n`;
            message += `roomType - ${b[bookingNumber].roomType}\n`;
            message += `nights - ${b[bookingNumber].nights}\n`;
            message += b[bookingNumber].services ? `services: ${b[bookingNumber].services.join(', ')}\n` : '';
            message += i === this.bookings.length - 1 ? '' : '-'.repeat(10) + '\n';

        })

        return message.trim();
    }
}
//tests:
let hotel = new Hotel('HotUni', 10);

hotel.rentARoom('Peter', 'single', 4);
hotel.rentARoom('Robert', 'double', 4);
hotel.rentARoom('Geroge', 'maisonette', 6);

hotel.roomService(3, 'housekeeping');
hotel.roomService(3, 'drink');
hotel.roomService(2, 'room');
hotel.checkOut(1)
console.log(hotel.report());