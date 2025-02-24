import { tasksList } from "./script.js";

export class TaskModel {
    // localstorage
    static Savetag (){
        localStorage.setItem("tasksList", JSON.stringify(tasksList));
    }
}