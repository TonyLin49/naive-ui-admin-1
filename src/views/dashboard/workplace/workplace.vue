<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="工作台">
        <n-grid cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen">
          <n-gi>
            <div class="flex items-center">
              <div>
                <n-avatar circle :size="64" :src="schoolboy" />
              </div>
              <div>
                <p class="px-4 text-xl">早安，Ah jung，開始您一天的工作吧！</p>
                <p class="px-4 text-gray-400">今日陰轉大雨，15℃ - 25℃，出門記得帶傘哦。</p>
              </div>
            </div>
          </n-gi>
          <n-gi>
            <div class="flex justify-end w-full">
              <div class="flex flex-1 flex-col justify-center text-right">
                <span class="text-secondary">項目數</span>
                <span class="text-2xl">16</span>
              </div>
              <div class="flex flex-1 flex-col justify-center text-right">
                <span class="text-secondary">待辦</span>
                <span class="text-2xl">3/15</span>
              </div>
              <div class="flex flex-1 flex-col justify-center text-right">
                <span class="text-secondary">消息</span>
                <span class="text-2xl">35</span>
              </div>
            </div>
          </n-gi>
        </n-grid>
      </n-card>
    </div>
    <n-grid class="mt-4" cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen" :x-gap="12" :y-gap="9">
      <n-gi>
        <n-card
          :segmented="{ content: 'hard' }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="項目"
        >
          <div class="flex flex-wrap project-card">
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <GithubOutlined />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Github</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400">
                是一個面向開源及私有軟件項目的托管平台。
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> 開源君，2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#42b983">
                    <LogoVue />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Vue</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> 漸進式 JavaScript 框架 </div>
              <div class="flex mt-2 h-10 text-gray-400"> 學不動也要學，2021-07-04 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#e44c27">
                    <Html5Outlined />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Html5</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> HTML5是互聯網的下一代標准。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> 撸碼也是一種藝術 2021-04-01 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#dd0031">
                    <LogoAngular />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Angular</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> 現代 Web 開發平台，百萬粉絲熱捧。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> 鐡粉君 2021-07-04。 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30" color="#61dafb">
                    <LogoReact />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">React</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> 用於構建用户界面的 JavaScript 庫。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> 技術牛 2021-07-04。 </div>
            </n-card>
            <n-card
              size="small"
              class="cursor-pointer project-card-item ms:w-1/2 md:w-1/3"
              hoverable
            >
              <div class="flex">
                <span>
                  <n-icon size="30">
                    <LogoJavascript />
                  </n-icon>
                </span>
                <span class="text-lg ml-4">Js</span>
              </div>
              <div class="flex mt-2 h-10 text-gray-400"> 路是走出来的，而不是空想出来的。 </div>
              <div class="flex mt-2 h-10 text-gray-400"> 架构组 2021-07-04 </div>
            </n-card>
          </div>
        </n-card>

        <n-card
          :segmented="{ content: 'hard' }"
          content-style="padding-top: 0;padding-bottom: 0;"
          :bordered="false"
          size="small"
          title="動態"
          class="mt-4"
        >
          <template #header-extra><a href="javascript:;">更多</a></template>
          <n-list>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung 剛才把工作台頁面隨便寫了一些，湊合能看了！">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="Ah Jung 在 開源組 創建了項目 naive-ui-admin？">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="@It界風清揚，向naive-ui-admin提交了一个bug，抽時間看看吧！">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 22:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="技術部那機位童鞋，再次警告，不要摸魚，不要摸魚，不要摸魚啦！">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 09:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="上班不摸魚，和鹹鱼有什麼區别（這話真不是我說的哈）！">
                <template #description
                  ><p class="text-xs text-gray-500">2021-07-04 20:37:16</p></template
                >
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="schoolboy" />
              </template>
              <n-thing title="頁面切換其實也支持緩存，只是加了過度效果，看起來像是重新渲染了">
                <template #description>
                  <p class="text-gray-400">
                    <n-input type="text" placeholder="不信，輸點文字試試" />
                  </p>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card
          :segmented="{ content: 'hard' }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
          title="快捷操作"
        >
          <div class="flex flex-wrap project-card">
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#68c755">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">主控台</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#fab251">
                    <ProfileOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">列表</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#1890ff">
                    <FileProtectOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">表單</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#f06b96">
                    <ApartmentOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">權限管理</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="#7238d1">
                    <SettingOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">系統管理</span>
              </div>
            </n-card>
            <n-card size="small" class="cursor-pointer project-card-item" hoverable>
              <div class="flex flex-col justify-center text-gray-500">
                <span class="text-center">
                  <n-icon size="30" color="">
                    <DashboardOutlined />
                  </n-icon>
                </span>
                <span class="text-lx text-center">主控台</span>
              </div>
            </n-card>
          </div>
        </n-card>
        <n-card :segmented="{ content: 'hard' }" :bordered="false" size="small" class="mt-4">
          <img src="~@/assets/images/Business.svg" class="w-full" />
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts" setup>
  import schoolboy from '@/assets/images/schoolboy.png';
  import {
    GithubOutlined,
    DashboardOutlined,
    ProfileOutlined,
    FileProtectOutlined,
    SettingOutlined,
    ApartmentOutlined,
    Html5Outlined,
  } from '@vicons/antd';
  import { LogoVue, LogoAngular, LogoReact, LogoJavascript } from '@vicons/ionicons5';
</script>

<style lang="less" scoped>
  .project-card {
    margin-right: -6px;

    &-item {
      margin: -1px;
      width: 33.333333%;
    }
  }
</style>
