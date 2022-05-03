import { screen, render, getByRole } from '@testing-library/react';
import { mockData } from '../../tests/fixtures/mockData';
import QuoteView from './QuoteView';

describe('View component renders cards correctly', () => {
  it('cards should have a title, image and a quote', () => {
    render(<QuoteView quotes={mockData} />);

    screen.getByRole('list');
    screen.getByText('Homer Simpson');
    screen.getByAltText('A picture of Homer Simpson');
    screen.getByText(
      `Facts are meaningless. You could use facts to prove anything that's even remotely true.`
    );
  });
});
