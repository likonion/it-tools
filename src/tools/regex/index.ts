import { AlignJustified } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Regex',
  path: '/regex',
  description: 'regex',
  keywords: ['regex'],
  component: () => import('./regex.vue'),
  icon: AlignJustified,
  createdAt: new Date('2023-06-23'),
});
