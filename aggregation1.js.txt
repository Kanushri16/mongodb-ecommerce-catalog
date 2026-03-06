[
  {
    '$group': {
      '_id': '$category', 
      'avgCategoryRating': {
        '$avg': '$avgRating'
      }
    }
  }
]