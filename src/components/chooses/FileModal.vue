<template>
  <base-modal
    active="active"
    width="960px"
    @mousedown.self="UNSET_FILES_MODAL"
  >
    <template #close>
      <base-button
        class="modal-close"
        icon="close"
        @click="UNSET_FILES_MODAL"
      />
    </template>
    <template #header>Редактирование</template>
    <template #content>
      <div class="subheader flex flex-row items-center mt-2">
        <div class="category">ID {{ file.fileId }}</div>
        <div class="point mx-2"></div>
        <div class="date">{{ file.fileDate }}</div>
      </div>
      <base-form
        :buttons="true"
        :full-width-buttons="true"
        save-name="Сохранить"
        @close="UNSET_FILES_MODAL"
        @save="UNSET_FILES_MODAL"
      >
        <template #form>
          <div class="grid grid-cols-2 justify-between mt-7">
            <base-input
              :model-value="file.title"
              label="Название"
            />
            <div class="flex justify-center items-center gap-2 font-medium">
              <div class="w-12 h-12">
                <img
                  alt="img"
                  class="rounded"
                  src="@/assets/images/attachment-1.png"
                >
              </div>
              <div class="name">Weird Science</div>
            </div>
          </div>
          <div class="mt-6 gap-1 flex flex-col">
            <base-form-mini-label label="Обращение"/>
            <base-input
              :model-value="file.description"
              :textarea="true"
              placeholder="Обращение"
              textarea-min-height="200"
            />
          </div>
          <div class="mt-6 gap-1 flex flex-col">
            <base-form-mini-label label="Уведомление об изменениях"/>
            <base-input
              :model-value="file.description"
              :textarea="true"
              placeholder="Оставьте комментарий"
              textarea-min-height="200"
            />
          </div>
          <div class="mt-6">
            <base-checkbox label="Отправить уведомление об изменениях на почту аккаунта владельца канала"/>
          </div>
        </template>
      </base-form>
    </template>
  </base-modal>
</template>

<script>
import BaseModal from '@/components/base/BaseModal';
import BaseButton from '@/components/base/BaseButton';
import BaseForm from '@/components/base/BaseForm';
import { mapGetters, mapMutations } from 'vuex';
import BaseInput from '@/components/base/BaseInput';
import BaseFormMiniLabel from '@/components/base/BaseFormMiniLabel';
import BaseCheckbox from '@/components/base/BaseCheckbox';

export default {
  name: 'file-modal',
  components: {
    BaseCheckbox,
    BaseFormMiniLabel,
    BaseInput,
    BaseForm,
    BaseButton,
    BaseModal,
  },

  computed: {
    ...mapGetters({ file: 'getActiveFile' }),
  },

  methods: {
    ...mapMutations(['UNSET_FILES_MODAL']),
  },
};
</script>

<style lang="scss" scoped>
.subheader {
  color: var(--text-dark-gray-color);
  font-size: 20px;
  font-weight: 400;
}

.point {
  background-color: var(--text-dark-gray-color);
  border-radius: 50%;
  height: 6px;
  width: 6px;
}
</style>
