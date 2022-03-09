import React from 'react';
import { Link } from 'gatsby';
import { Card } from 'flotiq-components-react';
import { ClockIcon, UsersIcon } from '@heroicons/react/solid';

const RecipeCompactCard = ({
    slug,
    cookingTime,
    image,
    name,
    servings,
    tags,
}) => (
    <Card
        rounded="none"
        bordered={false}
        additionalClasses={['mb-4 cursor-pointer']}
    >
        <Link
            to={`/${slug}`}
            className="flex flex-col"
        >
            <Card.Img src={image} alt={name} additionalContainerClasses={['w-full']} />
        </Link>
        <Card.Body
            additionalClasses={[
                'flex flex-col items-start justify-between bg-white',
            ]}
        >
            <Link
                to={`/${slug}`}
                className="flex flex-col"
            >
                <Card.Title additionalClasses={['font-semibold !text-2xl md:!text-3xl']}>
                    {name}
                </Card.Title>

                <div className="flex flex-wrap justify-start text-xs font-light space-x-5 mt-3">
                    <p className="px-3 py-2 bg-medium-gray flex items-center rounded-lg">
                        <ClockIcon className="h-5 w-5 text-primary mr-2" />
                        {' '}
                        <span className="text-sm">{cookingTime}</span>
                    </p>
                    <p className="px-3 py-2 bg-medium-gray flex items-center rounded-lg">
                        <UsersIcon className="h-5 w-5 text-primary mr-2" />
                        {' '}
                        <span className="text-sm">{servings}</span>
                    </p>
                </div>
            </Link>
            {/* Uncomment this to add categories to your recipes */}
            {/* <div className="flex flex-wrap justify-start text-sm font-light mt-3"> */}
            {/*    {tags && tags.map((tag) => ( */}
            {/*        <Link */}
            {/*            key={tag} */}
            {/*            href="/" */}
            {/*            className="mr-5 my-1 py-2 inline-flex items-center justify-center */}
            {/*           rounded-md underline text-xs font-light hover:text-secondary" */}
            {/*        > */}
            {/*            {tag} */}
            {/*        </Link> */}
            {/*    ))} */}
            {/* </div> */}
        </Card.Body>
    </Card>
);

export default RecipeCompactCard;
