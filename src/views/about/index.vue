<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="關於">
        {{ name }} 是一個基於 vue3，vite2，TypeScript
        的中后台解决方案，它可以幫助你快速搭建企業級中后台項目，相信不管是從新技術使用還是其他方面，都能幫助到你，持續更新中。
      </n-card>
    </div>
    <n-card
      :bordered="false"
      title="項目信息"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <n-descriptions bordered label-placement="left" class="py-2">
        <n-descriptions-item label="版本">
          <n-tag type="info"> {{ version }} </n-tag>
        </n-descriptions-item>
        <n-descriptions-item label="最后編譯時間">
          <n-tag type="info"> {{ lastBuildTime }} </n-tag>
        </n-descriptions-item>
        <n-descriptions-item label="文檔地址">
          <div class="flex items-center">
            <a href="https://naive-ui-admin-docs.vercel.app" class="py-2" target="_blank"
              >查看文檔地址</a
            >
          </div>
        </n-descriptions-item>
        <n-descriptions-item label="預覽地址">
          <div class="flex items-center">
            <a href="https://naive-ui-admin.vercel.app" class="py-2" target="_blank"
              >查看預覽地址</a
            >
          </div>
        </n-descriptions-item>
        <n-descriptions-item label="Github">
          <div class="flex items-center">
            <a href="https://github.com/jekip/naive-ui-admin" class="py-2" target="_blank"
              >查看Github地址</a
            >
          </div>
        </n-descriptions-item>
        <!-- <n-descriptions-item label="QQ交流群">
          <div class="flex items-center">
            <a href="https://jq.qq.com/?_wv=1027&k=xib9dU4C" class="py-2" target="_blank"
              >点击链接加入群聊【Naive Admin】</a
            >
          </div>
        </n-descriptions-item> -->
      </n-descriptions>
    </n-card>

    <n-card
      :bordered="false"
      title="開發環境依賴"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <n-descriptions bordered label-placement="left" class="py-2">
        <n-descriptions-item v-for="item in devSchema" :key="item.field" :label="item.field">
          {{ item.label }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>

    <n-card
      :bordered="false"
      title="生產環境依賴"
      class="mt-4 proCard"
      size="small"
      :segmented="{ content: 'hard' }"
    >
      <n-descriptions bordered label-placement="left" class="py-2">
        <n-descriptions-item v-for="item in schema" :key="item.field" :label="item.field">
          {{ item.label }}
        </n-descriptions-item>
      </n-descriptions>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  export interface schemaItem {
    field: string;
    label: string;
  }

  const { pkg, lastBuildTime } = __APP_INFO__;
  const { dependencies, devDependencies, name, version } = pkg;

  const schema: schemaItem[] = [];
  const devSchema: schemaItem[] = [];

  Object.keys(dependencies).forEach((key) => {
    schema.push({ field: key, label: dependencies[key] });
  });

  Object.keys(devDependencies).forEach((key) => {
    devSchema.push({ field: key, label: devDependencies[key] });
  });
</script>

<style lang="less" scoped></style>
