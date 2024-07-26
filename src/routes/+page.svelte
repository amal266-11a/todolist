<script lang="ts">
    import Header from "$lib/Header.svelte" ;
    import {tasks} from "$lib/stores/tasks";
import dayjs from "dayjs";
    let title ="";
    function addTask(){
      tasks.update((currentTask)=>{
currentTask.push({title,
  assignedDate: dayjs(),
  isDone: false,
})
return currentTask;
      });
      title = "";
    }
    $: console.log($tasks);
  </script>

<div class=" p-16 flex flex-col gap-9">
<Header />
<div class="input-group input-group-divider flex justify-between">
	
	<input bind:value={title} class=" flex-1 !bg-white" type="search" placeholder="ادخل المهمة...." />
	<button on:click={addTask} class="variant-glass-tertiary">إضافة</button>
</div>
</div>

