import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App is rendering properly', () => {
  render(<App />);
  it('should render a heading that says simpson quotes', async () => {
    // render(<App />);
    //get h1
    const h1 = screen.getByRole('heading', { level: 1 });
    //check content
    expect(h1.textContent).toEqual('Simpson Quotes');
  });
  it.skip('should render a search component that works', () => {
    // render(<App />);
    // check for element
    screen.debug();
    const search = screen.getByPlaceholderText('enter a name here');

    //check for name other than homer simpson
    waitFor(() => {
      const marge = screen.getByText('Marge');
    });
    //user event
    userEvent.type(search, 'homer');

    waitFor(() => {
      // check for a homer simpson
      const homer = screen.getByText('Homer Simpson');
      // check to see if marge is gone
      const marge = screen.queryByText('Marge');

      expect(marge).toBeNull();
    });
  });
  it.skip('should render a list', async () => {
    // render(<App />)
    //TEST IS BROKEN
    waitFor(() => screen.getByRole('list'));
  });
});
