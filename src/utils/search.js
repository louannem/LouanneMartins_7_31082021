import { recipes } from "../data/recipes";
import clearPage from "../utils/clearPage";
import addRecipes from "../utils/addRecipes";


//Liste des recettes recherchées à récupérer et filtrer
export let resultsArray = [];

/**
 * Fonction pour rechercher les recettes par mot-clé
 */
export default function searchFunction() {

    //Si aucune recette n'a été recherchée
    //On affiche l'ensemble de la liste de recettes
    if(resultsArray.length == 0) {
           //Ajoute les ingrédients
            addRecipes(recipes);
    }


    const input = document.getElementById('search-input');
    
    /**
     * Fonction pour rechercher les recettes par mot-clé
     */
    let globalSearch = () => {
        const searchInput = input.value.toLowerCase();
        
        if(searchInput.length > 2) {
            resultsArray = recipes.filter(recipe => {
                return(
                    recipe.name.toLowerCase().includes(searchInput) ||
                    recipe.description.toLowerCase().includes(searchInput) 
                )
            });
            if(resultsArray.length > 0) {
                //Afficher les recettes ici
                clearPage(); 
                    document.getElementById('no-result').style.display = "none";
                    addRecipes(resultsArray);
    
            } else if (resultsArray.length == 0){
                //Afficher qu'aucune recette n'a été trouvée
                clearPage();
                document.getElementById('no-result').style.display = "block";
                document.getElementById('no-result').innerText = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc."

            }
            //Si l'utilisateur supprime les caractères, on remet toute les recettes
        } else if (searchInput.length < 3) {
                clearPage(); addRecipes(recipes);
                document.getElementById('no-result').style.display = "none";
                //Réinitialise la liste
                resultsArray = [];
        }
    }
    input.addEventListener('input', globalSearch);

     /**
      * Fonction pour fitlrer les listes de dropdown avec les input
      * @param {string} input Input de la liste
      * @param {string} listID Liste à trier
      */
     let filterList = (input, listID) => {
        let searchInput, listName, ElementSpan, text;

        searchInput = input.value.toLowerCase();
        // eslint-disable-next-line no-unused-vars
        listName = document.getElementById(listID);
        ElementSpan = document.querySelectorAll('.dropdown-menu span');

        for(let i = 0; i < ElementSpan.length; i++) {
            text = ElementSpan[i].innerText.toLowerCase() || ElementSpan[i].textContent.toLowerCase();

            if(text.indexOf(searchInput) > -1) {
                ElementSpan[i].style.display="";
            } else { ElementSpan[i].style.display = "none"}

            if(text == "undefined") { ElementSpan[i].style.display="none"}
        }
    }


    let ingredientInput = document.getElementById('ingredient-input');
    let appareilsInput = document.getElementById('appareils-input');
    let ustensilesInput = document.getElementById('ustensiles-input');


    let ingredientsSearch = () => {
        filterList(ingredientInput, 'ingredients-list');
    }
    ingredientInput.addEventListener('input', ingredientsSearch);


    let appareilsSearch = () => {
        filterList(appareilsInput, 'appareils-list');
    }
    appareilsInput.addEventListener('input', appareilsSearch);

    let ustensilesSearch = () => {         
        filterList(ustensilesInput, 'ustensiles-list');
    }
    ustensilesInput.addEventListener('input', ustensilesSearch);

}

