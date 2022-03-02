import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../layouts/layout';
import RecipeCards from '../sections/RecipeCards';

/**
 * Content of index page
 */
const IndexPage = ({ data, pageContext }) => {
    // Extracting data from GraphQL query, the query is on the bottom of this file
    const { recipe } = data;
    const recipes = data.allRecipe.nodes;
    return (
        <Layout additionalClass={['font-karla']}>
            {/* Content of <head> tag */}
            <Helmet>
                <title>Main page</title>
            </Helmet>
            <RecipeCards recipes={recipes} />
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
