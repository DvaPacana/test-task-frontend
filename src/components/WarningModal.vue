<template>
  <div class="modal" v-if="visible">
    <div class="modal__content">
      <span class="modal__close" @click="$emit('close')">&times;</span>
      <h2>Warning</h2>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
    &__content{
      background: #fff;
      padding: 20px;
      border-radius: 5px;
      text-align: center;
      position: relative;
    }
    &__close{
      position: absolute;
      top: 10px;
      right: 10px;
      font-size: 20px;
      cursor: pointer;
    }
}

</style>
