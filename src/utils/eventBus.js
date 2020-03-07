// 파일에다가 인스턴스를 만들것이다.
import Vue from 'vue';

export var bus = new Vue(); // export를 넣어주면 다른곳에서 사용가능함

//a.js 라고 하면 아래처럼 쓰면됨
// import { bus } from './eventBus.js';
