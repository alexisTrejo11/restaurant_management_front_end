export interface RestaurantInfo {
    name: string;
    description: string;
    address: string;
    email: string;
    phone: string;
    hours: {
        [key: string]: string;
    };
    specialties: string[];
    awards?: string[];
}