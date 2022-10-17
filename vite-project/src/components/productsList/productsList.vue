<script lang="tsx">
import { defineComponent, PropType, computed, ref, Prop } from 'vue'
import { Product } from '../product'
import { IProduct, onProductClick } from '../../services/product'

export default defineComponent({
  props: {
    products: {
      type: Array as PropType<IProduct[]>,
      required: true
    },
    onClick: {
      type: Function as PropType<onProductClick>,
      required: true
    }
  },
  setup(props) {
    const products = computed(() => {
      return props.products
    })

    return () => {
      return (
        <ul class="products-list">
          {
            products.value ? (
              products.value.map(product => {
                const onClick = (product: IProduct) => {
                  props.onClick(product)
                }
                return (
                  <li class="products-list__item">
                    <Product data={product} onClick={onClick}/>
                  </li>
                )
              })
            ) : null
          }
        </ul>
      )
    }
  },
})
</script>

<style src="./productsList.scss" lang="scss"></style>
