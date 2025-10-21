<template>
  <div class="advertisement-moudle">
    <el-carousel :height="carouselHeight" :interval="5000" arrow="always">
      <el-carousel-item v-for="item in items" :key="item.alt">
        <a :href="item.path" target="_blank" rel="noreferrer noopener">
          <img class="advertisement-img" :src="item.image" :alt="item.alt" />
        </a>
      </el-carousel-item>
    </el-carousel>
    <h2 id="文章评论"><a href="#文章评论" aria-hidden="true" class="header-anchor">#</a>文章评论</h2>
    <div id="gitalk-container" v-if="$site.themeConfig.comment">
      <Comment />
    </div>
  </div>
</template>

<script>
import Comment from './comment'

export default {
  name: 'Advertisement',

  data() {
    return {
      carouselHeight: '100px',
      items: [
        {
          path: 'https://site.lovejade.cn/?utm_source=lovejade.cn',
          image: 'https://s1.ax1x.com/2020/06/13/tvs7NQ.png',
          alt: '倾城之链 - 云集全球优秀网站'
        }
      ]
    }
  },

  computed: {},

  components: {
    Comment
  },

  mounted() {
    const isMiniScreen = document.body.clientWidth <= 768
    const spaceWidth = isMiniScreen ? 1.5 * 2 * 16 : (16.4 + 2 * 2) * 16
    const containerWidth = document.body.clientWidth - spaceWidth
    const carouselWidth = Math.min(containerWidth, 970)
    const carouselHeight = Math.ceil((250 * carouselWidth) / 970)

    this.carouselHeight = `${carouselHeight}px`
    const carContainer = document.getElementsByClassName('el-carousel__container')[0]
    carContainer.style.height = `${carouselHeight}px`
  },

  methods: {}
}
</script>

<style lang="stylus">
.advertisement-moudle
  .text-center{
    text-align: center;
  }
  .advertisement-img
    min-height: 60px;
  .VueCarousel
    .VueCarousel-pagination
      .VueCarousel-dot
        .VueCarousel-dot-button
          width: 12px !important
          height: 12px !important
          &:focus
            border: none !important
            outline: none !important
#gitalk-container
  margin 1em 0 0
  padding .5em 2% 1em
  box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
  .gitment-comment-header
    background-color transparent
    .gt-header
      .gt-btn
        background-color color-blue
</style>
