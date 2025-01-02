import { TPlaceCardEntity } from '../components/placeCard.typings/placeCard.typings';

export const offers: TPlaceCardEntity[] = [
  {
    id: '1',
    mark: 'Premium',
    imageSrc: 'img/apartment-01.jpg',
    priceValue: 120,
    priceType: 'night',
    starRating: 4,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    isFullPage: false,
    description: 'A spacious and well-equipped apartment with an amazing view.',
    features: ['Wi-Fi', 'Air conditioning', 'Balcony'],
    host: {
      avatar: 'img/avatar-01.jpg',
      name: 'John Doe',
      isPro: true,
      description: 'Experienced host with 10+ years in the hospitality industry.'
    },
    bedrooms: 2,
    maxGuests: 4,
    reviews: [
      {
        userAvatar: 'img/user-avatar-01.jpg',
        userName: 'Alice',
        rating: 5,
        text: 'Amazing stay, highly recommended!',
        date: '2025-01-01'
      },
      {
        userAvatar: 'img/user-avatar-02.jpg',
        userName: 'Bob',
        rating: 4,
        text: 'Great place, but could be a bit cleaner.',
        date: '2025-01-02'
      }
    ]
  },
  {
    id: '2',
    imageSrc: 'img/room.jpg',
    priceValue: 80,
    priceType: 'night',
    starRating: 4,
    name: 'Wood and stone place',
    type: 'Room',
    isFullPage: false,
    description: 'A cozy room with natural wood and stone elements.',
    features: ['Wi-Fi', 'Shared bathroom'],
    host: {
      avatar: 'img/avatar-02.jpg',
      name: 'Emily Smith',
      isPro: false,
      description: 'Friendly and helpful host.'
    },
    bedrooms: 1,
    maxGuests: 2,
    reviews: [
      {
        userAvatar: 'img/user-avatar-03.jpg',
        userName: 'Carol',
        rating: 5,
        text: 'Fantastic room, loved the design!',
        date: '2025-01-03'
      }
    ]
  },
  {
    id: '3',
    imageSrc: 'img/apartment-02.jpg',
    priceValue: 132,
    priceType: 'night',
    starRating: 4,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    isFullPage: false,
    description: 'A beautiful apartment with a view of the canal.',
    features: ['Wi-Fi', 'Heated floors', 'Coffee machine'],
    host: {
      avatar: 'img/avatar-03.jpg',
      name: 'Olivia Johnson',
      isPro: true,
      description: 'Professional host with high ratings.'
    },
    bedrooms: 1,
    maxGuests: 3,
    reviews: [],
  },
  {
    id: '4',
    mark: 'Premium',
    imageSrc: 'img/apartment-03.jpg',
    priceValue: 180,
    priceType: 'night',
    starRating: 4,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isFullPage: false,
    description: 'Perfect for couples or solo travelers, cozy and comfortable.',
    features: ['Wi-Fi', 'Private bathroom', 'TV'],
    host: {
      avatar: 'img/avatar-04.jpg',
      name: 'Mark Taylor',
      isPro: true,
      description: 'Top-rated host in the city.'
    },
    bedrooms: 1,
    maxGuests: 2,
    reviews: []
  },
  {
    id: '5',
    imageSrc: 'img/room.jpg',
    priceValue: 80,
    priceType: 'night',
    starRating: 4,
    name: 'Wood and stone plact',
    type: 'Room',
    isFullPage: false,
    description: 'Rustic room with a unique mix of wood and stone.',
    features: ['Wi-Fi', 'Shared bathroom'],
    host: {
      avatar: 'img/avatar-05.jpg',
      name: 'David Williams',
      isPro: false,
      description: 'Friendly host with local tips.'
    },
    bedrooms: 1,
    maxGuests: 2,
    reviews: []
  }
];
