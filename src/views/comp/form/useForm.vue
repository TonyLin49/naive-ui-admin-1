<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="基礎表單"> useForm 表單，用於向用户收集表單信息 </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <div class="BasicForm">
        <BasicForm @register="register" @submit="handleSubmit" @reset="handleReset">
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { BasicForm, useForm } from '@/components/Form/index';
  import { useMessage } from 'naive-ui';

  const schemas = [
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

  const message = useMessage();

  const [register, {}] = useForm({
    gridProps: { cols: 1 },
    collapsedRows: 3,
    labelWidth: 120,
    layout: 'horizontal',
    submitButtonText: '提交預約',
    schemas,
  });

  function handleSubmit(values: Recordable) {
    console.log(values);
    message.success(JSON.stringify(values));
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less" scoped>
  .BasicForm {
    width: 550px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
</style>
