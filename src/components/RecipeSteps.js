import React from 'react';
import { Paragraph } from 'flotiq-components-react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const RecipeSteps = ({ additionalClass, steps }) => (
    <div className={['flex flex-wrap max-w-7xl mx-auto '
    + 'bg-white py-5', ...additionalClass].join(' ')}
    >
        {steps.map((step, index) => (
            <div key={step.step} className="w-full px-4 md:px-10">
                <Paragraph additionalClasses={['font-semibold underline mr-2 !p-0']}>
                    {`Step ${index + 1}`}
                </Paragraph>
                <Paragraph additionalClasses={['!p-0 mb-5']}>
                    {step.step}
                </Paragraph>
                {step.image && step.image[0]
                  && (
                      <GatsbyImage
                          image={getImage(step.image[0].localFile)}
                          alt={step.step}
                          className="w-full mb-5 md:mb-10"
                      />
                  )}
            </div>
        ))}
    </div>
);

export default RecipeSteps;
