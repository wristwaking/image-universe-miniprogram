<view class="container">
    <view class="top" style="background-image:url(../../assets/background.gif);">
        <view class="top-name">
            <view class="top-name-head">Hello !</view>
            <view>Universe Image</view>
        </view>
        <view class="group">
            Good Night !
        </view>
    </view>

    <view class="image-box">
        <view class="head-title">
            <view>Image Menus</view>
            <view>{{images.length}} SEE ALL</view>
        </view>
        <image mode='widthFix' src="{{item}}" qq:for="{{images}}" qq:key="index"/>
    </view>
</view>
