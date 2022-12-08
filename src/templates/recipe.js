import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Header, Paragraph } from 'flotiq-components-react';
import { Helmet } from 'react-helmet';
import { ClockIcon, UsersIcon } from '@heroicons/react/solid';
import Layout from '../layouts/layout';
import RecipeSteps from '../components/RecipeSteps';
import RecipeCards from '../sections/RecipeCards';

const ingredientsHeaderText = 'Ingredients';

const RecipeTemplate = ({ data }) => {
    const { recipe } = data;
    const recipes = data.allRecipe.nodes;

    return (
        <Layout additionalClass={['bg-light-gray']}>
            <Helmet>
                <title>{recipe.name}</title>
                <meta
                    name="description"
                    content={recipe.description}
                />
            </Helmet>
            <GatsbyImage
                image={getImage(recipe.image[0] && recipe.image[0].localFile)}
                alt={recipe.name}
                className="w-full"
            />
            <div className="flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col pl-0 mb-10 w-full">
                    <div className="text-white bg-primary mt-10 px-10 md:px-24 py-10 relative">
                        <div className="absolute top-0 left-0 h-6 md:h-12 w-6 md:w-12 bg-light-gray" />
                        <Header
                            additionalClasses={['text-xl md:text-4xl text-white !font-semibold '
                                + 'uppercase tracking-wider !p-0']}
                        >
                            {recipe.name}
                        </Header>
                        <div className="flex flex-wrap justify-start text-xs text-primary font-light
                            space-x-5 pb-3 mt-5"
                        >
                            <p className="px-3 py-2 bg-medium-gray flex items-center rounded-lg">
                                <ClockIcon className="h-5 w-5 text-primary mr-2" />
                                {' '}
                                <span className="text-sm">{recipe.cookingTime}</span>
                            </p>
                            <p className="px-3 py-2 bg-medium-gray flex items-center rounded-lg">
                                <UsersIcon className="h-5 w-5 text-primary mr-2" />
                                {' '}
                                <span className="text-sm">{recipe.servings}</span>
                            </p>
                        </div>
                        <Paragraph additionalClasses={['mt-5']}>
                            {recipe.description}
                        </Paragraph>
                        <div className="absolute bottom-0 right-0 h-6 md:h-12 w-6 md:w-12 bg-white" />
                    </div>
                    <div className="bg-white px-4 md:px-10 py-5">
                        <Header level={2} additionalClasses={['mt-5 pl-7 !text-2xl']}>
                            {ingredientsHeaderText}
                        </Header>
                        <fieldset className="space-y-5">
                            <div>
                                {recipe.ingredients.map((ingredient) => (
                                    <div key={ingredient.product} className="relative flex items-center py-1">
                                        <div className="flex items-center h-5 mr-3">
                                            <input
                                                id={`ingredient-${ingredient.product}`}
                                                name={`ingredient-${ingredient.product}`}
                                                type="checkbox"
                                                className="focus:ring-primary h-4 w-4 text-primary
                                                border-primary rounded"
                                            />
                                        </div>
                                        <div className="min-w-0 flex-1 text-lg">
                                            <label
                                                htmlFor={`ingredient-${ingredient.product}`}
                                                className="font-normal text-primary select-none"
                                            >
                                                {`${ingredient.amount} ${ingredient.unit} ${ingredient.product}`}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <RecipeSteps steps={recipe.steps} additionalClass={['my-5']} headerText="Steps:" />
            </div>
            <RecipeCards recipes={recipes} headerText="Next recipe to cook:" compact />
        </Layout>
    );
};

export const pageQuery = graphql`
query PortfolioProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    recipe(slug: {eq: $slug}) {
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
            gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
          }
        }
      }
      ingredients {
        amount
        unit
        product
      }
      steps {
        image {
          localFile {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
        step
      }
    }
    allRecipe(
      sort: {flotiqInternal: {createdAt: DESC}}
      limit: 3
      filter: {slug: {ne: $slug}}
    ) {
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
              gatsbyImageData(layout: FULL_WIDTH, placeholder: NONE)
            }
          }
        }
      }
    }
  }
`;

export default RecipeTemplate;
