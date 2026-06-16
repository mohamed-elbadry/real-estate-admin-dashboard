import { Injectable } from '@angular/core';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private properties: Property[] = [
    {
      id: 1,
      name: 'Luxury Villa',
      type: 'Villa',
      price: 500000,
      status: 'Available',
      image: 'https://picsum.photos/500/300?1',
      description: 'Luxury villa with private swimming pool.'
    },
    {
      id: 2,
      name: 'Modern Apartment',
      type: 'Apartment',
      price: 250000,
      status: 'Sold',
      image: 'https://picsum.photos/500/300?2',
      description: 'Modern apartment in downtown.'
    },
    {
      id: 3,
      name: 'Business Office',
      type: 'Office',
      price: 350000,
      status: 'Reserved',
      image: 'https://picsum.photos/500/300?3',
      description: 'Premium office for companies.'
    },
    {
      id: 4,
      name: 'Beach Villa',
      type: 'Villa',
      price: 650000,
      status: 'Available',
      image: 'https://picsum.photos/500/300?4',
      description: 'Beautiful villa near the beach.'
    },
    {
      id: 5,
      name: 'Sky Apartment',
      type: 'Apartment',
      price: 300000,
      status: 'Available',
      image: 'https://picsum.photos/500/300?5',
      description: 'Apartment with amazing city view.'
    }
  ];

  getProperties(): Property[] {
    return this.properties;
  }

  getProperty(id: number): Property | undefined {
    return this.properties.find(property => property.id === id);
  }
}