// button +
const btnAdd = document.querySelector("#btn_add");
const container = document.querySelector(".container");
//New task
const screen = document.querySelector(".add");
//btn pour add une task
const btnTask = document.querySelector(".btn_task");
// X pour fermer la fenetre de formulaire
const btn_supp = document.querySelector(".supp_element2");
// formulaire 
const desc = document.querySelector("#desc");
const title1 = document.querySelector("#title");
 // tableau pour contenir le titre et la description
export let tasksList = [];


import { TaskView } from "./TaskView.js";
import { TaskModel } from "./TaskModel.js";


function OnAddForm (){
    // afficher le formulaire
    screen.classList.add("active");
}

function OnRemoveForm (){
    // retirer les formulaire
    screen.classList.remove("active");
}


function btn_task_click (){
    //créer les const
    const nouvelleBalise = document.createElement("div");
    const nouvelleDiv = document.createElement("div");
    const nouvellep = document.createElement("p");
    const nouvellecheck = document.createElement("input");
    const nouvellesupp = document.createElement("button");
    
    // créer une task 
    const task = {
        titre : title1.value,
        description : desc.value,
    }
    
    tasksList.push(task);
    
    let tagSets = {
        nouvelleBalise,
        nouvelleDiv,
        nouvellecheck,
        nouvellep,
        nouvellesupp
    }
    
    TaskView.addtags(tagSets, task);
    TaskView.setcontent(tagSets, task);
    TaskView.appendtag(tagSets, task);
    TaskModel.Save(tagSets, task);
    console.log(tasksList);
    screen.classList.remove("active");
}

// Lorsque le document est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    // Récupérer la liste des tâches depuis le localStorage ou initialiser une liste vide
    tasksList = JSON.parse(localStorage.getItem("tasksList")) || [];
    // Pour chaque tâche dans la liste des tâches
    tasksList.forEach(task => {
        // Créer les éléments nécessaires pour afficher la tâche
        const nouvelleBalise = document.createElement("div");
        const nouvelleDiv = document.createElement("div");
        const nouvellep = document.createElement("p");
        const nouvellecheck = document.createElement("input");
        const nouvellesupp = document.createElement("button");

        // Regrouper les éléments dans un objet
        let tagSets = {
            nouvelleBalise,
            nouvelleDiv,
            nouvellecheck,
            nouvellep,
            nouvellesupp
        };

        // Ajouter les classes et attributs nécessaires aux éléments
        TaskView.addtags(tagSets, task);
        // Remplir les éléments avec les données de la tâche
        TaskView.setcontent(tagSets, task);
        // Placer les éléments dans le conteneur
        TaskView.appendtag(tagSets, task);
    });
});


btnAdd.addEventListener("click", OnAddForm);
btn_supp.addEventListener("click", OnRemoveForm);
btnTask.addEventListener("click",btn_task_click);
