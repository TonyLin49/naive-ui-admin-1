<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="基礎表單">
        表單頁用於向用户收集或驗證信息，基礎表單常見於數據項較少的表單場景。表單域標簽也可支持嚮應式。
      </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="80"
            :model="formValue"
            :rules="rules"
            label-placement="left"
            ref="formRef"
            class="py-8"
          >
            <n-form-item label="預約姓名" path="name">
              <n-input v-model:value="formValue.name" placeholder="輸入姓名" />
            </n-form-item>
            <n-form-item label="預約號碼" path="mobile">
              <n-input placeholder="電話號碼" v-model:value="formValue.mobile" />
            </n-form-item>
            <n-form-item label="預約時間" path="datetime">
              <n-date-picker type="datetime" v-model:value="formValue.datetime" />
            </n-form-item>
            <n-form-item label="預約醫生" path="doctor">
              <n-select
                placeholder="請選擇預約醫生"
                :options="doctorList"
                v-model:value="formValue.doctor"
              />
            </n-form-item>
            <n-form-item label="預約事項" path="matter">
              <n-select
                placeholder="請選擇預約事項"
                :options="matterList"
                v-model:value="formValue.matter"
                multiple
              />
            </n-form-item>
            <n-form-item label="性别" path="sex">
              <n-radio-group v-model:value="formValue.sex" name="sex">
                <n-space>
                  <n-radio :value="1">男</n-radio>
                  <n-radio :value="2">女</n-radio>
                </n-space>
              </n-radio-group>
            </n-form-item>
            <n-form-item label="預約備註" path="remark">
              <n-input
                v-model:value="formValue.remark"
                type="textarea"
                placeholder="請輸入預約備註"
              />
            </n-form-item>
            <n-form-item label="圖片" path="img">
              <BasicUpload
                :action="`${uploadUrl}/v1.0/files`"
                :headers="uploadHeaders"
                :data="{ type: 0 }"
                name="files"
                :width="100"
                :height="100"
                @uploadChange="uploadChange"
                v-model:value="uploadList"
                helpText="單個文件不超過20MB，最多只能上傳10個文件"
              />
            </n-form-item>
            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit">提交預約</n-button>
                <n-button @click="resetForm">重置</n-button>
              </n-space>
            </div>
          </n-form>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, reactive } from 'vue';
  import { useMessage } from 'naive-ui';
  import { BasicUpload } from '@/components/Upload';
  import { useGlobSetting } from '@/hooks/setting';

  const globSetting = useGlobSetting();

  const matterList = [
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
  ];

  const doctorList = [
    {
      label: '李醫生',
      value: 1,
    },
    {
      label: '黄醫生',
      value: 2,
    },
    {
      label: '張醫生',
      value: 3,
    },
  ];

  const rules = {
    name: {
      required: true,
      message: '請輸入預約姓名',
      trigger: 'blur',
    },
    remark: {
      required: true,
      message: '請輸入預約備註',
      trigger: 'blur',
    },
    mobile: {
      required: true,
      message: '請輸入預約電話號碼',
      trigger: ['input'],
    },
    datetime: {
      required: true,
      type: 'number',
      message: '請選擇預約時間',
      trigger: ['blur', 'change'],
    },
    doctor: {
      required: true,
      type: 'number',
      message: '請選擇預約醫生',
      trigger: 'change',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();
  const { uploadUrl } = globSetting;

  const defaultValueRef = () => ({
    name: '',
    mobile: '',
    remark: '',
    sex: 1,
    matter: null,
    doctor: null,
    datetime: [],
  });

  let formValue = reactive(defaultValueRef());
  const uploadList = ref([
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  ]);
  const uploadHeaders = reactive({
    platform: 'miniPrograms',
    timestamp: new Date().getTime(),
    token: 'Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo=',
  });

  function formSubmit() {
    formRef.value.validate((errors) => {
      if (!errors) {
        message.success('驗證成功');
      } else {
        message.error('驗證失敗，請填寫完整信息');
      }
    });
  }

  function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  }

  function uploadChange(list: string[]) {
    console.log(list);
  }
</script>
