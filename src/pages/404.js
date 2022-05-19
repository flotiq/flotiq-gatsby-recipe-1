import React from 'react';
import { Helmet } from 'react-helmet';
import { Button, Header } from 'flotiq-components-react';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';

const NotFoundPage = () => (
    <Layout>
        <Helmet>
            <title>Page not found</title>
        </Helmet>
        <div className="py-32">
            <Header additionalClasses={['text-center']}>
                Page not found, sorry
            </Header>
            <div className="text-center mt-5 pt-5">
                {/* Example usage of button */}
                <Link to="/"><Button rounded="none" label="Go back to index" /></Link>
            </div>
        </div>
    </Layout>
);

export default NotFoundPage;
