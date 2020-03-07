<template>
	<div>
		<h1>Todo input</h1>
		<input type="text" v-model="inputText" />
		<!-- <input type="text" v-on:input="changeText" v-bind:value="testData" /> -->
		<button v-on:click="addItem">add</button>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			inputText: '',
			// testData: '',
		};
	},
	methods: {
		addItem: function() {
			// 아래서 위로 올릴 이벤트를 만들어준다.
			var value = this.inputText;
			// localStorage.setItem(value, value);
			this.$emit('add-todo', value);
			this.clearInput(); //methods 끼리 참조할 수 있다.
		},
		changeText: function(event) {
			// console.log('entered', event.target.value);
			this.testData = event.target.value;
		},
		clearInput: function() {
			this.inputText = '';
		},
	},
};
</script>

<style></style>
