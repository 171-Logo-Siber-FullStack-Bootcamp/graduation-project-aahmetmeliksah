<template>
  <div class="product-card-container">
    <h3>{{ product.product_name }}</h3>
    <h5 class="price">${{ product.price }}</h5>
    <p class="description">{{ product.product_description }}</p>
    <p class="text-muted">{{ product.category_name }}</p>
    <button class="view-product-btn">View the product</button>
    <!-- add a button to compare two products -->
  </div>
</template>

<script>
export default {
  props: ['product'],
}
</script>
<!-- <ul>
      <li v-for="product of _products" :key="product.id">
        <p>
          <strong>{{ product.product_name }}</strong>
        </p>
        <p>{{ product.product_description }}</p>
      </li>
    </ul> -->
