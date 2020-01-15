<template>
    <view>
        <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item>
                            <view class="swiper-item "></view>
							<image  src="../../static/banner3.jpg"class="img2"  ></image>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item "></view>
							<image src="../../static/banner1.jpg" class="img2"></image>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item "></view>
							<image src="../../static/banner4.jpg" class="img2" ></image>
                        </swiper-item>
						<swiper-item>
						    <view class="swiper-item "></view>
							<image src="../../static/banner4.jpg"  class="img2"></image>
						</swiper-item>
                    </swiper>
                </view >
					<view class="page-size">
						
					
				 <text class="test">&#xe607;</text>
				 <text class="page-size">海外采购</text>
				 <text class="test">&#xe6c6;</text>
				 <text class="page-size">假一赔十</text>
				 <text class="test">&#xe640;</text>
				 <text class="page-size">超值低价</text>
				 <text class="test">&#xe624;</text>
				 <text class="page-size">售后无忧</text>
				 </view>
            </view>
			
			<view class="img-hongbao">
				<image src="../../static/hongbao.jpg" class="img-hongbao1"></image>
				<image src="../../static/hongbao.jpg" class="img-hongbao1"></image>
				<image src="../../static/hongbao.jpg" class="img-hongbao1"></image>
				<image src="../../static/hongbao.jpg" class="img-hongbao1"></image>
				<image src="../../static/banner5.jpg"  class="img-banner"></image>
				<image src="../../static/card.jpg" mode="" class="img-card"></image>
				<image src="../../static/card3.jpg" mode="" class="img-card"></image>
				<image src="../../static/card.jpg" mode="" class="img-card"></image>
				<image src="../../static/card3.jpg" mode="" class="img-card"></image>
				<image src="../../static/card.jpg" mode="" class="img-card"></image>
				<image src="../../static/card3.jpg" mode="" class="img-card"></image>
			</view>
        </view>
		<!-- <view class="guess-section">
			<view 
				v-for="(item, index) in goodsList" :key="index"
				class="guess-item"
				@click="navToDetailPage(item)"
			>
				<view class="image-wrapper">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<text class="title clamp">{{item.title}}</text>
				<text class="price">￥{{item.price}}</text>
			</view>
		</view> -->
      
    </view>
</template>

<script>
	
	export default {
	    data() {
	        return {
	            background: ['color1', 'color2', 'color3'],
	            indicatorDots: true,
	            autoplay: true,
	            interval: 2000,
	            duration: 500,
				goodsList: []
	        }
	    },
	    methods: {
	  //       changeIndicatorDots(e) {
	  //           this.indicatorDots = !this.indicatorDots
	  //       },
	  //       changeAutoplay(e) {
	  //           this.autoplay = !this.autoplay
	  //       },
	  //       intervalChange(e) {
	  //           this.interval = e.target.value
	  //       },
	  //       durationChange(e) {
	  //           this.duration = e.target.value
	  //       },
			// async loadData() {
				
				
			// 	let goodsList = await this.$api.json('goodsList');
			// 	this.goodsList = goodsList || [];
			// },
	    }
	
	}
	
</script>

<style>
	@font-face {
	       font-family: 'iconfont';
	       src: url('~@/static/iconfont.ttf') format('truetype');
	   }
	   .test {
	       font-family: iconfont;
	       margin-left: 40rpx;
		   
		   font-size: 15px;
	   }
	
.img2{
	width: 100%;
	height: 200px;
}
.page-size{
	/* text-align:center;
	margin:0 auto */;
	margin: 0px 1px  0px 0px;
	font-size: 12px;
}
.img-hongbao{
	width: 100%;
	flex: 25%;
}
.img-hongbao1{
	width: 25%;
	height: 100px;
}
.img-banner{
	width: 100%;
	height: 70px;
}
.img-card{
	width: 100%;
}
.uni-page-head__title {
	margin-left: -60px;
}
/* .guess-section{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.guess-item{
			display:flex;
			flex-direction: column;
			width: 48%;
			padding-bottom: 40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 330upx;
			border-radius: 3px;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.title{
			font-size: $font-lg;
			color: $font-color-dark;
			line-height: 80upx;
		}
		.price{
			font-size: $font-lg;
			color: $uni-color-primary;
			line-height: 1;
		}
	} */
</style>
