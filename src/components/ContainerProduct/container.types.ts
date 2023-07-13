export interface ContainerTypesProps {
  id: number;
  titleOrder: string;
  title: string;
  type: string;
  guarantee: {
    end: string;
    start: string;
  };
  price: [
    {
      isDefault?: number;
      symbol: string;
      value: number;
    },
    {
      isDefault?: number;
      symbol: string;
      value: number;
    }
  ]
}