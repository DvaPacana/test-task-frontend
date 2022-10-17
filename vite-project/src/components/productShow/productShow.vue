<script lang="tsx">
import { defineComponent, PropType, computed, watch } from 'vue'
import { Product } from '../product'
import { IProduct, onProductClick } from '../../services/product'

export default defineComponent({
  name: 'ProductShow',
  props: {
    product: {
      type: Object as PropType<IProduct>,
      required: true
    },
    onClick: {
      type: Function as PropType<onProductClick>,
      required: true
    }
  },
  setup(props) {
    const product = computed(() => {
      return props.product
    })

    const onClick = (product: IProduct) => {
      console.log(product)
      props.onClick(product)
    }

    return () => {
      return (
        <div class="product-show">
          {
            product.value ? (
              <Product data={product.value} onClick={onClick}/>
            ) : null
          }
        </div>
      )
    }
  },
})
</script>

<style src="./productShow.scss" lang="scss"></style>
