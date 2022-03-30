<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="上傳圖片"> 上傳圖片，用於向用户收集圖片信息 </n-card>
    </div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="2 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
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

            <n-form-item label="病例圖片" path="images">
              <BasicUpload
                :action="`${uploadUrl}/v1.0/files`"
                :headers="uploadHeaders"
                :data="{ type: 0 }"
                name="files"
                :width="100"
                :height="100"
                @uploadChange="uploadChange"
                v-model:value="formValue.images"
                helpText="單個文件不超過2MB，最多只能上傳10個文件"
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
    images: {
      required: true,
      type: 'array',
      message: '請上傳病例圖片',
      trigger: 'change',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();
  const { uploadUrl } = globSetting;

  const formValue = reactive({
    name: '',
    mobile: '',
    //图片列表 通常查看和编辑使用 绝对路径 | 相对路径都可以
    images: ['https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'],
  });

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
  }

  function uploadChange(list: string[]) {
    formValue.images = unref(list);
  }
</script>
