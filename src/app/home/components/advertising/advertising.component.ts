import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/_common/services/query.service';
import { ENDPOINTS } from 'src/app/_common/constants/endpoints';
import { LocationsResponseEntity } from 'src/app/_common/entities/locations.entity';
import { GeocodeEntity, RestaurantEntity } from 'src/app/_common/entities/geocode.entity';

@Component({
  selector: 'app-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss'],
})
export class AdvertisingComponent implements OnInit {

  public ads: RestaurantEntity[];

  constructor(private query: QueryService) {
    this.ads = [];
  }

  ngOnInit() {
    this.getCity();
  }

  private async getCity() {
    try {
      const params = { query: 'San Diego' };
      const response: LocationsResponseEntity = await this.query.get(ENDPOINTS.LOCATIONS, params);

      const location = response.location_suggestions[0];
      const restaurants: GeocodeEntity = await this.query.get(ENDPOINTS.GEOCODE,
        { lat: location.latitude, lon: location.longitude });

      this.ads = restaurants.nearby_restaurants;
      debugger;
    } catch (e) {
      throw new Error(e);
    }
  }

}
