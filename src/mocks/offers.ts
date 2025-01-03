import { TPlaceCardEntity } from '../components/placeCard.typings/placeCard.typings';
import { cities } from './cities';

export const offers: TPlaceCardEntity[] = [
  {
    id: '1',
    mark: 'Premium',
    images: [
      { id: 1, src: 'img/apartment-01.jpg', alt: 'Beautiful apartment', isCoverImage: true }
    ],
    priceValue: 120,
    priceType: 'night',
    starRating: 4,
    numericRating: 4.5,
    name: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    city: cities['Amsterdam'],
    isFullPage: false,
    description: [{ id: 1, text: 'A spacious and well-equipped apartment with an amazing view.' }],
    features: {
      placeType: 'Apartment',
      maxAdultOccupancy: 4
    },
    host: {
      avatarImageSrc: 'img/avatar-01.jpg',
      name: 'John Doe',
      status: 'Pro',
    },
    insideList: [
      { id: 1, text: 'Spacious living room' },
      { id: 2, text: 'Fully equipped kitchen' }
    ],
    reviews: [
      {
        id: '1',
        user: {
          avatarImageSrc: 'img/user-avatar-01.jpg',
          name: 'Alice',
          status: 'Pro',
        },
        stars: 5,
        text: 'Amazing stay, highly recommended!',
        datetime: '2025-01-01T12:00:00Z', // Пример даты в ISO формате
        readableDate: 'January 1, 2025',
      },
      {
        id: '2',
        user: {
          avatarImageSrc: 'img/user-avatar-02.jpg',
          name: 'Bob',
          status: 'Pro',
        },
        stars: 4,
        text: 'Great place, but could be a bit cleaner.',
        datetime: '2025-01-02T12:00:00Z',
        readableDate: 'January 2, 2025',
      },
    ],
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    previewImage: 'img/apartment-01.jpg'
  },
  {
    id: '2',
    images: [
      { id: 1, src: 'img/room.jpg', alt: 'Cozy room' }
    ],
    priceValue: 80,
    priceType: 'night',
    starRating: 4,
    numericRating: 4.2,
    name: 'Wood and stone place',
    type: 'Room',
    city: cities['Amsterdam'],
    isFullPage: false,
    description: [{ id: 1, text: 'A cozy room with natural wood and stone elements.' }],
    features: {
      placeType: 'Room',
      maxAdultOccupancy: 2
    },
    host: {
      avatarImageSrc: 'img/avatar-02.jpg',
      name: 'Emily Smith',
      status: 'Pro',
    },
    insideList: [
      { id: 1, text: 'Wooden floor' },
      { id: 2, text: 'Rustic design' }
    ],
    reviews: [
      {
        id: '1',
        user: {
          avatarImageSrc: 'img/user-avatar-03.jpg',
          name: 'Carol',
          status: 'Pro',
        },
        stars: 5,
        text: 'Fantastic room, loved the design!',
        datetime: '2025-01-03', // Пример даты в ISO формате
        readableDate: 'January 3, 2025',
      },
    ],
    latitude: 52.3609553943508,
    longitude: 4.85309666406198,
    previewImage: 'img/room.jpg'
  },
  {
    id: '3',
    images: [
      { id: 1, src: 'img/apartment-02.jpg', alt: 'Canal view apartment' }
    ],
    priceValue: 132,
    priceType: 'night',
    starRating: 4,
    numericRating: 4.4,
    name: 'Canal View Prinsengracht',
    type: 'Apartment',
    city: cities['Amsterdam'],
    isFullPage: false,
    description: [{ id: 1, text: 'A beautiful apartment with a view of the canal.' }],
    features: {
      placeType: 'Apartment',
      maxAdultOccupancy: 3
    },
    host: {
      avatarImageSrc: 'img/avatar-03.jpg',
      name: 'Olivia Johnson',
      status: 'Pro',
    },
    insideList: [
      { id: 1, text: 'Heated floors' },
      { id: 2, text: 'Coffee machine' }
    ],
    reviews: [],
    latitude: 52.3909553943508,
    longitude: 4.929309666406198,
    previewImage: 'img/apartment-02.jpg'
  },
  {
    id: '4',
    mark: 'Premium',
    images: [
      { id: 1, src: 'img/apartment-03.jpg', alt: 'Cozy apartment with big bed' }
    ],
    priceValue: 180,
    priceType: 'night',
    starRating: 4,
    numericRating: 4.7,
    name: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    city: cities['Amsterdam'],
    isFullPage: false,
    description: [{ id: 1, text: 'Perfect for couples or solo travelers, cozy and comfortable.' }],
    features: {
      placeType: 'Apartment',
      maxAdultOccupancy: 2
    },
    host: {
      avatarImageSrc: 'img/avatar-04.jpg',
      name: 'Mark Taylor',
      status: 'Pro',
    },
    insideList: [
      { id: 1, text: 'Comfy bed' },
      { id: 2, text: 'Private bathroom' }
    ],
    reviews: [],
    latitude: 52.3809553943508,
    longitude: 4.939309666406198,
    previewImage: 'img/apartment-03.jpg'
  },
  {
    id: '5',
    images: [
      { id: 1, src: 'img/room.jpg', alt: 'Rustic room' }
    ],
    priceValue: 80,
    priceType: 'night',
    starRating: 4,
    numericRating: 4.3,
    name: 'Wood and stone plact',
    type: 'Room',
    city: cities['Amsterdam'],
    isFullPage: false,
    description: [{ id: 1, text: 'Rustic room with a unique mix of wood and stone.' }],
    features: {
      placeType: 'Room',
      maxAdultOccupancy: 2
    },
    host: {
      avatarImageSrc: 'img/avatar-05.jpg',
      name: 'David Williams'
    },
    insideList: [
      { id: 1, text: 'Stone walls' },
      { id: 2, text: 'Wooden furniture' }
    ],
    reviews: [],
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    previewImage: 'img/room.jpg'
  }
];

