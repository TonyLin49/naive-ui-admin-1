import { h } from 'vue';
import { NAvatar, NTag } from 'naive-ui';

export const columns = [
  {
    title: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: '編碼',
    key: 'no',
    width: 100,
  },
  {
    title: '名稱',
    key: 'name',
    width: 100,
  },
  {
    title: '頭像',
    key: 'avatar',
    width: 100,
    render(row) {
      return h(NAvatar, {
        size: 48,
        src: row.avatar,
      });
    },
  },
  {
    title: '地址',
    key: 'address',
    width: 150,
  },
  {
    title: '開始日期',
    key: 'beginTime',
    width: 160,
  },
  {
    title: '結束日期',
    key: 'endTime',
    width: 160,
  },
  {
    title: '狀態',
    key: 'status',
    width: 100,
    render(row) {
      return h(
        NTag,
        {
          type: row.status ? 'success' : 'error',
        },
        {
          default: () => (row.status ? '啟用' : '禁用'),
        }
      );
    },
  },
  {
    title: '創建時間',
    key: 'date',
    width: 160,
  },
  {
    title: '停留時間',
    key: 'time',
    width: 80,
  },
];
