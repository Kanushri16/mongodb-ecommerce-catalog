// Aggregation: Find Low Stock Products

[
  { "$unwind": "$variants" },
  { "$match": { "variants.stock": { "$lt": 10 } } },
  {
    "$project": {
      "name": 1,
      "variants.sku": 1,
      "variants.stock": 1
    }
  }
]