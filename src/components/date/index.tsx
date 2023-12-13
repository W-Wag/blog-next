'use client';

import { formatDate } from '@/lib/format-date';
import { DateContainer } from './style';

export interface DateProps {
  date: string;
}

export function Date({ date }: DateProps) {
  return <DateContainer>{formatDate(date)}</DateContainer>;
}
