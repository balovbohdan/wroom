import { HELP_TYPES_TO_TITLES } from '../constants';

export const getHelpTypeTitle = (type: string) => (
  HELP_TYPES_TO_TITLES[type] || '<Ошибка>'
);
