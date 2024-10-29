
export interface state {
    income: { name: string; price: number }[];
    expenses: {
      id: number;
      name: string;
      subtotal: number;
      color: string;
      items: { name: string; price: number }[];
    }[];
  }
