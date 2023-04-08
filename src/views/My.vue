<template>
	<div class="my-profile">
		<el-card shadow="hover" class="profile-card">
			<div class="profile-header">
				<img src="../assets/1.jpg" alt="头像" class="profile-avatar">
				<div class="profile-info">
					<h3 class="profile-nickname">我叫望江台</h3>
					<div class="profile-vip">
						<span class="profile-equity">权益: 5</span>
						<el-tag v-if="isVip" type="warning" class="vip-tag">VIP会员</el-tag>
						<el-tag v-else type="info" class="vip-tag">非VIP会员</el-tag>
					</div>
				</div>
			</div>
			<el-button type="primary" class="vip-btn">开通/升级会员</el-button>
			<img src="../assets/16.png" alt="广告位" class="ad-banner" />
			<div class="profile-items">
				<el-row class="item-row">

					<el-col :span="20">
						<span class="item-title">私享会</span>
					</el-col>
					<el-col :span="2">
						<i class="el-icon-arrow-right item-arrow">>>></i>
					</el-col>
				</el-row>
				<el-row class="item-row">
					<el-col :span="20">
						<span class="item-title">认证中心</span>
					</el-col>
					<el-col :span="2">
						<i class="el-icon-arrow-right item-arrow">>>></i>
					</el-col>
				</el-row>
				<el-row class="item-row">

					<el-col :span="20">
						<span class="item-title">已解锁信息</span>
					</el-col>
					<el-col :span="2">
						<i class="el-icon-arrow-right item-arrow">>>></i>
					</el-col>
				</el-row>
				<el-row class="item-row">

					<el-col :span="20">
						<span class="item-title">收藏夹</span>
					</el-col>
					<el-col :span="2">
						<i class="el-icon-arrow-right item-arrow">>>></i>
					</el-col>
		 	</el-row>
				<el-row class="item-row">

					<el-col :span="20">
						<span class="item-title">设置</span>
					</el-col>
					<el-col :span="2">
						<i class="el-icon-arrow-right item-arrow">>>></i>
					</el-col>
				</el-row>
			</div>
		</el-card>
	</div>
	<!-- 底部导航 -->
	<Bottomnavigation />
</template>

<script>
	import Bottomnavigation from "@/components/Bottomnavigation.vue";
	export default {
		name: 'My',
		components: {
			Bottomnavigation,
		},
	}
</script>

<style scoped>
	.my-profile {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
	}

	.profile-card {
		border-radius: 12px;
		padding: 20px;
	}

	.profile-header {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.profile-avatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
	}

	.profile-info {
		margin-left: 20px;
	}

	.profile-nickname {
		margin: 0;
		font-size: 24px;
		font-weight: bold;
	}

	.profile-vip {
		display: flex;
		align-items: center;
		margin-top: 5px;
	}

	.profile-equity {
		font-size: 14px;
		color: #333;
		margin-right: 10px;
	}

	.vip-tag {
		font-size: 14px;
	}

	.vip-btn {
		width: 100%;
		margin-bottom: 20px;
		margin-bottom: 20px;
	}

	.profile-items {
		margin-bottom: 20px;
	}

	.item-row {
		display: flex;
		align-items: center;
		padding: 10px 0;
		border-bottom: 1px solid #f0f0f0;
	}

	.item-row:last-child {
		border-bottom: none;
	}

	.item-icon {
		font-size: 18px;
		color: #3EAF7C;
	}

	.item-title {
		font-size: 16px;
		color: #333;
	}

	.item-arrow {
		font-size: 14px;
		color: #ccc;
	}

	.ad-banner {
		width: 100%;
		max-height: 150px;
		object-fit: cover;
		margin-bottom: 20px;
	}
</style>
