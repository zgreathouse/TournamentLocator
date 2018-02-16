export const FIELDS = {
  title: {
    label: 'Title',
    name: 'title',
    type: 'input',
    errorMessage: 'a title'
  },
  game: {
    label: 'Featured Game',
    name: 'game',
    type: 'input',
    errorMessage: 'at least one game'
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
    errorMessage: 'an address'
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
  },
  description: {
    label: 'Description',
    name: 'description',
    type: 'textarea'
  }
};

/*
Some fields will not be simply input or textareas field types
Still need the following fields:
  date,         (calender input)
  startTime,    (time input)
  endTime,      (time input)
  bannerImage   (file upload)
  series        (two radio buttons)
*/

export const unrequiredFields = ['tags', 'venueFee', 'entryFee', 'potBonus', 'sponsors', 'streamLink', 'twitterLink', 'description'];
