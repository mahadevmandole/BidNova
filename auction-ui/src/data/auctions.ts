export type Auction = {
  id: string;
  title: string;
  category: string;
  bid: number;
  bids: number;
  ends: string;
  image: string;
  seller: string;
  condition: string;
  description: string;
  featured?: boolean;
};
export const auctions: Auction[] = [
  {
    id: 'vintage-camera',
    title: 'Leica M6 TTL · 0.72',
    category: 'Photography',
    bid: 2480,
    bids: 18,
    ends: '02h 14m',
    image: 'photo-1516035069371-29a1b244cc32',
    seller: 'Frame & Found',
    condition: 'Excellent',
    description:
      'A beautifully kept Leica M6 TTL in classic black. Rangefinder is bright and accurate, mechanics are smooth, and the body shows only the gentle signs of a camera that has made a few good journeys.',
    featured: true,
  },
  {
    id: 'mid-century-chair',
    title: 'Eames Lounge Chair',
    category: 'Furniture',
    bid: 3850,
    bids: 12,
    ends: '04h 38m',
    image: 'photo-1598300056393-4aac492f4344',
    seller: 'Northline Objects',
    condition: 'Very good',
    description:
      'A warm walnut shell paired with supple black leather. This mid-century lounge chair has been carefully restored and is ready for another generation of slow Sunday mornings.',
  },
  {
    id: 'studio-ceramics',
    title: 'Hand-thrown stoneware set',
    category: 'Art & Objects',
    bid: 320,
    bids: 9,
    ends: '06h 05m',
    image: 'photo-1578749556568-bc2c40e68b61',
    seller: 'Mina Ceramics',
    condition: 'New',
    description:
      'A one-of-a-kind set of six hand-thrown stoneware pieces, finished in a soft, speckled glaze. Each piece has its own subtle variations from the maker’s hands.',
  },
  {
    id: 'vinyl-collection',
    title: 'Blue Note classics · 12 LPs',
    category: 'Music',
    bid: 685,
    bids: 24,
    ends: '01h 52m',
    image: 'photo-1603048588665-791ca8aea617',
    seller: 'Needle Drop',
    condition: 'Very good',
    description:
      'Twelve essential Blue Note pressings collected over decades. Sleeves and records have been graded conservatively; a wonderful start or addition to a serious jazz shelf.',
  },
  {
    id: 'dive-watch',
    title: 'Omega Seamaster 300',
    category: 'Watches',
    bid: 4120,
    bids: 31,
    ends: '08h 21m',
    image: 'photo-1523170335258-f5ed11844a49',
    seller: 'Second Hour',
    condition: 'Excellent',
    description:
      'A timeless diver with a crisp, legible dial and comfortable steel bracelet. Recently serviced and accompanied by its original presentation box.',
  },
  {
    id: 'abstract-painting',
    title: 'Study in blue, No. 08',
    category: 'Art & Objects',
    bid: 940,
    bids: 7,
    ends: '12h 46m',
    image: 'photo-1541961017774-22349e4a1262',
    seller: 'Studio Archive',
    condition: 'New',
    description:
      'An original acrylic and pigment work on linen by emerging artist Alix Moreau. Signed on the reverse and delivered with a certificate of authenticity.',
  },
];
export const themes = [
  { id: 'editorial', name: 'The Edit', hint: 'Warm & considered' },
  { id: 'gallery', name: 'After Hours', hint: 'Dark & dramatic' },
  { id: 'modern', name: 'Open House', hint: 'Bright & modern' },
] as const;
export type Theme = (typeof themes)[number]['id'];
export const money = (n: number) => '$' + n.toLocaleString('en-US');
export const photo = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
