import React from "react";
import * as LucideIcons from "lucide-react";

// Timeline data from ProcessCovered features
// You can pass services.features as a prop, or import the data
function getIconComponent(iconName) {
  if (React.isValidElement(iconName)) return iconName;
  const pascalCase = iconName?.charAt(0).toUpperCase() + iconName?.slice(1);
  const IconComponent = LucideIcons[iconName] || LucideIcons[pascalCase] || LucideIcons.Package;
  return IconComponent;
}

export default function ProcessTimeline({ features, bottomheading, subheading = "" }) {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="!max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900 font-poppins">
          {bottomheading}
        </h2>
        {subheading && (
          <p className="text-lg text-center text-gray-600 mb-10 font-poppins">{subheading}</p>
        )}
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-1 bg-gray-200 h-full z-0" style={{ top: 40, bottom: 40 }} />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 relative z-10">
            {features.map((step, idx) => {
              const IconComponent = getIconComponent(step.icon);
              const isLeft = idx % 2 === 0;
              return (
                <div key={idx} className={`flex ${isLeft ? 'justify-end' : 'justify-start'} items-center relative`}>
                  <div className={`w-full max-w-md ${isLeft ? 'pr-12' : 'pl-12'}`}> 
                    <div className={`flex items-center gap-x-3 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                        <IconComponent size={32} className="text-primary" />
                      </span>
                      <h3 className={`font-bold text-primary text-xl mb-2 ${isLeft ? 'text-right' : 'text-left'} font-poppins`}>{step.heading}</h3>
                    </div>
                    <p className={`text-gray-700 leading-relaxed text-base mb-2 ${isLeft ? 'text-right' : 'text-left'}`}>{step.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
