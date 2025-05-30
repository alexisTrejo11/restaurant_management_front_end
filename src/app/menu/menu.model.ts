export interface Dish {
    id: number;
    name: string;
    description: string
    price: number;
    category: string;
    image: string;
    ingredients?: string[]
    isVegetarian?: boolean;
    isGlutenFree?: boolean;
}

export interface Category {
    id: number;
    name: string;
}