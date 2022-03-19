<template>
  <div>
    <ul>
      <li v-for="product of _products" :key="product.id">
        <p>
          <strong>{{ product.product_name }}</strong>
        </p>
        <p>{{ product.product_description }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
const allProducts = require('../../services/products/getAll')
let products = []
allProducts.then((res) => {
  products = res
})

export default {
  name: 'ProductsView',
  data() {
    return {
      _products: products,
    }
  },
  mounted(res) {
    this.products = res
  },
}
</script>
