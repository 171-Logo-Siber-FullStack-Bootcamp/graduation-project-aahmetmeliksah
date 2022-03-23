<template>
  <HeroComp />
  <ProductsView />
</template>

<script>
import ProductsView from './ProductsView.vue'
import HeroComp from '../components/HeaderComp.vue'
export default {
  components: {
    ProductsView,
    HeroComp,
  },
}
</script>
