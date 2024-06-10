import images from './Images';

const wines = [
  {
    title: 'Classic pancake',
    price: '80',
    tags: 'Breakfast | Pancakes with honey',
  },
  {
    title: 'Egg and Bacon Crossiant',
    price: '110',
    tags: 'Breakfast |Bacon ',
  },
  {
    title: 'BBQ Chicken Pizza',
    price: '170',
    tags: 'Lunch | Chicken',
  },
  {
    title: 'Grilled Salmon',
    price: '190',
    tags: 'Dinner | Vegetables with salmon',
  },
  {
    title: 'Mushroom Risoto',
    price: '175',
    tags: 'Dinner| Mushroon with soup',
  },
];

const cocktails = [
  {
    title: 'Cheese and Crackers platter',
    price: '120',
    tags: 'Snacks|Artisean cheese with veggies',
  },
  {
    title: "Crisp Chicken Wings",
    price: '130',
    tags: 'Snacks | Toasted Chicken wings with cheese',
  },
  {
    title: 'Hummus and Vegggie plater',
    price: '90',
    tags: 'Snacks|Hummus with veggies',
  },
  {
    title: 'Paneer Tikka Skewers',
    price: '120',
    tags: 'Snacks | Paneer roasted with proteins',
  },
  {
    title: 'Fruits Skewers',
    price: '70',
    tags: 'Snacks|Fruits and proteins',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };