import React from 'react';
import { Image, Paragraph } from 'flotiq-components-react';

const RecipeSteps = ({ additionalClass, steps }) => (
    <div className={['flex flex-wrap max-w-7xl mx-auto '
    + 'bg-white py-5', ...additionalClass].join(' ')}
    >
        {steps.map((step, index) => (
            <div key={step.step} className="w-full px-4 md:px-10">
                <Paragraph
                    text={`Step ${index + 1}`}
                    additionalClasses={['font-semibold underline mr-2 !p-0']}
                />
                <Paragraph text={step.step} additionalClasses={['!p-0 mb-5']} />
                {step.image && step.image[0]
                  && <Image url={step.image[0].localFile.publicURL} additionalClasses={['pb-5 md:pb-10']} />}
            </div>
        ))}
    </div>
);

export default RecipeSteps;
