/**
 * Layout component that wraps page content.
 *
 * @param {React.ReactNode} children - The child elements to render inside the layout.
 * @returns {JSX.Element} The rendered layout.
 */
import React from 'react';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className="layout">{children}</div>
);

export default Layout;
