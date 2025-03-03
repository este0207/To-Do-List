// button +
const btnAdd = document.querySelector("#btn_add");
const container = document.querySelector(".container");
//New task
const screen = document.querySelector(".add");
//logo
const logo1 = document.querySelector(".logo");
//btn pour add une task
const btnTask = document.querySelector(".btn_task");
// X pour fermer la fenetre de formulaire
const btn_supp = document.querySelector(".supp_element2");
// Filters
const btn_filter_plus = document.querySelector(".btn_filter_plus");
const btn_filter_moin = document.querySelector(".btn_filter_moin");
// search-bar
const searchbar = document.querySelector("#search");
const btnSubmit = document.querySelector("#btnSubmit");
// formulaire 
const desc = document.querySelector("#desc");
const title1 = document.querySelector("#title");
 // tableau pour contenir le titre et la description
export let tasksList = [];
// time
var time = new Date();
var fulldate = time.getDate()+"/"+(time.getMonth()+1)+"/"+time.getFullYear()+" "+"a"+" "+time.getHours()+"."+time.getMinutes();


import { TaskView } from "./TaskView.js";
import { TaskModel } from "./TaskModel.js";


function OnAddForm (){
    // afficher le formulaire
    screen.classList.add("active");
    //change logo scale
    logo1.classList.add("active");
}

function OnFilterMoin (){
    const reverse = tasksList.reverse();
    console.log(reverse);
    localStorage.setItem("tasksList", JSON.stringify(reverse));
    window.location = document.location;
}

// function SearchTasks (){
//         let search = searchbar.value;
//         // function pour enlever all task que visuelement 
//         if(search === ''){
//                 TaskView.addtags(tagSets, task);
//                 // Remplir les éléments avec les données de la tâche
//                 TaskView.setcontent(tagSets, task);
//                 // Placer les éléments dans le conteneur
//                 TaskView.appendtag(tagSets, task);
//         }
//         else{
//             tasksList.forEach(element =>{
//                 let result = element.titre.includes(search) || element.description.includes(search);
//                 if(result){
//                     btn_task_click()
//                 }
//             })
//         }
// }

function OnRemoveForm (){
    // retirer les formulaire
    screen.classList.remove("active");
    logo1.classList.remove("active");
}

function Checkbox(tagSets, task){
    tagSets.nouvellecheck.type = "checkbox";
    tagSets.nouvellecheck.checked = task.checkbox;
    tagSets.nouvellecheck.addEventListener('change', function() 
    {
        if (tagSets.nouvellecheck.checked) {
            task.checkbox = true;
        } else {
            task.checkbox = false;
        }
        localStorage.setItem("tasksList", JSON.stringify(tasksList));
    });
}


function btn_task_click (){
    logo1.classList.remove("active");
    //créer les const
    const nouvelleBalise = document.createElement("div");
    const nouvelleDiv = document.createElement("div");
    const nouvelleDivTop = document.createElement("div");
    const nouvelleDivBottom = document.createElement("div");
    const nouvellep = document.createElement("p");
    const newdesc = document.createElement("p");
    const date = document.createElement("p");
    const nouvellecheck = document.createElement("input");
    const nouvellesupp = document.createElement("button");
    
    // créer une task 
    const task = {
        titre : title1.value,
        description : desc.value,
        date : fulldate,
        checkbox : false,
        id : 0
    }
    
    tasksList.push(task);
    
    let tagSets = {
        nouvelleBalise,
        nouvelleDiv,
        nouvelleDivTop,
        nouvelleDivBottom,
        nouvellep,
        newdesc,
        nouvellecheck,
        nouvellesupp,
        date
    }

    TaskView.addtags(tagSets, task);
    TaskView.setcontent(tagSets, task);
    TaskView.appendtag(tagSets, task);
    TaskModel.Savetag();
    screen.classList.remove("active");

}
//a voir
function OnRemovetask (event){
    // retirer les formulaire
    const taskElement = event.target.closest(".case");
    const taskTitle = taskElement.querySelector("p").innerText;
    tasksList = tasksList.filter(task => task.titre !== taskTitle);
    localStorage.setItem("tasksList", JSON.stringify(tasksList));
    taskElement.remove();
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
        const nouvelleDivTop = document.createElement("div");
        const nouvelleDivBottom = document.createElement("div")
        const nouvellep = document.createElement("p");
        const newdesc = document.createElement("p");
        const date = document.createElement("p");
        const nouvellecheck = document.createElement("input");
        const nouvellesupp = document.createElement("button");



        // Regrouper les éléments dans un objet
        let tagSets = {
            nouvelleBalise,
            nouvelleDiv,
            nouvelleDivTop,
            nouvelleDivBottom,
            nouvellep,
            newdesc,
            nouvellecheck,
            nouvellesupp,
            date
        }


        // Ajouter les classes et attributs nécessaires aux éléments
        TaskView.addtags(tagSets, task);
        // Remplir les éléments avec les données de la tâche
        TaskView.setcontent(tagSets, task);
        // Placer les éléments dans le conteneur
        TaskView.appendtag(tagSets, task);
        TaskModel.Savetag();
        // True or False for checked
        Checkbox(tagSets, task);
        console.log(task);
    });
});

function ShowTask (tagSets, task){
    tagSets.nouvelleDivBottom.classList.toggle("active");
}

container.addEventListener("click", function(event) {
    if (event.target.closest(".case")) {
        const taskElement = event.target.closest(".case");
        const taskTitle = taskElement.querySelector("p").innerText;
        const task = tasksList.find(task => task.titre === taskTitle);
        const tagSets = {
            nouvelleDivBottom: taskElement.querySelector(".bottom")
        };
        ShowTask(tagSets, task);
    }
});
btnAdd.addEventListener("click", OnAddForm);
btn_supp.addEventListener("click", OnRemoveForm);
btn_filter_moin.addEventListener("click", OnFilterMoin);
btn_filter_plus.addEventListener("click", OnFilterMoin);
btnTask.addEventListener("click",btn_task_click);
container.addEventListener("click", function(event) {
    if (event.target.classList.contains("supp_element")) {
        OnRemovetask(event);
    }
});
