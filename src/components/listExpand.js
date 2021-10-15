/**
 * Fonction pour afficher les listes dropdowns
 */
 export default function listExpand() {
    let inputIngredient = document.getElementById('ingredient-input');
    let boxIngredients = document.getElementById('ingredients-expand');
    let inputAppareil = document.getElementById('appareils-input');
    let boxAppareil = document.getElementById('appareils-expand');
    let inputUsentiles = document.getElementById('ustensiles-input');
    let boxUstensiles = document.getElementById('ustensiles-expand');
    
    /**
     * 
     * @param {String} paraStyle1 Elément parent avec input
     * @param {String} paraStyle2 Elément enfant avec liste
     * @param {Number} size  Taille de la boite ouverte
     * @param {String} paraClass1 Elément parent
     * @param {String} paraClass2 Elément enfant
     * @param {String} classe Nom de la classe à ajouter
     */
    let addingClass = (paraStyle1, paraStyle2,size,paraClass2,classe) => {
        paraStyle1.style.width=size;
        paraStyle2.style.width=size;
        paraClass2.classList.add(classe);
    }
    
    /**
     * 
     * @param {String} paraStyle1 Elément parent avec input
     * @param {String} paraStyle2 Elément enfant avec liste
     * @param {Number} size  Taille de la boite fermée
     * @param {String} paraClass1 Elément parent
     * @param {String} paraClass2 Elément enfant
     * @param {String} classe Nom de la classe à ajouter
     */
    let removingClass = (paraStyle1, paraStyle2,size,paraClass2,classe) => {
        paraStyle1.style.width=size;
        paraStyle2.style.width=size;
        paraClass2.classList.remove(classe);
    }


    /**
     * 
     * @param {String} paraEvent1 Elément actionnant la fonction
     * @param {String} paraEvent2 Elément actionnant la fonction
     * @param {String} fonction Nom de la fonction
     */

    let callFonction = (paraEvent2, fonction) => {
        paraEvent2.addEventListener('click', fonction);
    }

    /**
     * Bloque l'exécution d'une fonction pour les input
     * @param {String} e 
     */
    let stopEvent = (e) => { e.stopImmediatePropagation(); }


    /**
     * Fonction pour gérer la recherche dans la liste d'ingrédients
     */
    let searchIngredient = () => {
        
        let searchWrapper = document.getElementById('ingredients-search');
        let listWrapper = document.getElementById('ingredients-list');

        if(searchWrapper.classList.contains('show')) { 
            inputIngredient.removeEventListener('click', stopEvent)
            removingClass(searchWrapper, listWrapper, "170px",listWrapper, "grid-list");      
            inputIngredient.setAttribute('placeholder', 'Ingrédient');

        } else { 
            inputIngredient.addEventListener('click', stopEvent); 
            inputIngredient.setAttribute('placeholder', 'Rechercher un ingrédient');
            addingClass(searchWrapper, listWrapper, "500px",listWrapper, "grid-list");    
        }
       
    }
   callFonction(boxIngredients,searchIngredient);




   /**
    * Fonction pour gérer la recherche dans la liste d'appareils
    */
    let searchAppareils = () => {
        let searchWrapper = document.getElementById('appareils-search');
        let listWrapper = document.getElementById('appareils-list');

        if(searchWrapper.classList.contains('show')) {
            inputAppareil.removeEventListener('click', stopEvent)
            removingClass(searchWrapper, listWrapper, "170px",listWrapper, "grid-list-appareils");
            inputAppareil.setAttribute('placeholder', 'Appareils');
        } else { 
            inputAppareil.addEventListener('click', stopEvent);
            inputAppareil.setAttribute('placeholder', 'Rechercher un appareil');
            addingClass(searchWrapper, listWrapper, "500px",listWrapper, "grid-list-appareils");
        }
    }
    callFonction(boxAppareil,searchAppareils)



    /**
     * Fonction pour gérer la recherche dans la liste d'ustensiles
     */
    let searchUstensiles = () => {
        let searchWrapper = document.getElementById('ustensiles-search');
        let listWrapper = document.getElementById('ustensiles-list');

        if(searchWrapper.classList.contains('show')) {
            inputUsentiles.removeEventListener('click', stopEvent)
            removingClass(searchWrapper, listWrapper, "170px",listWrapper, "grid-list");
            inputUsentiles.setAttribute('placeholder', 'Ustensiles');
        } else { 
            inputUsentiles.addEventListener('click', stopEvent)
            addingClass(searchWrapper, listWrapper, "500px",listWrapper, "grid-list");
            inputUsentiles.setAttribute('placeholder', 'Rechercher un ustensile');
        }
    }
    callFonction(boxUstensiles, searchUstensiles);

 
    let dropdownElem = document.querySelectorAll('.dropdown-toggle');
    dropdownElem.forEach(element => {
        /**
         * Fonction pour fermer les dropdowns quand une autre est ouverte
         */
        element.addEventListener('click', function(){
            let appareilExp = boxAppareil.getAttribute('aria-expanded'), ustExp = boxUstensiles.getAttribute('aria-expanded'), ingrExp = boxIngredients.getAttribute('aria-expanded')
            
            //Si l'élément ouvert est en true et le nouvel élément cliqué es encore sur false
            //On cache la liste et on agrandi/réduit les dropdown
            if(appareilExp == "true" && element.getAttribute('aria-expanded') == "false") { boxAppareil.nextElementSibling.classList.remove('show'); searchAppareils()}
            else if (ingrExp == "true" && element.getAttribute('aria-expanded') == "false") { boxIngredients.nextElementSibling.classList.remove('show'); searchIngredient();}
            else if (ustExp == "true" && element.getAttribute('aria-expanded') == "false") { boxUstensiles.nextElementSibling.classList.remove('show'); searchUstensiles();}
     
        } )
    });  
}