let registerTickets = function (ticketsData, sortingCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const sortTickets = (sortingCriterion, tickets) => {
        let sortFunk = (a, b) => a[sortingCriterion].localeCompare(b[sortingCriterion]);
        if (sortingCriterion === 'price') {
            sortFunk = (a, b) => a[sortingCriterion] - b[sortingCriterion];
        }

        tickets = tickets.sort(sortFunk);
    }

    let tickets = [];

    ticketsData.forEach(data => {
        const [destination, price, status] = [...data.split('|')];
        const ticket = new Ticket(destination, +price, status);
        tickets.push(ticket);
    });

    sortTickets(sortingCriterion, tickets);
    return tickets;
}

let result = registerTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
)

console.log(result)