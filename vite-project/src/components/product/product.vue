<script lang="tsx">
import { defineComponent, PropType, computed } from 'vue'
import { IProduct, onProductClick } from '../../services/product'

export default defineComponent({
  name: 'Product',
  props: {
    data : {
      type: Object as PropType<IProduct>,
      required: true
    },
    onClick: {
      type: Function as PropType<onProductClick>,
      require: true
    }
  },
  setup(props) {
    const onClickHnadler = () => {
      props.onClick(data.value)
    }

    const data = computed(() => {
      return props.data
    })

    return () => {
      return (
        <div class="product" onClick={onClickHnadler}>
          {
            data.value ? (
              <>
                <h3 class="product__name title title--item">{ data.value.name }</h3>
                <span class="product__id">id: { data.value.id }</span>
              </>
            ) : null
          }
        </div>
      )
    }
  },
})
</script>

<style src="./product.scss" lang="scss"></style>
