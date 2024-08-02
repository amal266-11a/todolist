<script lang="ts">
import dayjs from "dayjs";
  
 import relativeTime from 'dayjs/plugin/relativeTime'
import TaskListItems from "$lib/TaskListItems.svelte";
    import { filter } from "@skeletonlabs/skeleton";
    import { tasks } from "./stores/tasks";
    import { fade } from "svelte/transition";

 dayjs.extend(relativeTime);
</script>

{#if $tasks.length == 0}
 <div class=" flex items-center justify-center h-[50dvh]">

  لايوجد مهام
 </div>

{:else}
{#if $tasks.filter((task) => !task.isDone).length > 0 }
 <ol transition:fade class=" gap-2 flex flex-col">
  <h3>
    المهام المتبقيه
    <TaskListItems doneTask={false}/>
  </h3>
    
</ol>
{/if}
{#if $tasks.filter((task) => task.isDone).length > 0 }
<ol transition:fade  class=" gap-2 flex flex-col">
  <h3>
    المهام المكتمله
  </h3>
  <TaskListItems doneTask={true}/>
   
</ol>
{/if}
{/if}