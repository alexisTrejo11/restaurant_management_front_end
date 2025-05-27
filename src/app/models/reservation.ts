export interface Reservation {
    customer_name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    guests: number;
    specialRequests?: string;
}