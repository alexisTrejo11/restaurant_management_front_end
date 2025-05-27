
export interface Dish {
    id: number;
    name: string;
    description: string
    price: number;
    categogry: string;
    image: string;
    ingredients?: string[]
    isVegetarian?: boolean;
    isGlutenFree?: boolean;
}