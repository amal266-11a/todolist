<script lang="ts">
    import dayjs from "dayjs";
     import {tasks} from "$lib/stores/tasks" ; 
     import relativeTime from 'dayjs/plugin/relativeTime'
     import { slide } from 'svelte/transition';
     
     dayjs.extend(relativeTime);
     export let doneTask:boolean;
     
import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
			
      const modalStore = getModalStore();
     
      

 function confirmDelete(task:Task){
 const modal: ModalSettings = {
	type: 'confirm',
	title: 'هل انت متأكد من حذف المهمه؟',
	body:`سيتم حذف المهمه: "${task.title}"` ,
buttonTextCancel: 'الغاء',
buttonTextConfirm: 'تأكيد',
response: (r: boolean) => {
  if(r){
 tasks.update((currentTasks) => {
  let index= currentTasks.indexOf(task);
  currentTasks.splice(index, 1);
  return currentTasks;
 })
  }
}
};
modalStore.trigger(modal);
 
 }
    </script>

{#each $tasks as task}
  {#if task.isDone==doneTask}
  <li
  transition:slide
  class=" bg-warning-800/10 p-2 rounded-lg flex justify-between items-center">
    <div>
      <input bind:checked={task.isDone} class=" checkbox border-2" type="checkbox" >
      <span class=" mr-2">
        {task.title}
      </span>
    </div>
    
     <div>
      <button class=" btn variant-filled-surface hover:bg-surface-500 ">
        {dayjs().to(dayjs(task.assignedDate))}
      </button>
      <button on:click={() => confirmDelete(task )} class=" btn variant-filled-surface hover:bg-surface-500 p-[0.75rem] ">
        <svg class=" w-4 h-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="m6.774 6.4l.812 13.648a.8.8 0 0 0 .798.752h7.232a.8.8 0 0 0 .798-.752L17.226 6.4zm11.655 0l-.817 13.719A2 2 0 0 1 15.616 22H8.384a2 2 0 0 1-1.996-1.881L5.571 6.4H3.5v-.7a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v.7zM14 3a.5.5 0 0 1 .5.5v.7h-5v-.7A.5.5 0 0 1 10 3zM9.5 9h1.2l.5 9H10zm3.8 0h1.2l-.5 9h-1.2z"/></svg>
      </button>
     </div>   
    
      </li>
  {/if}
  {/each}