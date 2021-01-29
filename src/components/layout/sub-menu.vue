<template lang="pug">
    el-submenu(:index='item.id' v-for="(item,index) in menus" :key="index" v-if="item.type === 'menu'")
        template(slot="title")
            span {{item.label}}
        el-menu-item-group(v-for="(citem,cindex) in item.children" v-if="item.type === 'menu'" :key="index")
            el-menu-item(index='') {{citem.label}}
            el-menu-item(index='') {{citem.label}}	
</template>
<script lang="ts">
	import { defineComponent } from 'vue'
	export default defineComponent({
		props: {
			menus: {
				type: Array
			}
		}
	})
</script>
<style lang="less" scoped>
</style>