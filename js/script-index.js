$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	$('.js-back').hide();

	function printNews(){
		$('p').text('NUEVAS RECETAS');
	};
	printNews();
});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	for (var i = 0; i < recipesArray.length; i++) {
		if(recipesArray[i].highlighted==true){
			renderRecipe(recipesArray[i]);
			console.log('Recipes: ', recipesArray[i]);	
		}
		 
	}
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	var a = $('<a/>',{'class': 'item-recipe'});
	var span1 = $('<span/>', {'class':'attribution'});
	var span2 = $('<span/>', {'class':'title-recipe'});
	span2.text(recipe.title);
	var span3 = $('<span/>', {'class':'metadata-recipe'});
	var span4 = $('<span/>', {'class':'author-recipe'});
	span4.text(recipe.source.name);
	var span5 = $('<span/>', {'class':'bookmarks-recipe'});
	var span6 = $('<span/>', {'class':'icon-bookmark'});
	var img = $('<img/>', {'src': 'img/recipes/320x350/'+recipe.name+'.jpg'});


	$('.list-recipes').append(a);
	$(a).append(span1);
	$(span1).append(span2);
	$(span2).after(span3);
	$(span3).append(span4);
	$(span4).after(span5);
	$(span5).append(span6);
	$(span1).after(img);

}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


