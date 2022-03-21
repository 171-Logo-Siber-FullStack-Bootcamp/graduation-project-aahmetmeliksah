<template>
  <div class="container contact-form">
    <form @submit.prevent="addProduct" method="post">
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

let newProduct = {
  product_name: null,
  category_name: null,
  add_product: null,
  product_description: null,
}
export default {
  data() {
    return {
      newProduct: newProduct,
    }
  },
  methods: {
    addProduct: async () => {
      const response = await axios.post(
        `http://localhost:5000/addproduct`,
        this.newProduct
      )
      console.log(response.data)
      return response.data
        .then((res) => {
          newProduct = res
        })
        .catch((err) => console.log(err))
    },
  },
}
</script>
