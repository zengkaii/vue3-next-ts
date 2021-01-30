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
	// setup(props, context) {
		// const children: any[] = []
		// function menuRender(item: MenuList): VNode {
		// 	let subNode: any
		// 	if (item.children && item.children.length > 0) {
		// 			let menuItemNodes= [] as any[]
		// 			menuItemNodes =  item.children.map( i => {
		// 				if (i.children && i.children.length > 0) {
		// 						return menuRender(i)
		// 				} else {
		// 					return (
		// 						<ElMenuItem index={i.id.toString()} v-on-click={context.emit('menuClick',i)}>
		// 							<span>
		// 								{i.label}
		// 							</span>
		// 						</ElMenuItem>
		// 					)
		// 				}
		// 			})
		// 			subNode = (
		// 				<ElSubmenu index={item.id.toString()} >
		// 					<template v-slot="title">
		// 						<span>
		// 							{item.label}
		// 						</span>
		// 					</template>
		// 					<ElMenuItemGroup>
		// 						{menuItemNodes}
		// 					</ElMenuItemGroup>
		// 				</ElSubmenu>
		// 			)
		// 	} else {
		// 		subNode = (
		// 			<ElMenuItem index={item.id.toString()} v-on-click={context.emit('menuClick',item)}>
		// 				<span>
		// 					{ item.label}
		// 				</span>
		// 			</ElMenuItem>
		// 		)
		// 	}
		// 	return subNode
		// }
		// props.menuList.forEach((item: MenuList) => {
		// 	children.push(menuRender(item))
		// })
		// return (
		// 	<ElMenu backgroundColor={props.backgroundColor} textColor={props.textColor} activeTextColor={props.activeTextColor}>
		// 		{children}
		// 	</ElMenu>
		// )
	// },
	methods: {
		menuClickMethod(i) {
			console.log(123 , i)
			this.$emit('menuClick', i)
		}
	},
	render() {
		const that = this
		const children: any[] = []
		function menuRender(item: MenuList): VNode {
			let subNode: any
			if (item.children && item.children.length > 0) {
					let menuItemNodes = [] as any[]
					menuItemNodes =  item.children.map( i => {
						if (i.children && i.children.length > 0) {
								return menuRender(i)
						} else {
							return (
								<div onClick={() => {that.menuClickMethod(i)} }>
									<ElMenuItem index={i.id.toString()} >
										<span> 
											{i.label}
										</span>
									</ElMenuItem>
								</div>
							)
						}
					})
					const slots = {
						title: () => {
							return <span>
								{item.label}
							</span>
						}
					}
					subNode = (
						<ElSubmenu index={item.id.toString()} v-slots={slots}>
							<ElMenuItemGroup>
								{menuItemNodes}
							</ElMenuItemGroup>
						</ElSubmenu>
					)
			} else {
				subNode = (
					<div onClick={()=>{
						that.menuClickMethod(item)
					}}>
						<ElMenuItem index={item.id.toString()} >
							<span>
								{ item.label}
							</span>
						</ElMenuItem>

					</div>
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
