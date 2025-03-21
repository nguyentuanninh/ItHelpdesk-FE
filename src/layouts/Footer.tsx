import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-4">
      <div className="container text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} IT Helpdesk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
