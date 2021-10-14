

export let filtres = [];

/**
 * Fonction pour mettre à jour la liste de filtres au clic
 * @returns Retourne la liste de filtres
 */
export default function updateFilters() {
    let tags = document.querySelectorAll('.dropdown-menu span');

    /**
     * Ajoute un filter dans la liste
     */
    for(let i = 0; i < tags.length; i++){
        let addedTag = () => {
            filtres.push(tags[i].innerText)
        }
        tags[i].addEventListener('click', addedTag)
    }  
    
    if(filtres.length > 0) { 
        let filtresArray = document.querySelectorAll('#added-tags .added-tag')
        for(let j = 0; j < filtresArray.length; j++) {
            /**
             * Supprime un filtre dans la liste
             */
            let removeTag = () => {
                for(let k = 0; k < filtres.length; k++) {
                    if(filtres[k] == filtresArray[j].innerText) { filtres.splice(k,1); k-- }
                }
            }
            filtresArray[j].addEventListener('click', removeTag)   
        }
    }
    /**
     * Supprime les doublons
     */
    let uniqueArray = filtres.filter(function(item, pos) {
        return filtres.indexOf(item) == pos;
    })
    return uniqueArray
}