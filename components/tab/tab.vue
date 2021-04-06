<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x>
			<view class="tab-scroll-box">
				<view v-for="(item,index) in list" class="tab-scroll-item" :class="{active:activeIndex === index}" :key="item._id" @click="clickTap(item,index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" size="26" color="#666"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type: Array,
				default() {
					return []
				}
			},
			tabIndex: {
				type: Number,
				default: 0
			}
		},
		//可以监听data props值的变化
		watch: {
			tabIndex(newVal){
				this.activeIndex = newVal
			}
		},
		name:"tab",
		data() {
			return {
				activeIndex: 0
			};
		},
		onLoad() {
			console.log("list",this.list)
		},
		methods: {
			clickTap(item,index) {
				this.activeIndex = index
				this.$emit('tab',{
					data: item,
					index: index
				})
			}
		}
	}
</script>

<style lang="scss">
	.tab {
		display: flex;
		width: 100%;
		box-sizing: border-box;
		background-color: #FFFFFF;
		border-bottom: 1px solid #f5f5f5;
		.tab-scroll {
			flex: 1;
			overflow: hidden;
			box-sizing: border-box;
			.tab-scroll-box {
				display: flex;
				height: 45px;
				align-items: center;
				flex-wrap: nowrap;
				box-sizing: border-box;
				.tab-scroll-item {
					flex-shrink: 0;
					padding: 0 10px;
					color: #333333;
					font-size: 14px;
					&.active {
						color: $mk-base-color;
					}
				}
			}	
		}
		.tab-icons {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 45px;
			&::after{
				content: '';
				position: absolute;
				top: 12px;
				bottom: 12px;
				left: 0;
				width: 1px;
				background-color: #ddd;
			}
		}
		
	}
</style>
