<script lang="ts">
import dayjs from 'dayjs';
import 'dayjs/locale/ar';

dayjs().locale('ar');

</script>
<div class=" p-16">
	<header class=" flex justify-between">
		<div>
			<h4 class=" text-xl text-yellow-950 mb-2">
				صباح الخير👋
					
			</h4>
			<h2 class=" text-xs text-surface-900/50 ">
				{dayjs().format('اليوم, dddd D MMM YYYY')}
			</h2>
		</div>
		
		<div class=" bg-slate-200 w-20 h-26">

		</div>
	</header>
</div>

