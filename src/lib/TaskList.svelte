<script lang="ts">
import dayjs from "dayjs";
 import {task} from "$lib/stores/tasks" ; 
</script>
<ol class=" gap-2 flex flex-col">
    <li class=" bg-warning-800/10 p-2 rounded-lg flex justify-between items-center">
  <div>
    <input class=" checkbox border-2" type="checkbox" checked>
    <span class=" mr-2">
      تسجيل المقطع
    </span>
  </div>
   <div>
    <button class=" btn variant-filled-surface hover:bg-surface-500 ">
      {dayjs()}
    </button>
    <button class=" btn variant-filled-surface hover:bg-surface-500 p-[0.75rem] ">
      <svg class=" w-3 h-3 rotate-90" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"><path fill="currentColor" d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m7 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"/></svg>
    </button>
   </div>   
  
    </li>
  </ol>