import React from 'react';
import Footer from '../components/Footer';

const Layout = ({ children, additionalClass = [] }) => (
    <main className={['bg-light-gray', ...additionalClass].join(' ')}>
        {children}
        <Footer />
    </main>
);

export default Layout;
