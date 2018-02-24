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
  venueAddress: {
    label: 'Address',
    name: 'venueAddress',
    type: 'input',
    errorMessage: 'the address where this tournament will be held'
  },
  maxEntrants: {
    label: 'Max Entrants',
    name: 'maxEntrants',
    type: 'input',
    errorMessage: 'a max number of entrants'
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
  //date input
  date: {
    label: 'Date',
    name: 'date',
    type: 'input',
    errorMessage: 'the date he tournament will be held'
  },
  //time inputs
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
  // money inputs
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
