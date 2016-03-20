module.exports= {
  nameIsNotBlank: function(input){return !input.trim() ? "Name can\'t be blank" : ""},
  priceIsNotBlank: function(input){return !input.trim() ? "Price can\'t be blank" : ""},
  imagesNotBlank: function(input){return !input.trim() ? "Image URL can\'t be blank" : ""},
  linksNotBlank: function(input){return !input.trim() ? "Purchase URL can\'t be blank" : ""},
}
