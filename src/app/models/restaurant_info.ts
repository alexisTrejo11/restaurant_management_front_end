export interface RestaurantInfo {
    name: string;
    description: string;
    phone: string;
    hours: {
        [key: string]: string;
    };
    specialities: string[];
    awards?: string[];
}