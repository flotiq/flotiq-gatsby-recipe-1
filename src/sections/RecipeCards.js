import React from 'react';
import { Header } from 'flotiq-components-react';
import RecipeCard from '../components/RecipeCard';

const RecipeCards = ({ recipes, headerText, compact = false }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        {headerText && <Header additionalClasses={['basis-1 mb-2 !text-3xl !font-medium']} text={headerText} />}
        <div className={compact ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col'}>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    slug={recipe.slug}
                    image={recipe.image[0] && recipe.image[0].localFile}
                    name={recipe.name}
                    description={recipe.description}
                    cookingTime={recipe.cookingTime}
                    servings={recipe.servings}
                    tags={['#dinner', '#vegan', '#lunch', '#glutenfree']}
                    compact={compact}
                />
            ))}
        </div>
    </div>
);

export default RecipeCards;
