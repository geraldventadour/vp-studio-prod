const baseUrl = '/realisations';

module.exports = [
  {
    name: 'Marketing',
    subcategories: ['Brand content', 'Packshot', 'Publicité'],
    url: `${baseUrl}/marketing`,
  },
  {
    name: 'Corporate',
    subcategories: ['Présentation d’entreprise', 'Témoignage', 'Reportage'],
    url: `${baseUrl}/corporate`,
  },
  {
    name: 'Sport',
    subcategories: ['Conférence', 'Séminaire', 'Congrès', 'Mariage', 'Salon'],
    url: `${baseUrl}/after-event`,
  },
];
