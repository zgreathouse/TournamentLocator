export const FIELDS = {
  username: {
    label: 'Username',
    name: 'username',
    type: 'input',
    errorMessage: 'a username'
  },
  city: {
    label: 'City',
    name: 'city',
    type: 'input',
    errorMessage: 'your city'
  },
  travelRange: {
    label: 'Travel Range',
    name: 'travelRange',
    type: 'input',
    errorMessage: 'how far you are willing to travel'
  },
  followedGames: {
    label: 'Favorite Games',
    name: 'followedGames',
    type: 'input'
  }
};

export const unrequiredFields = [
  'followedGames',
  'followedSeries'
];
