export interface PriceTypesProps {
  value: number;
  symbol: string;
  isDefault?: number;
}
export interface ProductTypesProps {
  id: number;
  serialNumber?: number;
  isNew?: number;
  titleOrder: string;
  photo?: string;
  title: string;
  type: string;
  specification?: string;
  guarantee: {
    start: string;
    end: string;
  },
  price: PriceTypesProps[],
  order: number;
  date: string;
}