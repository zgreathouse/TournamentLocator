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
  maxEntrants: {
    label: 'Max Entrants',
    name: 'maxEntrants',
    type: 'input',
    errorMessage: 'a max number of entrants'
  },
  potBonus: {
    label: 'Pot Bonus',
    name: 'potBonus',
    type: 'input'
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
  }
};

/*
Some fields will not be simply input field types
Still need the following fields:
  date,         (calender input)
  startTime,    (time input)
  endTime,      (time input)
  bannerImage   (file upload)
  series        (two radio buttons)
  description   (textarea, needs to be larger than input fields)
*/

export const unrequiredFields = ['tags', 'venueFee', 'entryFee', 'potBonus', 'sponsors', 'streamLink', 'twitterLink', 'description'];
