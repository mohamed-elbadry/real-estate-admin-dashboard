import { Component, inject } from '@angular/core';
import { PropertyService } from '../../services/property';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  propertyService = inject(PropertyService);

  properties: Property[] = this.propertyService.getProperties();

}