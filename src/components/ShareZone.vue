<template>
	<div class="share-zone">
		<div class="tabs">
			<button @click="activeTab = 'footMassage'">足浴按摩专区</button>
			<button @click="activeTab = 'spa'">SPA专区</button>
		</div>
		<div class="tab-content" ref="tabContent">
			<div class="user-list" v-show="activeTab === 'footMassage'" ref="footMassage">
				<div class="user" v-for="user in footMassageUsers" :key="user.id">
					<img class="thumbnail" :src="user.thumbnailImage" :alt="user.name" />
					<div class="user-details">
						<h3>{{ user.name }}</h3>
						<p>{{ user.type }}</p>
						<p>{{ user.location }}</p>
						<p>{{ user.rating }}</p>
						<p>{{ user.averageCost }}</p>
					</div>
				</div>
			</div>
			<div class="user-list" v-show="activeTab === 'spa'" ref="spa">
				<div class="user" v-for="user in spaUsers" :key="user.id">
					<img class="thumbnail" :src="user.thumbnailImage" :alt="user.name" />
					<div class="user-details">
						<h3>{{ user.name }}</h3>
						<p>{{ user.type }}</p>
						<p>{{ user.location }}</p>
						<p>{{ user.rating }}</p>
						<p>{{ user.averageCost }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'footMassage',
				footMassageUsers: [{
						id: 1,
						thumbnailImage: "https://via.placeholder.com/50",
						name: "张三",
						type: "足浴按摩",
						location: "北京",
						rating: "颜值：4.5",
						averageCost: "人均消费：200",
					},
					{
							id: 1,
							thumbnailImage: "https://via.placeholder.com/50",
							name: "张三",
							type: "足浴按摩",
							location: "北京",
							rating: "颜值：4.5",
							averageCost: "人均消费：200",
						},
						{
								id: 1,
								thumbnailImage: "https://via.placeholder.com/50",
								name: "张三",
								type: "足浴按摩",
								location: "北京",
								rating: "颜值：4.5",
								averageCost: "人均消费：200",
							},
					// ... 其他足浴按摩用户数据
				],
				spaUsers: [{
						id: 2,
						thumbnailImage: "https://via.placeholder.com/50",
						name: "李四",
						type: "放飞自我",
						location: "北京",
						rating: "颜值：4.5",
						averageCost: "人均消费：200",
					},
					// ... 其他SPA用户数据
				],
			};
		},
		watch: {
			activeTab: function (newTab, oldTab) {
				this.scrollToTab(newTab);
			},
		},
		mounted() {
			this.scrollToTab(this.activeTab);
		},
		methods: {
			scrollToTab(tab) {
				const tabContent = this.$refs.tabContent;
				const targetTab = this.$refs[tab];
				const scrollTop = tabContent.scrollTop;
				const targetScrollTop = targetTab.offsetTop - tabContent.offsetTop;

				const start = performance.now();
				const duration = 500; // 动画持续时间，单位：毫秒
			const animateScroll = (timestamp) => {
				const elapsed = timestamp - start;
				const progress = Math.min(elapsed / duration, 1);

				const scrollValue = scrollTop + (targetScrollTop - scrollTop) * progress;
				tabContent.scrollTo(0, scrollValue);

				if (progress < 1) {
					window.requestAnimationFrame(animateScroll);
				}
			};

			window.requestAnimationFrame(animateScroll);
		},
	},
};
</script>
<style scoped>
	.share-zone {
		background-color: white;
		width: 100%;
		box-sizing: border-box;
	}

	.tabs {
		display: flex;
		justify-content: center;
	}

	.tabs button {
		background-color: transparent;
		border: none;
		cursor: pointer;
		font-size: 18px;
		padding: 8px 16px;
	}

	.tabs button.active {
		color: #007bff;
		border-bottom: 2px solid #007bff;
	}

	.tab-content {
		width: 100%;
		padding: 16px;
	}

	.user-list {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	.user {
		background-color: #f8f9fa;
		border-radius: 4px;
		display: flex;
		align-items: center;
		padding: 16px;
		width: 100%;
	}

	.thumbnail {
		border-radius: 50%;
		height: 80px;
		width: 80px;
	}

	.user-details {
		margin-left: 16px;
	}

	h3 {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 8px;
	}

	p {
		font-size: 14px;
		margin-bottom: 4px;
	}

	.slide-enter-active,
	.slide-leave-active {
		transition: all 0.5s ease;
	}

	.slide-enter,
	.slide-leave-to {
		transform: translateX(100%);
		opacity: 0;
		position: absolute;
	}

	.slide-enter-to,
	.slide-leave {
		transform: translateX(0);
		opacity: 1;
	}
</style>