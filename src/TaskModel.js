import { tasksList } from "./script.js";

export class TaskModel {
    // localstorage
    static Save (tagSets, task){
        localStorage.setItem("tasksList", JSON.stringify(tasksList));
    }
}