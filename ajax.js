$( document ).ready(function() {

$.ajax({
	  type: 'GET',
	  url: 'https://fakestoreapi.com/products',
	  success: function(response) {
	  	var text="";

	    $.each(response, function( key, value ) {
	 
		text+=`<div class="col-4 m-l-4">
				<img src="${value.image}">
	    		<a href="urunDetay.html?productId=${value.id}"><p>${value.title}</p></a>
			</div>`;
		});

	$('.productContainer').html(text);
  }
 });

});

