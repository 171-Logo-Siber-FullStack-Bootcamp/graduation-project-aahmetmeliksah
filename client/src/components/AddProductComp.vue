<template>
  <div class="container contact-form">
    <form @submit.prevent="addProduct" method="POST" action="/products">
      <h3>Add Product</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input
              type="text"
              name="product_name"
              class="form-control mb-3"
              placeholder="Product Title goes here..."
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="category_name"
              class="form-control mb-3"
              placeholder="Category of your product goes here..."
            />
          </div>
          <div class="form-group">
            <input type="submit" name="add_product" class="btnContact" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <textarea
              name="product_description"
              class="form-control"
              placeholder="Tell about your product to customers..."
              style="width: 100%; height: 150px"
            ></textarea>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {}
  },
  methods: {
    addProduct: async () => {
      await axios.post('/products', (req, res) => {
        console.log(req.body)
      })
    },
  },
}
</script>
