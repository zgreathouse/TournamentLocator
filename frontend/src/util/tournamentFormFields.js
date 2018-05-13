export const GENERAL_FIELDS = {
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
  // bannerImage: {
  //   label: 'Upload a tournament banner:',
  //   name: 'bannerImage',
  //   type: 'input'
  // }
}

export const LOCATION_FIELDS = {
  city: {
    label: 'City',
    name: 'city',
    type: 'input',
    errorMessage: 'the city where this tournament will be held'
  },
  streetAddress: {
    label: 'Street Address',
    name: 'streetAddress',
    type: 'input',
    errorMessage: 'the street address where this tournament will be held'
  }
}

export const SOCIAL_FIELDS = {
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
  }
}

export const TIME_FIELDS = {
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
  }
}

export const FEES_FIELDS = {
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
  }
}

export const FIELDS = Object.assign({}, GENERAL_FIELDS, LOCATION_FIELDS, SOCIAL_FIELDS, TIME_FIELDS, FEES_FIELDS)

export const unrequiredFields = [
  'tags',
  'bannerImage',
  'sponsors',
  'streamLink',
  'twitterLink',
  'venueFee',
  'entryFee',
  'potBonus',
  'description'
];
