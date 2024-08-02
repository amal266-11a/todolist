<script lang="ts">
     import {tasks} from "$lib/stores/tasks";
     import dayjs from "dayjs";
     let title = "";
     let datetime= dayjs().add(1, "hour").format('YYYY-MM-DDTHH:mm'); 
    function addTask(){
      tasks.update((currentTasks)=>{
currentTasks.push({
  title,
  assignedDate: datetime ,
  isDone: false,
});
return currentTasks.sort((a:Task, b:Task) => {
 return dayjs(a.assignedDate).unix() - dayjs(b.assignedDate).unix();
});
      });
      title = "";}
</script>
<form class="input-group input-group-divider flex flex-col sm:flex-row justify-between !bg-white ">
	
	<input bind:value={title} class=" flex-1 " type="search" placeholder="ادخل المهمة...." />
	<input
  bind:value={datetime}
   class="input sm:w-fit" title="Input (datetime-local)" type="datetime-local"
   />
  <button type="submit" on:click={addTask} class="variant-glass-tertiary p-2 {title.trim().length == 0?' bg-zinc-300' : ''}" disabled={title.trim().length == 0}>
   <span class=" mx-auto">
أضافه
  </span>
</button>
</form>
