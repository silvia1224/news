<template>
	<view class="home">
		<navbar :isSearch="true" @input="change"></navbar>
		<view class="home-list">
			<view class="label-box" v-if="is_history">
				<view class="label-header">
					<text class="label-title">搜索历史</text>
					<text class="label-clear">清空</text>
				</view>
				<view class="label-content" v-if="historyLists.length >0">
					<view class="label-content_item" v-for="item in historyLists">
						{{item.name}}
					</view>
				</view>
				<view class="no-data">
					没有搜索历史
				</view>
			</view>
			<list-scroll v-else class="list-scroll">
				<list-card :item="item" v-for="(item,index) in searchList" :key="item._id"></list-card>
				<uni-load-more v-if="searchList.length===0 || searchList.length > 7" iconType="snow">
				</uni-load-more>
			</list-scroll </view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				is_history: true,
				searchList: []
			}
		},
		computed: {
			...mapState(['historyLists'])
		},
		onLoad() {
			// this.getSearch()
		},
		methods: {
			change(value) {
				if(!value){
					clearTimeout(this.timer)
					this.mark = false
					return
				}
				this.is_history = false
				if(!this.mark) {
					this.mark = true
					this.timer = setTimeout(()=>{
						this.mark = false
						this.getSearch(value)
					},1000)
				}
			},
			getSearch(value) {
				if(!value){
					this.searchList = []
					this.is_history = true
					return
				}
				this.$api.get_search({
					value,
				}).then(res=>{
					console.log(res);
					const {
						data
					} = res
					this.searchList = data
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		display: flex;
		background-color: #f5f5f5;
	}

	.home {
		display: flex;
		flex-direction: column;
		flex: 1;

		.label-box {
			background-color: #fff;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				justify-content: space-between;
				font-size: 14px;
				color: #666;
				padding: 10px 15px;
				border-bottom: 1px #f5f5f5 solid;

				.label-title {
					color: $mk-base-color;
				}

				.label-clear {
					color: #30b33a;
					font-weight: bold;
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;

				.label-content_item {
					padding: 2px 10px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px solid #666;
					font-size: 14px;
					color: #666;
				}
			}

			.no-data {
				height: 200px;
				line-height: 200px;
				width: 100%;
				text-align: center;
				color: #666;
				font-size: 14px;
			}
		}
	}
</style>
