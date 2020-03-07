<template>
	<div>
		<!-- 아래 버튼을 클릭하면 브라우저 저장소의 데이터를 다 
    삭제하는 코드를 구현해봐라 -->
		<h1>Todo Footer</h1>
		<button v-on:click="clearData()">clear all</button>
	</div>
</template>

<script>
// import { bus } from '../utils/eventBus';

export default {
	methods: {
		clearData: function() {
			localStorage.clear();
			this.$emit('clear');
			// bus.$emit('remove-all');
		},
	},
};
</script>

<style></style>
