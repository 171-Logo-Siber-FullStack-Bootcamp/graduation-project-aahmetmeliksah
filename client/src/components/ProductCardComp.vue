<template>
  <section style="background-color: #eee">
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-4">
          <div class="card" style="border-radius: 15px">
            <div
              class="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
              data-mdb-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                style="
                  border-top-left-radius: 15px;
                  border-top-right-radius: 15px;
                "
                class="img-fluid"
                alt="Laptop"
              />
              <a href="#!">
                <div class="mask"></div>
              </a>
            </div>
            <div class="card-body pb-0">
              <div class="d-flex justify-content-between">
                <div>
                  <p class="text-dark">
                    PRODUCT NAME:{{ product.product_name }}
                  </p>
                  <p class="small text-muted">
                    CATEGORY NAME: {{ product.category_name }}
                  </p>
                  <p class="small text-muted">
                    PRODUCT DESCRIPTION: {{ product.product_description }}
                  </p>
                </div>
              </div>
            </div>
            <hr class="my-0" />
            <div class="card-body pb-0">
              <div class="d-flex justify-content-between">
                <p class="text-dark">${{ product.price }}</p>
              </div>
            </div>
            <hr class="my-0" />
            <div class="card-body">
              <div class="text-center pb-2 mb-1">
                <button type="button" class="btn btn-primary">
                  View Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['product'],
}
</script>
