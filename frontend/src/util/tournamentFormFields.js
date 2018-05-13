export const FIELDS = {
  title: {
    label: 'Title',
    name: 'title',
    type: 'input',
    errorMessage: 'a title'
  },
  game: {
    label: 'Game',
    name: 'game',
    type: 'input',
    errorMessage: 'the featured game'
  },
  tags: {
    label: 'Tags',
    name: 'tags',
    type: 'input'
  },
  maxEntrants: {
    label: 'Max Entrants',
    name: 'maxEntrants',
    type: 'input',
    errorMessage: 'a max number of entrants'
  },
  city: {
    label: 'City',
    name: 'city',
    type: 'input',
    errorMessage: 'the city where this tournament will be held'
  },
  streetAdress: {
    label: 'Street Address',
    name: 'streetAddress',
    type: 'input',
    errorMessage: 'the street address where this tournament will be held'
  },
  sponsors: {
    label: 'Sponsors',
    name: 'sponsors',
    type: 'input'
  },
  streamLink: {
    label: 'Stream Link',
    name: 'streamLink',
    type: 'input'
  },
  twitterLink: {
    label: 'Twitter Link',
    name: 'twitterLink',
    type: 'input'
  },
  date: {
    label: 'Date',
    name: 'date',
    type: 'input',
    errorMessage: 'the date the tournament will be held'
  },
  startTime: {
    label: 'Start',
    name: 'startTime',
    type: 'input',
    errorMessage: 'a start time'
  },
  endTime: {
    label: 'End',
    name: 'endTime',
    type: 'input',
    errorMessage: 'an end time'
  },
  venueFee: {
    label: 'Venue Fee',
    name: 'venueFee',
    type: 'input'
  },
  entryFee: {
    label: 'Entry Fee',
    name: 'entryFee',
    type: 'input'
  },
  potBonus: {
    label: 'Pot Bonus',
    name: 'potBonus',
    type: 'input'
  },
  series: {
    label: 'Is your tournament held weekly?',
    name: 'series',
    type: 'input',
    errorMessage: 'yes or no'
  },
  bannerImage: {
    label: 'Upload a tournament banner:',
    name: 'bannerImage',
    type: 'input'
  },
  description: {
    label: 'Description',
    name: 'description',
    type: 'input'
  }
};

export const unrequiredFields = [
  'tags',
  'venueFee',
  'entryFee',
  'potBonus',
  'sponsors',
  'streamLink',
  'twitterLink',
  'description'
];
