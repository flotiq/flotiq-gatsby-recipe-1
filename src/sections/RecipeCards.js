import React from 'react';
import { Header } from 'flotiq-components-react';
import RecipeCard from '../components/RecipeCard';

const RecipeCards = ({ recipes, headerText }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="flex flex-col">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    slug={recipe.slug}
                    image={recipe.image[0] && recipe.image[0].localFile.publicURL}
                    name={recipe.name}
                    description={recipe.description}
                    cookingTime={recipe.cookingTime}
                    servings={recipe.servings}
                    tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
                />
            ))}
        </div>
    </div>
);

export default RecipeCards;
