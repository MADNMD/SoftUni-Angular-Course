interface Ticket {
    destination: string;
    price: number;
    status: string;
}

function sortTickets(tickets: string[], sortBy: string): Ticket[] {
    const ticketDatabase: Ticket[] = [];

    for (let ticketDesc of tickets) {
        const [destination, priceStr, status] = ticketDesc.split('|');
        const price = parseFloat(priceStr);

        const ticket: Ticket = {
            destination,
            price,
            status,
        };

        ticketDatabase.push(ticket);
    }

    const sortedTickets = ticketDatabase.sort((a, b) => {
        if (sortBy === 'destination') {
            return a.destination.localeCompare(b.destination);
        } else if (sortBy === 'price') {
            return a.price - b.price;
        } else if (sortBy === 'status') {
            return a.status.localeCompare(b.status);
        } else {
            return a.destination.localeCompare(b.destination);
        }
    });
   return sortedTickets;
}

sortTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')