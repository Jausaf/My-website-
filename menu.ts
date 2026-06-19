export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category: 'veg' | 'non-veg' | 'beverage';
}

export const menuItems: MenuItem[] = [
  // Vegetarian Items
  {
    id: 'veg-1',
    name: 'Paneer Tikka',
    description: 'Cottage cheese marinated in spices and grilled',
    price: 280,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-paneer-tikka-6NeGeeP7xJbjd58XPHbc8Y.webp',
    category: 'veg',
  },
  {
    id: 'veg-2',
    name: 'Vegetable Samosa',
    description: 'Crispy pastry filled with spiced potatoes and peas',
    price: 120,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-samosa-DhZKWVyEmd96En2ZQtgYht.webp',
    category: 'veg',
  },
  {
    id: 'veg-3',
    name: 'Aloo Gobi',
    description: 'Potatoes and cauliflower cooked with aromatic spices',
    price: 200,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-aloo-gobi-VSY2E4pcYtQtvLAJmvRnuw.webp',
    category: 'veg',
  },
  {
    id: 'veg-4',
    name: 'Dal Makhani',
    description: 'Creamy lentils cooked with butter and cream',
    price: 220,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-dal-makhani-jyQSD9BwzkiZxQZBbjHAtv.webp',
    category: 'veg',
  },
  {
    id: 'veg-5',
    name: 'Chana Masala',
    description: 'Chickpeas in a rich tomato-based sauce',
    price: 210,
    category: 'veg',
  },
  {
    id: 'veg-6',
    name: 'Vegetable Biryani',
    description: 'Fragrant rice cooked with mixed vegetables and spices',
    price: 280,
    category: 'veg',
  },
  {
    id: 'veg-7',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese in a creamy tomato sauce',
    price: 300,
    category: 'veg',
  },
  {
    id: 'veg-8',
    name: 'Vegetable Hakka Noodles',
    description: 'Indo-Chinese stir-fried noodles with fresh vegetables',
    price: 200,
    category: 'veg',
  },
  {
    id: 'veg-9',
    name: 'Palak Paneer',
    description: 'Cottage cheese in spinach sauce',
    price: 260,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-palak-paneer-9k2VTBkhPz6PGTpQiqL5Fd.webp',
    category: 'veg',
  },
  {
    id: 'veg-10',
    name: 'Vegetable Manchurian',
    description: 'Vegetable balls in a tangy sauce',
    price: 220,
    category: 'veg',
  },

  // Non-Vegetarian Items
  {
    id: 'nveg-1',
    name: 'Chicken Tikka',
    description: 'Marinated chicken pieces grilled to perfection',
    price: 320,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-chicken-tikka-AQkTVMBXzX8MLouFUMVtho.webp',
    category: 'non-veg',
  },
  {
    id: 'nveg-2',
    name: 'Tandoori Chicken',
    description: 'Whole chicken marinated and cooked in tandoor',
    price: 450,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-tandoori-chicken-AhfW8tV3yGu3etwhY2Uvay.webp',
    category: 'non-veg',
  },
  {
    id: 'nveg-3',
    name: 'Butter Chicken',
    description: 'Tender chicken in a creamy tomato sauce',
    price: 340,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-butter-chicken-GMXghX3YQvgvwyM2oUvRkT.webp',
    category: 'non-veg',
  },
  {
    id: 'nveg-4',
    name: 'Chicken Biryani',
    description: 'Fragrant rice cooked with tender chicken',
    price: 380,
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663770132509/a3vyFccyzEa2pbzzSu8Qwb/menu-biryani-4jnSnoLTmuhqCdWW2kDfjk.webp',
    category: 'non-veg',
  },
  {
    id: 'nveg-5',
    name: 'Chicken Fried Rice',
    description: 'Stir-fried rice with chicken and vegetables',
    price: 280,
    category: 'non-veg',
  },
  {
    id: 'nveg-6',
    name: 'Mutton Curry',
    description: 'Tender mutton cooked in aromatic spices',
    price: 380,
    category: 'non-veg',
  },
  {
    id: 'nveg-7',
    name: 'Fish Curry',
    description: 'Fresh fish in a coconut-based sauce',
    price: 360,
    category: 'non-veg',
  },
  {
    id: 'nveg-8',
    name: 'Chicken Hakka Noodles',
    description: 'Indo-Chinese noodles with chicken',
    price: 260,
    category: 'non-veg',
  },
  {
    id: 'nveg-9',
    name: 'Chicken Manchurian',
    description: 'Chicken balls in a tangy sauce',
    price: 280,
    category: 'non-veg',
  },
  {
    id: 'nveg-10',
    name: 'Tandoori Fish',
    description: 'Fresh fish marinated and grilled',
    price: 400,
    category: 'non-veg',
  },

  // Beverages
  {
    id: 'bev-1',
    name: 'Masala Chai',
    description: 'Traditional Indian spiced tea',
    price: 60,
    category: 'beverage',
  },
  {
    id: 'bev-2',
    name: 'Fresh Mango Lassi',
    description: 'Yogurt-based drink with fresh mango',
    price: 120,
    category: 'beverage',
  },
  {
    id: 'bev-3',
    name: 'Iced Coffee',
    description: 'Chilled coffee with milk',
    price: 100,
    category: 'beverage',
  },
  {
    id: 'bev-4',
    name: 'Freshly Squeezed Orange Juice',
    description: 'Fresh orange juice',
    price: 140,
    category: 'beverage',
  },
  {
    id: 'bev-5',
    name: 'Cucumber Mint Water',
    description: 'Refreshing cucumber and mint infused water',
    price: 80,
    category: 'beverage',
  },
  {
    id: 'bev-6',
    name: 'Sweet Lassi',
    description: 'Traditional yogurt-based sweet drink',
    price: 110,
    category: 'beverage',
  },
  {
    id: 'bev-7',
    name: 'Iced Tea',
    description: 'Chilled tea with lemon',
    price: 90,
    category: 'beverage',
  },
  {
    id: 'bev-8',
    name: 'Guava Juice',
    description: 'Fresh guava juice',
    price: 130,
    category: 'beverage',
  },
];
