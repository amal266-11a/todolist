import { persisted } from 'svelte-persisted-store'


export let  filter = persisted< 'جميع المهام' | 'مهام اليوم'>('filter', 'جميع المهام' );