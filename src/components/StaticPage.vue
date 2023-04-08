<!-- staticpage.vue,首页，默认进入的页面 -->
<template>
	<div class="container">
		<!-- 模块 1：导航栏，包括选择定位、网站Logo和搜索按钮 -->
		<div class="row align-items-center my-4" style="display: flex; flex-wrap: nowrap;">
			<div class="col-md-4" style="flex-basis: 20%;">
				<!-- 下拉菜单：选择定位 -->
				<div class="dropdown">
					<div>
					    <el-cascader :options="locations" v-model="selectedLocation" clearable></el-cascader>
					  </div>
					<ul class="dropdown-menu" aria-labelledby="locationDropdown">
						<!-- 在此处添加地区选项 -->
					</ul>
				</div>
			</div>
			<div class="col-md-4 text-center" style="flex-basis: 50%;">
				<!-- 网站Logo -->
				<img :src="logoImage" alt="Image description" style="border-radius:0px;" class="rounded-img"
					width="100">
			</div>
			<div class="col-md-4 text-end" style="flex-basis: 20%;">
				<!-- 搜索按钮 -->
				<button class="btn btn-outline-secondary">
					<i class="fas fa-search"></i>
				</button>
			</div>

		</div>

		<!-- 模块 2：轮播图 -->
		<div id="carouselExampleControls" class="carousel slide my-4" data-bs-ride="carousel">
			<div class="carousel-inner">
				<!-- 在此处添加轮播图图片 -->
				<div class="carousel-item active">
					<img :src="carouselImage" class="d-block w-100 rounded-img" alt="...">
				</div>
				<div class="carousel-item ">
					<img :src="carouselImage" class="d-block w-100 rounded-img" alt="...">
				</div>
				<div class="carousel-item ">
					<img :src="carouselImage" class="d-block w-100 rounded-img" alt="...">
				</div>
				<div class="carousel-item ">
					<img :src="carouselImage" class="d-block w-100 rounded-img" alt="...">
				</div>
				<div class="carousel-item ">
					<img :src="carouselImage" class="d-block w-100 rounded-img" alt="...">
				</div>
			</div>
			<!-- 轮播图控制按钮 -->
			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
				data-bs-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Previous</span>
			</button>
			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
				data-bs-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="visually-hidden">Next</span>
			</button>
		</div>

		<!-- 模块 3：认证专区 -->
		<div class="my-4">
			<!-- 继续添加注释 -->
			<div class="d-flex justify-content-between align-items-end">
				<!-- 认证专区标题 -->
				 <h2 class="module-title shadow-text">认证专区</h2>
				<!-- 更多按钮 -->
				 <a href="#" class="btn text-primary text-small text-dark">更多 ></a>
			
			</div>
			<!-- 横向滚动图片容器 -->
			<div class="scroll-container">
				<!-- 在此处添加认证专区图片 -->
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<!-- 重复以上代码，添加更多认证专区图片 -->
			</div>
		</div>

		<!-- 模块 4：高级资源区 -->
		<div class="my-4">
			<div class="d-flex justify-content-between align-items-end">
				<!-- 高级资源区标题 -->
				 <h2 class="module-title shadow-text">高级资源区</h2>
				<!-- 更多按钮 -->
				 <a href="#" class="btn text-primary text-small text-dark">更多 ></a>

			</div>
			<!-- 横向滚动图片容器 -->
			<div class="scroll-container">
				<!-- 在此处添加高级资源区图片 -->
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<div class="img-container">
					<img :src="thumbnailImage" alt="...">
				</div>
				<!-- 重复以上代码，添加更多认证专区图片 -->
			</div>
		</div>
		<!-- 模块 5：分享专区 -->
		<div class="my-4 share-zone" style="background-color: #F5F5F5;">
			<!-- 分享专区标题 -->
			<h2 class="module-title shadow-text">分享专区</h2>
			<!-- 在此处添加分享专区的内容 -->
			<ShareZone />
		</div>
	</div>

	<!-- 底部导航 -->
	<Bottomnavigation />
</template>
<script>
	// 引入相关资源
	import logoImage from '@/assets/logo.png';
	import carouselImage from '@/assets/16.png';
	import thumbnailImage from '@/assets/1.jpg';
	import Bottomnavigation from "@/components/Bottomnavigation.vue";
	import ShareZone from "@/components/ShareZone.vue";
	import locations from '@/assets/locations.json';
	
	export default {
		name: 'StaticPage',
		components: {
			Bottomnavigation,
			ShareZone,
		},
		data() {

			return {
				logoImage,
				carouselImage,
				thumbnailImage,
				shareZone: null,
				locations: locations,
				selectedLocation: []
			};
			
			
		},
		mounted() {
			this.addLabel(this.locations);
			this.shareZone = document.querySelector('.share-zone');
			window.addEventListener('scroll', this.handleScroll);
		},
		beforeUnmount() {
			window.removeEventListener('scroll', this.handleScroll);
		},
		methods: {
			handleScroll() {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				const windowHeight = window.innerHeight;
				const shareZoneRect = this.shareZone.getBoundingClientRect();

				// 判断分享专区是否在可视区域内，是则实现平滑滚动效果
				if (shareZoneRect.top <= windowHeight && shareZoneRect.bottom >= 0) {
					this.shareZone.style.transform = `translateY(${-scrollTop * 1}px)`;
				}
			},
			addLabel(locations) {
			    locations.forEach(location => {
			      location.label = location.name;
			      if (location.children) {
			        this.addLabel(location.children);
			      }
			    });
			  },
		},
	};
</script>
<style>
	/* 样式部分 */
	body {
		font-family: '微软雅黑', sans-serif;
	}

	.rounded-img {
		border-radius: 15px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.shadow-text {
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}

	.scroll-container {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
	}

	.scroll-container::-webkit-scrollbar {
		display: none;
	}

	.img-container {
		width: 25%;
		flex-shrink: 0;
		scroll-snap-align: start;
		padding-bottom: 25%;
		position: relative;
		margin-right: 10px;
	}

	.img-container img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 15px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.row.g-3 {
		display: flex;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		gap: 20px;
	}

	.row.g-3::-webkit-scrollbar {
		display: none;
	}

	.row.g-3>.col {
		flex: 0 0 calc(25% - 20px);
		scroll-snap-align: start;
		padding-left: 10px;
		padding-right: 10px;
	}

	.scroll-container {
		display: flex;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		-webkit-overflow-scrolling: touch;
		gap: 20px;
	}

	.scroll-container::-webkit-scrollbar {
		display: none;
	}

	.img-container {
		flex: 0 0 calc(25% - 20px);
		scroll-snap-align: start;
		padding-left: 10px;
		padding-right: 10px;
		position: relative;
		margin-right: 10px;
	}

	.module-1-row {
		flex-wrap: nowrap;
	}
	
	.module-title {
	  font-size: 24px;
	  margin: 10px 0;
	}
	.share-zone{
		padding-top: 2px;	
	}
	.text-small {
	  font-size: 10px;
	  padding: 0;
	  border: none;
	  background-color: transparent;
	  vertical-align: baseline;
	}
	/* Add this CSS code to your project's main CSS file */
	@media screen and (max-width: 768px) {
	  .el-cascader__dropdown {
	    display: flex;
	    flex-direction: column;
	  }
	  .el-cascader-menu {
	    border-bottom: 1px solid #eee;
	  }
	}



</style>
