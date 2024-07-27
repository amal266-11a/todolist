import { persisted } from 'svelte-persisted-store'
declare global {
    interface Task{
        title:string;
        assignedDate:string;
        isDone:boolean;
    }
}

export const  tasks = persisted< Task []>('tasks', [] );