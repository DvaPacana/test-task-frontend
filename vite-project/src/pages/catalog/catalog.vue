<script lang="tsx">
import { defineComponent, ref } from 'vue'
import { ProductsList } from '../../components/productsList'
import { ProductsSelected } from '../../components/productsSelected'
import { ProductShow } from '../../components/productShow'
import { IProduct, IResponse, getProducts } from '../../services/product'

export default defineComponent({
  name: 'CatalogPage',
  setup() {
    const products = ref<IResponse>();
    const selectedUserProducts = ref<IProduct[]>([]);
    const selectedShowProduct = ref<IProduct>();
    const maxUserProducts = 6

    const addUserProduct = (product: IProduct) => {
      if (!selectedUserProducts.value.includes(product)) {
        if (selectedUserProducts.value.length < maxUserProducts) {
          selectedUserProducts.value.push(product)
        }
      }
    }

    const addShowProduct = (product: IProduct) => {
      selectedShowProduct.value = product
    }

    const deleteUserProduct = (product: IProduct) => {
      selectedUserProducts.value = selectedUserProducts.value.filter(item => {
        if (product.id === item.id) {
          return false
        } return true
      });
    }

    const deleteShowProduct = () => {
      selectedShowProduct.value = null
    }

    getProducts()
      .then(result => {
        products.value = result
      })

    return () => {
      return (
        <section class="section catalog">
          <div class="container">
            <h1 class="section__title title">Catalog</h1>
            <ul class="catalog__content">
              <li class="catalog__block">
                <div class="catalog__selected">
                  {
                    selectedUserProducts.value ? (
                      <ProductsSelected 
                        products={ selectedUserProducts.value } 
                        maxProducts={ maxUserProducts } 
                        onClick={ deleteUserProduct }/>
                    ) : null
                  }
                </div>
                <div class="catalog__products">
                  {
                    products.value?.data.productsUser ? (
                      <ProductsList 
                        products={ products.value.data.productsUser } 
                        onClick={ addUserProduct }/>
                    ) : null
                  }
                </div>
              </li>
              <li class="catalog__block">
                <div class="catalog__selected --product-show">
                  {
                    selectedShowProduct.value ? (
                      <ProductShow 
                        product={ selectedShowProduct.value } 
                        onClick={ deleteShowProduct }/>
                    ) : null
                  }
                </div>
                <div class="catalog__products">
                  {
                    products.value?.data.productsShow ? (
                      <ProductsList 
                        products={ products.value.data.productsShow } 
                        onClick={ addShowProduct }/>
                    ) : null
                  }
                </div>
              </li>
            </ul>
          </div>
        </section>
      )
    }
  },
})
</script>

<style src="./catalog.scss" lang="sass"></style>
