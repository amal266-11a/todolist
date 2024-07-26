// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare global  {
interface Task{
	title:string;
	assignedDate:string;
	isDone:boolean;
};	
}
// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}