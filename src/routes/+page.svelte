<script lang="ts">
    import Header from "$lib/Header.svelte" ;
    import {tasks} from "$lib/stores/tasks";
    import dayjs from "dayjs";
    
    let title = ""; 
    function addTask(){
      tasks.update((currentTasks)=>{
currentTasks.push({
  title,
  assignedDate: dayjs().format("YYYY-MM-DDTHH:mm") ,
  isDone: false,
});
return currentTasks;
      });
      title = "";
    }
    
  </script>

<div class=" p-2 sm:p-4 md:p-8 lg:p-16 xl:p-32 pt-4 flex flex-col gap-9  max-w-screen-lg mx-auto">
<Header />
<div class="input-group input-group-divider flex justify-between">
	
	<input bind:value={title} class=" flex-1 !bg-white" type="search" placeholder="ادخل المهمة...." />
	<button on:click={addTask} class="variant-glass-tertiary">إضافة</button>
</div>
</div>

