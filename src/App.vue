<template>
	<div>
		<todo-header></todo-header>
		<todo-list
			v-bind:list="todoItems"
			v-on:remove-todo="removeTodoItems"
		></todo-list>
		<todo-input v-on:add-todo="addTodoItem"></todo-input>
		<todo-footer v-on:clear="clearAllItems"></todo-footer>
	</div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import TodoFooter from '@/components/TodoFooter.vue';

export default {
	components: {
		TodoHeader,
		TodoInput,
		TodoList,
		TodoFooter,
	},
	data() {
		return {
			todoItems: [],
		};
	},
	methods: {
		fetchItems: function() {
			for (var i = 0; i < localStorage.length; i++) {
				var item = localStorage.key(i);
				this.todoItems.push(item);
			}
		},
		addTodoItem: function(value) {
			//뷰 데이터 목록에 값을 1개 추가
			this.todoItems.push(value);
			// DB에 값을 저장
			localStorage.setItem(value, value);
		},
		removeTodoItems: function(item, index) {
			this.todoItems.splice(index, 1);
			localStorage.removeItem(item); //localstorage 저장소까지 삭제한다.
		},
		clearAllItems: function() {
			// 뷰 데이터 목록 초기화
			this.todoItems = [];
			//DB(브라우저 저장소) 초기화
			localStorage.clear();
		},
	},
	created: function() {
		this.fetchItems();
	},
};
</script>

<style></style>
