<template>
	<view @click="open">
		<!-- 基础卡片 -->
		<view v-if="item.mode === 'base'" class="listcard">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>{{item.title}}</text>
					<likes :item="item"></likes>
					<!-- <view class="icons">
						<uni-icons size="20" color="#f07373" type="heart"></uni-icons>
					</view> -->
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des-browe">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 多图模式 -->
		<view v-if="item.mode === 'column'" class="listcard mode-column">
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>{{item.title}}</text>
					<likes :item="item"></likes>
				</view>
				<view class="listcard-image">
					<view class="listcard-image_item" v-if="index < 3" v-for="(imgItem,index) in item.cover" :key="index">
						<image :src="imgItem" mode="aspectFill"></image>
					</view>
				</view>
				<view class="listcard-content_des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des-browe">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
		<!-- 大图模式 -->
		<view v-if="item.mode === 'image'" class="listcard mode-image">
			<view class="listcard-image">
				<image :src="item.cover[0]" mode="aspectFill"></image>
			</view>
			<view class="listcard-content">
				<view class="listcard-content_title">
					<text>{{item.title}}</text>
					<likes :item="item"></likes>
				</view>
				
				<view class="listcard-content_des">
					<view class="listcard-content_des-label">
						<view class="listcard-content_des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content_des-browe">
						{{item.browse_count}}浏览
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"list-card",
		props: {
			item: {
				type: Object,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			open() {
				console.log("打开详情页面")
			}
		}
	}
</script>

<style lang="scss">
	.listcard {
		display: flex;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha:0.1);
		box-sizing: border-box;
		.listcard-image {
			flex-shrink: 0;
			width: 60px;
			height: 60px;
			border-radius: 5px;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.listcard-content {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding-left: 10px;
			width: 100%;
			.listcard-content_title {
				position: relative;
				padding-right:  30px;
				font-size: 14px;
				color: #333;
				font-weight: 400;
				line-height: 1.2;
				text{
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2; //文字多行溢出隐藏
					-webkit-box-orient: vertical;
				}
				.icons {
					position: absolute;
					right: 0;
					top: 0;
					display: flex;
					align-items: center;
					width: 20px;
					height: 20px;
					
				}
			}
			.listcard-content_des {
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content_des-label {
					display: flex;
					.listcard-content_des-label-item {
						padding: 0 5px;
						margin-right: 5px;
						border-radius: 15px;
						color: $mk-base-color;
						border: 1px $mk-base-color solid;
					}
				}
				.listcard-content_des-browe {
					color: #999;
					line-height: 1.5;
				}
			}
		}
		&.mode-column {
			.list-content {
				width: 100%;
				padding-left: 0;
			}
			.listcard-image {
				display: flex;
				margin-top: 10px;
				width: 100%;
				height: 70px;
				.listcard-image_item {
					margin-left: 10px;
					width: 100%;
					border-radius: 5px;
					overflow: hidden;
					&:first-child {
						margin-left: 0;
					}
					image {
						width: 100%;
						height: 100%;
					}
				}	
			}
			.listcard-content_des {
				padding-top: 10px;
			}
		}
		&.mode-image { 
			flex-direction: column;
			.listcard-image {
				width: 100%;
				height: 100px;
			}
			.listcard-content {
				padding-left: 10px;
				margin-top: 10px;
				.listcard-content_des {
					display: flex;
					align-items: center;
					margin-top: 10px;
				}
			}
		}
			
	}
</style>
