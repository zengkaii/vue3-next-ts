<template lang="pug">
div.flex-content
	el-header
		HeaderContent
	el-container(style="flex:1;")
		el-aside(width="200px")
			AsideMenu
		.view-container
			MainContent
</template>
<script lang="ts">
	import { defineComponent } from 'vue'
	import AsideMenu from './aside-menu.vue'
	import HeaderContent from './header-content.vue'
	import MainContent from './main-content.vue'
	export default defineComponent({
		name : 'LayoutContainer',
			components: {
				AsideMenu,
				HeaderContent,
				MainContent
		}
	})
</script>
<style lang="less" scoped>
.flex-content{
	height: 100vh;
	display: flex;
	flex-direction: column;
}
.el-header, .el-footer {
	background-color: @light-color;
	color: @font-dark-color;
	line-height: 60px;
	border-bottom: 1px solid @border-color;
}
.el-header{
	height: 65px!important;
	line-height: 65px;
	// background: linear-gradient(to right, @dark-color , @third-color);
	background: @second-color;
}
.el-aside {
	background-color: @second-color;
	color: @light-color;
	&::-webkit-scrollbar{
		width: 0px;
		opacity: 0;
	}
}
  
.el-main {
	background-color: @light-color;
	color: @font-dark-color;
	padding: 0;
}

body > .el-container {
	margin-bottom: 40px;
}
  
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}
  
.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
	.view-container{
		overflow-y: auto;
		flex: 1;
		height: 100%;
	}

</style>