import { recipes } from "../data/recipes";
import { Recipe } from "../components/Recipe";
import addRecipes from "../utils/addRecipes";
import clearPage from "../utils/clearPage";


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
            document.getElementById('no-result').style.display="";
    }


    const input = document.getElementById('search-input');
    /**
    * Fonction pour rechercher les recettes par mot-clé
    */ 
    let globalSearch = () => {
        const searchInput = input.value.toLowerCase();
        
        if(searchInput.length > 2) {
            for(let i = 0; i < recipes.length; i++) {
                let recipeName = recipes[i].name.toLowerCase();
                //La recherche comprend le nom de la recette, les appareils et la description
                if(recipeName.includes(searchInput) || recipes[i].appliance.includes(searchInput) || recipes[i].description.includes(searchInput)) {
                    let newRecipes = new Recipe(recipes[i]);
                    resultsArray.push(newRecipes);
                } 
            } 
            if(resultsArray.length > 0) {
                //Afficher les recettes ici           
                clearPage(); 
                document.getElementById('no-result').style.display="none";

                let removeDupl = resultsArray.reduce((unique, elem) => {
                    if(!unique.some(obj => obj.id === elem.id)){unique.push(elem);}
                    return unique
                }, []);
                addRecipes(removeDupl);
                
            } else if (resultsArray.length == 0){
                //Afficher qu'aucune recette n'a été trouvée
                clearPage();
                document.getElementById('no-result').style.display = "block";
                document.getElementById('no-result').innerText = "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc. "
            }
            //Si l'utilisateur supprime les caractères, on remet toute les recettes
        } else if (searchInput.length < 3) {
                clearPage();
                addRecipes(recipes);
                document.getElementById('no-result').style.display = "none";
        }
    }
    input.addEventListener('input', globalSearch);

     
    /**
    * Fonction pour fitlrer les listes de dropdown avec les input
    * @param {string} input Input de la liste
    * @param {string} listID Liste à trier
    */
     // eslint-disable-next-line no-unused-vars
     let filterList = (input, listID) => {
        let searchInput, ElementSpan, text;

        searchInput = input.value.toLowerCase();
        ElementSpan = document.querySelectorAll('.dropdown-menu span');

        for(let i = 0; i < ElementSpan.length; i++) {
            text = ElementSpan[i].innerText.toLowerCase() || ElementSpan[i].textContent.toLowerCase();

            if(text.indexOf(searchInput) > -1) {
                ElementSpan[i].style.display="";
            } else { ElementSpan[i].style.display="none"}
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

