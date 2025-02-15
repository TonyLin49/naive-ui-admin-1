<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="模態框">
        模態框，用於向用户收集或展示信息，Modal 採用 Dialog 預設，擴展拖拽效果
        <br />
        以下是 useModal
        方式，ref方式，也支持，使用方式和其他組件一致，如：modalRef.value.closeModal()
      </n-card>
    </div>
    <n-card :bordered="false" class="proCard mt-4">
      <n-alert title="Modal嵌套Form" type="info">
        使用 useModal 進行彈窗展示和操作，並演示了在Modal内和Form組件，組合使用方法
      </n-alert>
      <n-divider />
      <n-space>
        <n-button type="primary" @click="showModal">打開Modal嵌套Form例子</n-button>
      </n-space>
      <n-divider />
      <n-alert title="個性化輕量級" type="info">
        使用 useModal 進行彈窗展示和操作，自定義配置，實現輕量級效果，更多配置，請参考文檔
      </n-alert>
      <n-divider />
      <n-space>
        <n-button type="primary" @click="showLightModal">輕量級確認</n-button>
      </n-space>
      <n-divider />
      <n-alert title="提示" type="info">
        組件暴露了，setProps 方法，用於修改組件内部
        Props，比如標題等，具體参考UI框架文檔，DialogReactive Properties
      </n-alert>
    </n-card>

    <basicModal @register="modalRegister" ref="modalRef" class="basicModal" @on-ok="okModal">
      <template #default>
        <BasicForm @register="register" @reset="handleReset" class="basicForm">
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </template>
    </basicModal>

    <basicModal
      @register="lightModalRegister"
      class="basicModalLight"
      ref="modalRef"
      @on-ok="lightOkModal"
    >
      <template #default>
        <p class="text-gray-500" style="padding-left: 35px">一些對話框内容</p>
      </template>
    </basicModal>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, toRefs } from 'vue';
  import { useMessage } from 'naive-ui';
  import { basicModal, useModal } from '@/components/Modal';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';

  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'NInput',
      label: '姓名',
      labelMessage: '這是一個提示',
      giProps: {
        span: 1,
      },
      componentProps: {
        placeholder: '請輸入姓名',
        onInput: (e: any) => {
          console.log(e);
        },
      },
      rules: [{ required: true, message: '請輸入姓名', trigger: ['blur'] }],
    },
    {
      field: 'mobile',
      component: 'NInputNumber',
      label: '手機',
      componentProps: {
        placeholder: '請輸入手機號碼',
        showButton: false,
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'type',
      component: 'NSelect',
      label: '類型',
      giProps: {
        //span: 24,
      },
      componentProps: {
        placeholder: '請選擇類型',
        options: [
          {
            label: '舒適性',
            value: 1,
          },
          {
            label: '經濟性',
            value: 2,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeDate',
      component: 'NDatePicker',
      label: '預約時間',
      giProps: {
        //span: 24,
      },
      defaultValue: 1183135260000,
      componentProps: {
        type: 'date',
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeTime',
      component: 'NTimePicker',
      label: '停留時間',
      giProps: {
        //span: 24,
      },
      componentProps: {
        clearable: true,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeProject',
      component: 'NCheckbox',
      label: '預約項目',
      giProps: {
        //span: 24,
      },
      componentProps: {
        placeholder: '請選擇預約項目',
        options: [
          {
            label: '植牙',
            value: 1,
          },
          {
            label: '補牙',
            value: 2,
          },
          {
            label: '根管',
            value: 3,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'makeSource',
      component: 'NRadioGroup',
      label: '來源',
      giProps: {
        //span: 24,
      },
      componentProps: {
        options: [
          {
            label: '網上',
            value: 1,
          },
          {
            label: '門店',
            value: 2,
          },
        ],
        onUpdateChecked: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'status',
      label: '狀態',
      giProps: {
        //span: 24,
      },
      //插槽
      slot: 'statusSlot',
    },
  ];

  export default defineComponent({
    components: { basicModal, BasicForm },
    setup() {
      const modalRef: any = ref(null);
      const message = useMessage();

      const [modalRegister, { openModal, closeModal, setSubLoading }] = useModal({
        title: '新增預約',
      });

      const [
        lightModalRegister,
        {
          openModal: lightOpenModal,
          closeModal: lightCloseModal,
          setSubLoading: lightSetSubLoading,
        },
      ] = useModal({
        title: '確認對話框',
        showIcon: true,
        type: 'warning',
        closable: false,
        maskClosable: true,
      });

      const [register, { submit }] = useForm({
        gridProps: { cols: 1 },
        collapsedRows: 3,
        labelWidth: 120,
        layout: 'horizontal',
        submitButtonText: '提交預約',
        showActionButtonGroup: false,
        schemas,
      });

      const state = reactive({
        formValue: {
          name: '小馬哥',
        },
      });

      async function okModal() {
        const formRes = await submit();
        if (formRes) {
          closeModal();
          message.success('提交成功');
        } else {
          message.error('驗證失敗，請填寫完整信息');
          setSubLoading(false);
        }
      }

      function lightOkModal() {
        lightCloseModal();
        lightSetSubLoading();
      }

      function showLightModal() {
        lightOpenModal();
      }

      function showModal() {
        openModal();
      }

      function handleReset(values: Recordable) {
        console.log(values);
      }

      return {
        ...toRefs(state),
        modalRef,
        register,
        modalRegister,
        lightModalRegister,
        handleReset,
        showModal,
        okModal,
        lightOkModal,
        showLightModal,
      };
    },
  });
</script>

<style lang="less">
  .basicForm {
    padding-top: 20px;
  }

  .n-dialog.basicModal {
    width: 640px;
  }

  .n-dialog.basicModalLight {
    width: 416px;
    padding-top: 26px;
  }
</style>
