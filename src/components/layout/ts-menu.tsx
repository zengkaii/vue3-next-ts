// import Vue, {CreateElement, VNode} from 'vue'
import {defineComponent, VNode} from 'vue'
import { MenuList } from '@/model/Store.ts'
import {ElMenu, ElMenuItem, ElMenuItemGroup, ElSubmenu} from 'element-plus'

export default defineComponent({
	name : 'TsMenu',
  inheritAttrs: false,
	props: {
		menuList:{
			type:  Array,
			default: () =>{
				return []
			}
		},
		backgroundColor: {
			type: String
		},
		activeTextColor: {
			type: String
		},
		textColor: {
			type: String
		}
	},
	emits: ['menuClick'],
	setup(props, context) {
		
	},
	methods: {
		menuClickMethod(i) {
			this.$emit('menuClick', i)
		}
	},
	render() {
		const that = this
		const children: any[] = []
		function menuRender(item: MenuList): VNode {
			let subNode: any
			if (item.children && item.children.length > 0) {
					let menuItemNodes: any[]
					menuItemNodes =  item.children.map( i => {
						if (i.children && i.children.length > 0) {
								return menuRender(i)
						} else {
							return (
								<ElMenuItem index={i.id.toString()} v-on-click={that.menuClickMethod(i)}>
									<span>
										{i.label}
									</span>
								</ElMenuItem>
							)
						}
					})
					subNode = (
						<ElSubmenu index={item.id.toString()} >
							<template v-slot="title">
								<span>
									{item.label}
								</span>
							</template>
							<ElMenuItemGroup>
								{menuItemNodes}
							</ElMenuItemGroup>
						</ElSubmenu>
					)
			} else {
				subNode = (
					<ElMenuItem index={item.id.toString()} v-on-click={that.menuClickMethod(item)}>
						<span>
							{ item.label}
						</span>
					</ElMenuItem>
				)
			}
			return subNode
		}
		this.menuList.forEach((item: MenuList) => {
			children.push(menuRender(item))
		})
		return (
			<ElMenu backgroundColor={this.backgroundColor} textColor={this.textColor} activeTextColor={this.activeTextColor}>
				{children}
			</ElMenu>
		)
	}
})
