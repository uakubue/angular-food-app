import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[]{
    return [
      {
        id: 1,
        name:"French fries",
        price: 2.44,
        tags: ['Fast Food', 'Fry'],
        favourite: true,
        stars: 2,
        imageUrl: '/assets/images/foodie1.jpg',
        origins: ['Bologne','France', 'EU'],
        cookTime: '40 - 50min'
      },

      {
        id: 2,
        name:"Grilled Chicken",
        price: 7.99,
        tags: ['Fast Food', 'Fry'],
        favourite: false,
        stars: 2,
        imageUrl: '/assets/images/foodie2.jpg',
        origins: ['Italia', 'EU'],
        cookTime: '40 - 50min'
      },

      {
        id: 3,
        name:"Salad",
        price: 1.86,
        tags: ['Fast Food', 'Fry'],
        favourite: true,
        stars: 2,
        imageUrl: '/assets/images/foodie3.jpg',
        origins: ['Franch', 'EU'],
        cookTime: '40 - 50min'
      },

      {
        id: 4,
        name:"Portuguese Sushi",
        price: 2.44,
        tags: ['Fast Food', 'Fry'],
        favourite: false,
        stars: 2,
        imageUrl: '/assets/images/foodie4.jpg',
        origins: ['Portugal', 'EU'],
        cookTime: '40 - 50min'
      },

      {
        id: 5,
        name:"Spaghetti bolonise",
        price: 2.44,
        tags: ['Fast Food', 'Fry'],
        favourite: true,
        stars: 24,
        imageUrl: '/assets/images/foodie5.jpg',
        origins: ['Italia', 'EU'],
        cookTime: '40 - 50min'
      },

      {
        id: 6,
        name:"Pizza",
        price: 12.44,
        tags: ['Fast Food', 'Fry'],
        favourite: true,
        stars: 4,
        imageUrl: '/assets/images/foodie6.jpg',
        origins: ['Italia', 'EU'],
        cookTime: '40 - 50min'
      }
    ]
  }

}
