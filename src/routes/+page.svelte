<script lang="ts">
    import Header from "$lib/Header.svelte" ;
    import TaskInput from "$lib/TaskInput.svelte";
    import TaskList from "$lib/TaskList.svelte";
   
   
    
  </script>

<div class=" p-2 sm:p-4 md:p-8 lg:p-16 xl:p-32 pt-4 flex flex-col gap-9  max-w-screen-lg mx-auto">
<Header />
<TaskInput/>
<TaskList/>

</div>

