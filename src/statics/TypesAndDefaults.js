export const albumObject = {
  cover: '',
  title: '',
  artist: '',
  length: ''
}

export const youtubeSearchConfig = {
  maxResults: 10,
  key: 'AIzaSyDSYCcZfNICbkuweKxnrpCLTse_nO_FFgA',
  safeSearch: 'none',
  type: 'video'
}

export const videoLengths = [
  {
    label: 'Short',
    value: 'short'
  },
  {
    label: 'Medium',
    value: 'medium'
  },
  {
    label: 'Long',
    value: 'long'
  }
]

export const videoQualities = [
  {
    label: 'Any',
    value: 'any'
  },
  {
    label: 'High',
    value: 'high'
  },
  {
    label: 'Standard',
    value: 'standard'
  }
]

export const listOrdering = [
  {
    label: 'Date',
    value: 'date'
  },
  {
    label: 'Rating',
    value: 'rating'
  },
  {
    label: 'Relevance',
    value: 'relevance'
  },
  {
    label: 'Title',
    value: 'title'
  },
  {
    label: 'Views count',
    value: 'viewCount'
  }
]

export const searchDefaults = {
  stringMain: '',
  stringOr: '',
  stringNot: '',
  videoLength: 'short',
  videoQuality: 'any',
  resultsOrder: 'relevance',
  resultsPerPage: '10'
}