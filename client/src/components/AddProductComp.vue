<template>
  <div class="container contact-form">
    <form
      @submit.prevent="addProduct"
      method="POST"
      action="/products"
      encType="multipart/form-data"
    >
      <h3>Add Product</h3>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <input
              type="text"
              name="product_name"
              class="form-control mb-3"
              placeholder="Product Title goes here..."
              v-model="newProduct.product_name"
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              name="category_name"
              class="form-control mb-3"
              placeholder="Category of your product goes here..."
              v-model="newProduct.category_name"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              name="category_id"
              class="form-control mb-3"
              placeholder="Category ID goes here..."
              v-model="newProduct.category_id"
            />
          </div>

          <div class="form-group">
            <input
              type="text"
              name="price"
              class="form-control mb-3"
              placeholder="Price of your product goes here..."
              v-model="newProduct.price"
            />
          </div>

          <!-- UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE -->

          <!-- <div class="form-group">
            <input
              type="file"
              ref="file"
              name="product_image"
              class="form-control mb-3"
              @change="addProduct"
            />
          </div> -->

          <!-- UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE UPLOAD IMAGE -->

          <div class="form-group">
            <a href="http://localhost:8080/products"
              ><input type="submit" name="add_product" class="btnContact"
            /></a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <textarea
              name="product_description"
              class="form-control"
              placeholder="Tell about your product to customers..."
              style="width: 100%; height: 150px"
              v-model="newProduct.product_description"
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
    return {
      newProduct: {
        product_name: null,
        product_description: null,
        category_name: null,
        category_id: null,
        price: null,
        quantity: null,
        product_image: null,
      },
    }
  },
  methods: {
    async addProduct() {
      this.newProduct = await axios.post(
        'http://localhost:5000/addproduct',
        this.newProduct
      )

      this.newProduct = {
        product_name: null,
        product_description: null,
        category_name: null,
        category_id: null,
        price: null,
        quantity: null,
        product_image: null,
      }
      // console.log(this.newProduct)
    },
  },
}
</script>
