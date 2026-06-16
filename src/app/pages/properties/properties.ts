import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { PropertyService } from '../../services/property';
import { Property } from '../../models/property.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
     NgClass
  ],
  templateUrl: './properties.html',
  styleUrl: './properties.css'
})
export class Properties {

  propertyService = inject(PropertyService);

  properties: Property[] = this.propertyService.getProperties();

  searchText = '';

  selectedStatus = '';

  filteredProperties() {

    return this.properties.filter(property => {

      const matchName =
        property.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());

      const matchStatus =
        !this.selectedStatus ||
        property.status === this.selectedStatus;

      return matchName && matchStatus;
    });

  }

}