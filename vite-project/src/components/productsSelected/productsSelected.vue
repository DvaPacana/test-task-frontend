<script lang="tsx">
import { defineComponent, PropType, computed, Prop } from 'vue'
import { Product } from '../product'
import { IProduct, onProductClick } from '../../services/product'

export default defineComponent({
  name: 'productsSelected',
  props: {
    products: {
      type: Array as PropType<IProduct[]>,
      required: true
    },
    maxProducts: {
      type: Number as PropType<number>,
      required: true
    },
    onClick: {
      type: Function as PropType<onProductClick>,
      required: true
    },
  },
  setup(props) {
    const products = computed(() => {
      return props.products
    })

    const maxProducts = computed(() => {
      return props.maxProducts
    })

    return () => {
      return (
        <div class="products-selected">
          <ul class="products-selected__list">
            {
              products.value ? (
                products.value.map(product => {
                  const onClick = (product: IProduct) => {
                    props.onClick(product)
                  }
                  return (
                    <li class="products-selected__item">
                      <Product data={product} onClick={onClick}/>
                    </li>
                  )
                })
              ) : null
            }
          </ul>
          <div class="products-selected__counter">
            Selected {products.value.length} / {maxProducts.value}
          </div>
        </div>
      )
    }
  },
})
</script>

<style src="./productsSelected.scss"></style>
