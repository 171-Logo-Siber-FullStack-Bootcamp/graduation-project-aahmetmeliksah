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
import ProductCardComp from '../components/ProductCardComp.vue' // require doesn't do
const allProducts = require('../../services/products/getAll')
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
  mounted(res) {
    this._products = res
  },
}
</script>
