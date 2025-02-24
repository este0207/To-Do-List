const container = document.querySelector(".container");
/**
 * kyfykffff
 */
export class TaskView {
    

    static addtags (tagSets, task){
        // add les class / id
        //div des buttons
        tagSets.nouvelleDiv.classList.add("buttons")
        // grosse div
        tagSets.nouvelleBalise.classList.add("case");
        // checkbox / button 1
        tagSets.nouvellecheck.classList.add("checkbox");
        tagSets.nouvellecheck.setAttribute("type","checkbox");
        // button x
        tagSets.nouvellesupp.classList.add("supp_element");
        // balise p descrition
        tagSets.newdesc.classList.add("description");
        //div top
        tagSets.nouvelleDivTop.classList.add("top");
        //div bottom
        tagSets.nouvelleDivBottom.classList.add("bottom");
    }


    static setcontent (tagSets, task){
        // remplir les case
        tagSets.nouvellep.innerText = task.titre;
        tagSets.newdesc.innerText = task.description;
        tagSets.nouvellesupp.innerText = "X";
    }

    static appendtag (tagSets, task) {
        // placer les case 
        container.appendChild(tagSets.nouvelleBalise);
        tagSets.nouvelleBalise.appendChild(tagSets.nouvelleDivTop);
        tagSets.nouvelleBalise.appendChild(tagSets.nouvelleDivBottom);
        tagSets.nouvelleDivBottom.appendChild(tagSets.newdesc);
        tagSets.nouvelleDivTop.appendChild(tagSets.nouvellep);
        tagSets.nouvelleDivTop.appendChild(tagSets.nouvelleDiv);
        tagSets.nouvelleDiv.appendChild(tagSets.nouvellecheck);
        tagSets.nouvelleDiv.appendChild(tagSets.nouvellesupp);

    }

}