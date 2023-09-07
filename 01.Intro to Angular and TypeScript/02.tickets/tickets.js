function sortTickets(tickets, sortBy) {
    const ticketDatabase = [];
    for (let ticketDesc of tickets) {
        const [destination, priceStr, status] = ticketDesc.split('|');
        const price = parseFloat(priceStr);
        const ticket = {
            destination,
            price,
            status,
        };
        ticketDatabase.push(ticket);
    }
    const sortedTickets = ticketDatabase.sort((a, b) => {
        if (sortBy === 'destination') {
            return a.destination.localeCompare(b.destination);
        }
        else if (sortBy === 'price') {
            return a.price - b.price;
        }
        else if (sortBy === 'status') {
            return a.status.localeCompare(b.status);
        }
        else {
            return a.destination.localeCompare(b.destination);
        }
    });
    return sortedTickets;
    // for(let tikcet of sortedTickets){
    //     console.log(tikcet);
    // }
}
sortTickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
