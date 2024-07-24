<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
    import dayjs from 'dayjs';
    import 'dayjs/locale/ar';
    let period=dayjs().format('a')=='م'?'مساء':'صباح';
    dayjs.locale('ar');
    
let comboboxValue: string='جميع المهام';

const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				
</script>
    
    
    
    <header class=" flex justify-between">
        <div>
            <h4 class=" text-xl text-yellow-950 mb-2">
                {period} الخير👋
                    
            </h4>
            <h2 class=" text-xs text-surface-900/50 ">
                {dayjs().format('اليوم, dddd D MMM YYYY')}
            </h2>
        </div>
        
        
<button class="btn variant-filled w-48 justify-between" use:popup={popupCombobox}>
	<span >{comboboxValue }</span>
	<span class=" !m-0"><svg xmlns="http://www.w3.org/2000/svg" class=" w-6 rotate-90 h-fit py-1" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82"/></svg></span>
</button>

<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
	<ListBox rounded="rounded-none">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="مهام اليوم">مهام اليوم</ListBoxItem>
		
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>
					
					
    </header>