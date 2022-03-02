import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { Announcement } from 'flotiq-components-react';
import Layout from '../layouts/layout';
import CategoriesChoiceBar from '../components/CategoriesChoiceBar';

const announcementText = 'This is the Blog where you can find any kind of information and rich media content. \n'
    + 'Use it for your needs, add content and customize in any way';
/**
 * Content of index page
 */
const IndexPage = ({ data, pageContext }) => {
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const { recipe } = data;
    const recipes = data.allRecipe.nodes;
    const categoryTabs = [
        { name: 'Breakfast', href: '#', current: true },
        { name: 'Dinner', href: '#', current: false },
        { name: 'Dessert', href: '#', current: false },
        { name: 'Lunch', href: '#', current: false },
    ];
    return (
        <Layout additionalClass={['font-karla']}>
            {/* Content of <head> tag */}
            <Helmet>
                <title>Main page</title>
            </Helmet>
            <Announcement
                content={announcementText}
                rounded="none"
                textAlignment="center"
                variant="transparent"
                additionalClasses={['max-w-3xl mx-auto md:mt-10 uppercase font-semibold '
                + 'tracking-widest text-xl md:text-2xl lg:text-3xl']}
            />
            <CategoriesChoiceBar additionalClass={['my-5']} categoryTabs={categoryTabs} />
            <div>
                {recipes.map((recipe) => (
                    <a href={recipe.slug} className="block">{recipe.name}</a>
                ))}
            </div>
        </Layout>
    );
};

export const pageQuery = graphql`
    query indexQuery($skip: Int!, $limit: Int!) {
        site {
            siteMetadata {
                title
            }
        }
        allRecipe(sort: {fields: flotiqInternal___createdAt, order: DESC}, limit: $limit, skip: $skip,) {
            nodes {
                id
                cookingTime
                description
                name
                slug
                servings
                image {
                    extension
                    url
                    width
                    height
                    localFile {
                        publicURL
                        childImageSharp {
                            gatsbyImageData(layout: FULL_WIDTH)
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
