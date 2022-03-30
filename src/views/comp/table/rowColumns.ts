import { h } from 'vue';
import { NAvatar } from 'naive-ui';

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
    editComponent: 'NInput',
    editRow: true,
    // 默认必填校验
    editRule: true,
    edit: true,
    width: 200,
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
    editRow: true,
    editComponent: 'NSelect',
    editComponentProps: {
      options: [
        {
          label: '廣東省',
          value: 1,
        },
        {
          label: '浙江省',
          value: 2,
        },
      ],
    },
    edit: true,
    width: 200,
    ellipsis: false,
  },
  {
    title: '開始日期',
    key: 'beginTime',
    editRow: true,
    edit: true,
    width: 240,
    editComponent: 'NDatePicker',
    editComponentProps: {
      type: 'datetime',
      format: 'yyyy-MM-dd HH:mm:ss',
      valueFormat: 'yyyy-MM-dd HH:mm:ss',
    },
    ellipsis: false,
  },
  {
    title: '結束日期',
    key: 'endTime',
    width: 160,
  },
  {
    title: '狀態',
    key: 'status',
    editRow: true,
    edit: true,
    width: 100,
    editComponent: 'NSwitch',
    editValueMap: (value) => {
      return value ? '啟用' : '禁用';
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
