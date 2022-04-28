import {
  screen,
  render,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App is rendering properly', () => {
  it('test', async () => {
    render(<App />);
    // render(<App />);
    //get h1
    const h1 = screen.getByRole('heading', { level: 1 });
    //check content
    expect(h1.textContent).toEqual('Simpson Quotes');

    const loading = screen.getByText('loading....');

    await waitForElementToBeRemoved(loading, { timeout: 5000 });
    // render(<App />);
    // check for element

    //check for name other than homer simpson
    screen.debug();
    const margeOriginal = await screen.findByText(/marge simpson/i);
    //user event

    const search = screen.getByPlaceholderText('enter a name here');
    userEvent.type(search, 'homer');

    return waitFor(() => {
      // check for a homer simpson
      const homer = screen.getAllByText('Homer Simpson');
      // check to see if marge is gone
      const marge = screen.queryByText('Marge Simpson');

      expect(marge).toBeNull();
    });
  });
});
