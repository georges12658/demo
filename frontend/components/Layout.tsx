/**
 * Layout component that wraps page content.
 *
 * @param {React.ReactNode} children - The child elements to render inside the layout.
 * @returns {JSX.Element} The rendered layout.
 */
import React from 'react';

const Layout: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => (
  <div className="layout">
    {children}
  </div>
));

export default Layout;
