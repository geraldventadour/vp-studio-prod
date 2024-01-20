const baseUrl = '/realisations';

module.exports = [
  {
    image: 'images/marketing.png',
    name: 'Marketing',
    slug: 'marketing',
    subcategories: ['Brand content', 'Packshot', 'Publicité'],
    url: `${baseUrl}/marketing`,
  },
  {
    image: 'images/corporate.png',
    name: 'Corporate',
    slug: 'corporate',
    subcategories: ['Présentation d’entreprise', 'Témoignage', 'Reportage'],
    url: `${baseUrl}/corporate`,
  },
  {
    image: 'images/sport.png',
    name: 'Sport',
    slug: 'sport',
    subcategories: ['Training', 'Lifestyle'],
    url: `${baseUrl}/sport`,
  },
  {
    image: 'images/after-event.png',
    name: 'After event',
    slug: 'after-event',
    subcategories: ['Conférence', 'Séminaire', 'Congrès', 'Mariage', 'Salon'],
    url: `${baseUrl}/after-event`,
  },
];
