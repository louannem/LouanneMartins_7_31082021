

export let filtres = [];
export default function updateFilters() {
    let tags = document.querySelectorAll('.dropdown-menu span');
    for(let i = 0; i < tags.length; i++){
        let addedTag = () => {
            filtres.push(tags[i].innerText)
        }
        tags[i].addEventListener('click', addedTag)
    }  
    
    if(filtres.length > 0) { 
        let filtresArray = document.querySelectorAll('#added-tags .added-tag')
        for(let j = 0; j < filtresArray.length; j++) {
            let removeTag = () => {
                for(let k = 0; k < filtres.length; k++) {
                    if(filtres[k] == filtresArray[j].innerText) { filtres.splice(k,1); k-- }
                }
            }
            filtresArray[j].addEventListener('click', removeTag)   
        }
    }
    let uniqueArray = filtres.filter(function(item, pos) {
        return filtres.indexOf(item) == pos;
    })
    return uniqueArray
}