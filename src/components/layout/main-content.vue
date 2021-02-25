<template lang="pug">
.main-container
	router-view
</template>
<script lang="ts">
	import {defineComponent} from 'vue'
	export default defineComponent({
		name : 'MainContent'
	})
</script>
<style lang="less" scoped>
.main-container{
	height: 100%;
	.tag-row{
		overflow-y: scroll;
		height: 30px;
		line-height: 30px;
		margin-bottom: 10px;
		box-shadow: 0px 5px 5px -5px @dark-color;
	}
	.tag-row::-webkit-scrollbar{
		width: 6px;
	}
	.tag-row::-webkit-scrollbar-track {
		border-radius:10px;
	}
	.tag-row::-webkit-scrollbar-thumb {
		border-radius:10px;
		background: @waring-color;
	}
	.container{
		padding: 40px 20px;
	}
}   
</style>