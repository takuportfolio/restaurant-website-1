// Interfaces
export interface MenuItemData {
  name: string;
  description?: string;
  price: string;
}

export interface CategoryData {
  title: string;
  items: MenuItemData[];
}

export const foodMenuData: CategoryData[] = [
  {
    title: "Pizza",
    items: [
      {
        name: "classic Margherita Pizza",
        description: "Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust",
        price: "$14"
      },
      // Add more pizza items here
    ],
  },
  {
    title: "Salads",
    items: [
      {
        name: "Caesar Salad",
        description: "Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust",
        price: "$14"
      },
      // Add more pizza items here
    ],
  },
  {
    title: "Side & More",
    items: [
      {
        name: "Bacon",
        price: "$18"
      },
      {
        name: "Edamame",
        price: "$18"
      },
      {
        name: "Chorizo",
        price: "$18"
      },
      {
        name: "Two Eggs",
        price: "$18"
      },
      // Add more pizza items here
    ],
  },
  {
    title: "Desserts",
    items: [
      {
        name: "Caesar Salad",
        description: "Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust",
        price: "$14"
      },
      // Add more pizza items here
    ],
  },
]

export const drinkMenuData: CategoryData[] = [
  {
    title: "Wine",
    items: [
      {
        name: "classic Margherita Pizza",
        description: "Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust",
        price: "$14"
      },
      // Add more pizza items here
    ],
  },
  {
    title: "Bubbles by the Glass",
    items: [
      {
        name: "Caesar Salad",
        description: "Fresh mozzarella, vibrant tomato sauce, and fragrant basil on our hand-tossed crust",
        price: "$14"
      },
      // Add more pizza items here
    ],
  },
  {
    title: "Cocktails",
    items: [
      {
        name: "Coke",
        price: "$2.5"
      },
      {
        name: "Sprite",
        price: "$2.5"
      },
      {
        name: "Ginger Ale",
        price: "$2.5"
      },
      {
        name: "Fresh Juice",
        price: "$3.0"
      },
      {
        name: "Green Tea Lemonade",
        price: "$3.0"
      },
      // Add more pizza items here
    ],
  },
]