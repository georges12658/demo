/**
 * Tests for the Layout component.
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Layout from '../components/Layout';

test('renders children inside layout', () => {
  render(
    <Layout>
      <div data-testid="child">Hello</div>
    </Layout>
  );
  expect(screen.getByTestId('child')).toBeInTheDocument();
});
