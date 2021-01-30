<template lang="pug">
.aside-container
	.aside-search
		TsMenu(:menuList="menuList" :backgroundColor="'#545c64'" :textColor="'#fff'" :activeTextColor="'#ffd04b'" @menuClick="menuClick")
</template>
<script lang="ts">
	import { defineComponent, computed } from 'vue'
	import {useRouter, useRoute} from "vue-router";
	import Types from '../../store/types'
	import { MenuList } from '@/model/Store.ts'
	import TsMenu from './ts-menu'
	import {useStore} from "vuex";
	export default defineComponent({
		name : 'AsideMenu',
		components: {
			TsMenu
		},
		setup() {
			const store = useStore()
			const router = useRouter()
			const route = useRoute()
			const menuList = computed(() => {
					return store.getters.menuList
			})

			// mehtods
			function  menuClick(item: MenuList) {
					if (!item.path) {
							return
					}
					const path: string = item.path
					const currentPath: string = route.path
					if (path === currentPath) {
							return
					}
					router.push(path)
			}

			return {
					menuList,
					menuClick
			}
		},
	}) 
</script>
<style lang="less" scoped>
.aside-container{
    // width: 201px;
    .aside-search{
        /deep/ .el-submenu .el-menu-item{
            min-width: 199px;
        }
    }
}
// .aside-container{
// 	// position: relative;
// 	padding: 5px;
// 	// margin-top: 40px;
// 	padding-top: 30px;
// 	.aside-search{
// 		position: fixed;
// 		top: 75px;
// 		left: 0px;
// 		// right: 0px;
// 		z-index: 100;
// 		/deep/ .el-input{
// 			width: 202px;
// 		}
// 		/deep/ .el-input__inner{
// 			border-radius: 0px;
// 		}
// 	}
//     .filter-tree{
//         background-color: @second-color;
//         color: @light-color;
//     }
//     /deep/ .el-tree-node__content:hover{
//         background: @dark-color!important;
//     }
//     /deep/ .el-tree-node:focus>.el-tree-node__content{
//         background: @dark-color!important;
//     }
// }
</style>