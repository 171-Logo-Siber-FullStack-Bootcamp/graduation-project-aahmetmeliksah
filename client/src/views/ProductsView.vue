<template>
  <div>
    <ProductCardComp
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>
<script>
import ProductCardComp from '../components/ProductCardComp.vue'
import allProducts from '../../services/products/getAll'
let products = []
allProducts.then((res) => {
  products = res
})

export default {
  name: 'ProductsView',
  components: {
    ProductCardComp,
  },
  data() {
    return {
      products,
    }
  },
}
</script>
