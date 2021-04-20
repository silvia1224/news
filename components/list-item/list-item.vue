<template>
	<list-scroll class="list-scroll" @loadmore="loadmore">
		<list-card mode="base" :item="item" :index="index" v-for="(item,index) in list" :key="item._id"></list-card>
		<uni-load-more v-if="list.length===0 || list.length > 7" iconType="snow" :status="load.loading"></uni-load-more>
	</list-scroll>
</template>

<script>
	import UniLoadMore from '../uni-load-more/uni-load-more.vue'
	export default {
		name:"list-item",
		components: {
			UniLoadMore
		},
		props: {
			list: {
				type: Array,
				default() {
					return []
				}
			},
			load: {
				type: Object,
				default() {
					return {
						loading: 'loading'
					}
				}
			},
		},
		data() {
			return {
				
			};
		},
		methods: {
			loadmore() {
				this.$emit('loadmore')
			}
		}
	}
</script>

<style lang="scss">
 .list-scroll {
	 height: 100%;
 }
</style>
