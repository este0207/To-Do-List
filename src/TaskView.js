const container = document.querySelector(".container");
/**
 * kyfykffff
 */
export class TaskView {
    
    /**
     * 
     * @param {HTMLElement[]} tagSets 
     * @param {*} task 
     */

    static addtags (tagSets, task){
        // add les class / id
        tagSets.nouvelleDiv.classList.add("buttons")
        tagSets.nouvelleBalise.classList.add("case");
        tagSets.nouvellecheck.classList.add("checkbox");
        tagSets.nouvellecheck.setAttribute("type","checkbox");
        tagSets.nouvellesupp.classList.add("supp_element");
    }

    /**
     * 
     * @param {*} tagSets 
     * @param {*} task 
     */

    static setcontent (tagSets, task){
        // remplir les case
        tagSets.nouvellep.innerText = task.titre;
        tagSets.nouvellesupp.innerText = "X";
    }

    /**
     * 
     * @param {*} tagSets 
     * @param {*} task 
     */

    static appendtag (tagSets, task) {
        // placer les case 
        container.appendChild(tagSets.nouvelleBalise);
        tagSets.nouvelleBalise.appendChild(tagSets.nouvellep) ;
        tagSets.nouvelleBalise.appendChild(tagSets.nouvelleDiv);
        tagSets.nouvelleDiv.appendChild(tagSets.nouvellecheck);
        tagSets.nouvelleDiv.appendChild(tagSets.nouvellesupp);
    }
}