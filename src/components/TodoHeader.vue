<template>
	<h1>Todo Header</h1>
</template>

<script>
export default {
	// <h1>Todo Header</h1> 와 같음 아래
	// render: function(creatElement) {
	//     return creatElement('h1', 'todoApp');
	// }

	created() {
		var h1 = document.querySelector('h1');
		console.log('TodoHeader.vue 에서 created 출력', h1);
	},
	beforeMount() {
		var h1 = document.querySelector('h1');
		console.log('TodoHeader.vue 에서 before Mount 출력', h1);
	},
	mounted() {
		var h1 = document.querySelector('h1');
		console.log('TodoHeader.vue 에서 mounted 출력', h1);
	},
};
</script>

<style scoped>
h1 {
	color: blue;
}
</style>
