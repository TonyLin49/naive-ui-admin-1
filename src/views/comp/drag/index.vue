<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="拖拽"> 常用於卡片，事項，預約，流程，計劃等， </n-card>
    </div>

    <n-alert title="花式拖拽演示" type="info" class="mt-4">
      每個卡片，都可以上下拖拽順序，另外不同卡片，也可以拖拽過去，拖拽過来，都不在話下呢，快試試O(∩_∩)O哈哈~
    </n-alert>

    <n-grid
      cols="1 s:2 m:3 l:4 xl:4 2xl:4"
      class="mt-4 proCard"
      responsive="screen"
      :x-gap="12"
      :y-gap="8"
    >
      <n-grid-item>
        <NCard
          title="需求池"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">月</n-tag>
          </template>

          <Draggable
            class="draggable-ul"
            animation="300"
            :list="demandList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="info">需求</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>

      <n-grid-item>
        <NCard
          title="開發中"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">月</n-tag>
          </template>

          <Draggable
            class="draggable-ul"
            animation="300"
            :list="exploitList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="warning">開發中</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>

      <n-grid-item>
        <NCard
          title="已完成"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">月</n-tag>
          </template>
          <Draggable
            class="draggable-ul"
            animation="300"
            :list="completeList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="error">已完成</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>

      <n-grid-item>
        <NCard
          title="已驗收"
          :segmented="{ content: 'hard', footer: 'hard' }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag type="info">月</n-tag>
          </template>
          <Draggable
            class="draggable-ul"
            animation="300"
            :list="approvedList"
            group="people"
            itemKey="name"
          >
            <template #item="{ element }">
              <div class="cursor-move draggable-li">
                <n-tag type="success">已驗收</n-tag><span class="ml-2">{{ element.name }}</span>
              </div>
            </template>
          </Draggable>
        </NCard>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
  import { reactive } from 'vue';
  import Draggable from 'vuedraggable';

  const demandList = reactive([
    { name: '預約表單頁面，能填寫預約相關信息', id: 1 },
    { name: '促銷活動頁面，包含促銷廣告展示', id: 2 },
    { name: '商品列表，需要一個到貨提醒功能', id: 3 },
    { name: '商品需要一個評價功能', id: 4 },
    { name: '商品圖片需要提供放大鏡', id: 5 },
    { name: '訂單需要提供删除到回收站', id: 6 },
    { name: '用户頭像上傳，需要支持裁剪', id: 7 },
    { name: '據說Vue3.2發布了，setup啥時候支持？', id: 8 },
  ]);

  const exploitList = reactive([{ name: '商品圖片需要提供放大鏡', id: 5 }]);

  const completeList = reactive([{ name: '商品圖片需要提供放大鏡', id: 5 }]);

  const approvedList = reactive([{ name: '商品圖片需要提供放大鏡', id: 5 }]);
</script>

<style lang="less" scoped>
  .draggable-ul {
    width: 100%;
    overflow: hidden;
    margin-top: -16px;

    .draggable-li {
      width: 100%;
      padding: 16px 10px;
      color: #333;
      border-bottom: 1px solid #efeff5;
    }
  }
</style>
