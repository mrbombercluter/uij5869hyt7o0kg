export interface StripeProduct {
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  price: number;
  currency: string;
}

export const stripeProducts: StripeProduct[] = [
  {
    priceId: 'price_1Rbs9kQ4SCMmHq8coAoyBeNf',
    name: "Pikaware's configuration",
    description: 'every configs ACCESS TO EVERYTHING',
    mode: 'payment',
    price: 1.00,
    currency: 'eur',
  },
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};