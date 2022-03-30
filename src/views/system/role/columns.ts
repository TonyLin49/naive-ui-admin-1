import { h } from 'vue';
import { NTag } from 'naive-ui';

export const columns = [
  {
    title: 'id',
    key: 'id',
  },
  {
    title: '角色名稱',
    key: 'name',
  },
  {
    title: '說明',
    key: 'explain',
  },
  {
    title: '是否默認角色',
    key: 'isDefault',
    render(row) {
      return h(
        NTag,
        {
          type: row.isDefault ? 'success' : 'error',
        },
        {
          default: () => (row.isDefault ? '是' : '否'),
        }
      );
    },
  },
  {
    title: '創建時間',
    key: 'create_date',
  },
];
