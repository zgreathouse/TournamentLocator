export const FIELDS = {
  title: {
    label: 'Title',
    name: 'title',
    type: 'input',
    errorMessage: 'a title'
  },
  game: {
    label: 'Game(s)',
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
    name: 'address',
    type: 'input',
    errorMessage: 'an address'
  },
  venueFee: {
    label: 'Venue Fee',
    name: 'venue fee',
    type: 'input'
  },
  entryFee: {
    label: 'Entry Fee',
    name: 'entry fee',
    type: 'input'
  },
  maxEntrants: {
    label: 'Max Entrants',
    name: 'max entrants',
    type: 'input',
    errorMessage: 'a max number of entrants'
  },
  potBonus: {
    label: 'Pot Bonus',
    name: 'pot bonus',
    type: 'input'
  },
  sponsors: {
    label: 'Sponsors',
    name: 'sponsors',
    type: 'input'
  },
  streamLink: {
    label: 'Stream Link',
    name: 'stream link',
    type: 'input'
  },
  twitterLink: {
    label: 'Twitter Link',
    name: 'twitter link',
    type: 'input'
  },
  description: {
    label: 'Description',
    name: 'description',
    type: 'textarea',
    errorMessage: 'some content'
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
