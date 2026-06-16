export interface Property {
  id: number;
  name: string;
  type: 'Apartment' | 'Villa' | 'Office';
  price: number;
  status: 'Available' | 'Sold' | 'Reserved';
  image: string;
  description: string;
}