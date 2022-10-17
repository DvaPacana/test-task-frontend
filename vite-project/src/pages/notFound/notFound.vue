<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return () => {
      return (
        <section class="section notFound">
          <div class="container">
            <h1 class="title">Страница не найдена (404)</h1>
            <router-link class="link" to="/">Вернуться в каталог</router-link>
          </div>
        </section>
      )
    }
  },
})
</script>
