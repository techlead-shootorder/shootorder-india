// lib/serviceCategories.js

export const SERVICE_CATEGORIES = {
  'digital-marketing': {
    name: 'Digital Marketing',
    description: 'Boost your online presence and reach your target audience',
    services: [
      'seo', 
      'blog-management', 
      'social-media-marketing', 
      'web-design', 
      'gbp-management',
      'google-ads',
      'meta-ads',
      'digital-pr',
      'influencers-marketing',
    ],
    heroContent: {
      h1: 'Driving Growth',
      h2: 'Building Connections',
      h3: 'Delivering',
      redText: "Results",
      subheading: 'We are a performance-driven digital marketing agency specializing in SEO, Paid Ads, and Data-led strategies that turn clicks into loyal customers.',
      banner_image: '/images/services/digital-marketing/digital-marketing-hero.png'
    }
  },
  'branding': {
    name: 'Web Development',
    description: 'Build powerful, scalable web solutions for your business',
    services: [
      'identity', 
      'audit', 
      'messaging', 
      'design', 
      'campaigns',
    ],
    heroContent: {
      h1: 'Shaping Identities',
      h2: ' Building Trust',
      h3: 'Creating',
      redText: "Legacy",
      subheading: 'We are a strategy-led branding agency crafting unique identities, brand stories, and experiences that make businesses unforgettable.',
      banner_image: '/images/services/branding/branding-hero.png'
    }
  },
  'growth-hacking': {
    name: 'Mobile Development',
    description: 'Create engaging mobile apps for iOS and Android',
    services: [
      'landing-pages', 
      'on-site-engagement', 
      'orm', 
    ],
   heroContent: {
      h1: ' Designing Impact',
      h2: 'Driving Action',
      h3: 'Delivering',
      redText: "Growth",
      subheading: ' We craft conversion-focused landing pages, meaningful on-site engagement, and strong reputation management strategies to fuel business results. ',
      banner_image: '/images/services/growth-hacking/growth-hacking-hero.png'
    }
  },
  'marketing-automation': {
    name: 'Design & Branding',
    description: 'Create compelling visual identities and user experiences',
    services: [
      'analytics-dashboards', 
      'smart-analytics', 
    ],
   heroContent: {
      h1: ' Data that Speaks',
      h2: ' Insights that Drive',
      h3: 'Decisions that',
      redText: "Win",
      subheading: 'We turn complex data into smart dashboards and analytics that power informed, faster, and smarter marketing moves.',
      banner_image: '/images/services/marketing-automation/marketing-automation-hero.png'
    }
  }
};

/**
 * Get category information by service slug
 * @param {string} serviceSlug - The service slug to find category for
 * @returns {Object|null} - Category object with key, or null if not found
 */
export const getCategoryByService = (serviceSlug) => {
  for (const [categoryKey, category] of Object.entries(SERVICE_CATEGORIES)) {
    if (category.services.includes(serviceSlug)) {
      return {
        key: categoryKey,
        ...category
      };
    }
  }
  return null; // Service not found in any category
};

/**
 * Get all services in a specific category
 * @param {string} categoryKey - The category key
 * @returns {Array} - Array of service slugs in that category
 */
export const getServicesByCategory = (categoryKey) => {
  return SERVICE_CATEGORIES[categoryKey]?.services || [];
};

/**
 * Check if a service exists in any category
 * @param {string} serviceSlug - The service slug to check
 * @returns {boolean} - True if service exists, false otherwise
 */
export const isValidService = (serviceSlug) => {
  return getCategoryByService(serviceSlug) !== null;
};

/**
 * Get hero content for a specific service
 * @param {string} serviceSlug - The service slug
 * @returns {Object|null} - Hero content object or null if service not found
 */
export const getHeroContentByService = (serviceSlug) => {
  const category = getCategoryByService(serviceSlug);
  return category?.heroContent || null;
};