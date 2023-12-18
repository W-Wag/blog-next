import { screen } from '@testing-library/react';
import { customRender } from '@/lib/custom-render';
import { formatDate } from '@/lib/format-date';
import { DateContainer } from './style';

describe('<Date />', () => {
  const date = '2023-12-04T20:23:06.918Z';
  it('should return value a date formatted', () => {
    customRender(<DateContainer>{formatDate(date)}</DateContainer>);
    const element = screen.getByText('04/12/2023');
    expect(element);
  });
});
