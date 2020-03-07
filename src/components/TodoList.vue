<template>
	<div>
		<h1>Todo List</h1>
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<!--위랑 동일합니다. -->
			<hr />
			<li v-for="(item, index) in list" v-bind:key="index">
				<span>{{ item }}</span>
				<button v-on:click="removeItem(item, index)">Remove</button>
			</li>
			<!-- <button v-on:click="fetchItems">목록조회</button> -->
		</ul>
	</div>
</template>

<script>
import { bus } from '../utils/eventBus';

export default {
	props: {
		list: Array,
	},
	// data() {
	// 	return {
	// 		todoItems: [100, 2, 3],
	// 	};
	// },
	methods: {
		// fetchItems: function() {
		// 	for (var i = 0; i < localStorage.length; i++) {
		// 		var item = localStorage.key(i);
		// 		this.todoItems.push(item);
		// 	}
		// 	// this.todoItems = [100, 2, 3];
		// },
		removeItem: function(item, index) {
			//아래 로직이 여기 있으면 안됨 app.vue로 이동해야한다.
			// this.todoItems.splice(index, 1);
			// localStorage.removeItem(item); //localstorage 저장소까지 삭제한다.
			// console.log('clicked', item, index);
			this.$emit('remove-todo', item, index);
		},
		removeItems: function() {
			this.todoItems = []; // list가 사라져야함
		},
	},
	// created: function() {
	// 	console.log('created');
	// 	this.fetchItems();
	// },
	beforeMount: function() {
		// JSON.parse();
		// JSON.stringify();
		// console.log('before mount');
		bus.$on('remove-all', this.removeItems); // bus 이벤트를 받는다
	},
	beforeDestroy: function() {
		bus.$off('remove-all', this.removeItem);
	},
};
</script>

<style></style>
