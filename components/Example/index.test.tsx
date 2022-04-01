import { render, screen } from '../../tests-utils';
import Example from './index';

describe('Example component', () => {
  it('should render component', () => {
    render(<Example />);
    expect(screen.getByRole('heading', {
      name: 'Example',
    })).toBeInTheDocument();
  });
});
