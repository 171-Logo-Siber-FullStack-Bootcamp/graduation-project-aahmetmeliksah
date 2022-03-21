<template>
  <AddProductComp />
  <ProductsView />
</template>

<script>
import ProductsView from './ProductsView.vue'
import AddProductComp from '../components/AddProductComp.vue'
export default {
  components: {
    ProductsView,
    AddProductComp,
  },
}
</script>
