<script lang="ts">
import dayjs from "dayjs";
 import {tasks} from "$lib/stores/tasks" ; 
 import relativeTime from 'dayjs/plugin/relativeTime'
import TaskListItems from "$lib/TaskListItems.svelte";
 dayjs.extend(relativeTime);
</script>
<ol class=" gap-2 flex flex-col">
  <h3>
    المهام المتبقيه
    <TaskListItems doneTask={false}/>
  </h3>
    
</ol>

<ol class=" gap-2 flex flex-col">
  <h3>
    المهام المكتمله
  </h3>
  <TaskListItems doneTask={true}/>
   
</ol>