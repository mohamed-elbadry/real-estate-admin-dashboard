import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { PropertyService } from '../../services/property';
import { Property } from '../../models/property.model';

@Component({
  selector: 'app-property-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './property-details.html',
  styleUrl: './property-details.css'
})
export class PropertyDetails {

  private route = inject(ActivatedRoute);

  private propertyService = inject(PropertyService);

  property: Property | undefined;

  constructor() {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    this.property =
      this.propertyService.getProperty(id);

  }

}