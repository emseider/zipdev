export interface GeocodeEntity {
    nearby_restaurants: RestaurantEntity[];
}

export interface RestaurantEntity {
    restaurant: NerbyEntity;
}

export interface NerbyEntity {
    id: number;
    name: string;
    average_cost_for_two: number;
    currency: string;
    user_rating: RatingEntity;
    url: string;
    thumb: string;
}

export interface RatingEntity {
    aggregate_rating: number;
}
