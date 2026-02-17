export interface ProductVariation {
  type: 'Size' | 'Color' | 'Material';
  options: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  tags: string[];
  image: string;
  description: string;
  origin: string;
  auditDate: string;
  variations: ProductVariation[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Linen Abaya",
    price: 120,
    category: "Abayas",
    tags: ["Ethically Sourced", "Artisan Made"],
    image: "/images/product-linen-abaya.png",
    description: "Hand-woven linen abaya crafted by artisans in Morocco. A timeless piece designed for breathability and elegance.",
    origin: "Casablanca, Morocco",
    auditDate: "Oct 2025",
    variations: [
      { type: 'Size', options: ['Small', 'Medium', 'Large', 'Extra Large'] },
      { type: 'Color', options: ['Charcoal', 'Earth', 'Sand'] },
      { type: 'Material', options: ['100% Organic Linen'] }
    ]
  },
  {
    id: "2",
    name: "Silk Medina Hijab",
    price: 45,
    category: "Hijabs",
    tags: ["Artisan Made"],
    image: "/images/product-silk-hijab.png",
    description: "Premium silk medina hijab with hand-rolled edges. Sourced from sustainable mulberry silk farms.",
    origin: "Medina, Saudi Arabia",
    auditDate: "Nov 2025",
    variations: [
      { type: 'Size', options: ['Standard (70x180cm)'] },
      { type: 'Color', options: ['Olive', 'Midnight', 'Dusty Rose'] }
    ]
  },
  {
    id: "3",
    name: "Terracotta Prayer Set",
    price: 85,
    category: "Sets",
    tags: ["Ethically Sourced"],
    image: "/images/product-prayer-set.png",
    description: "Soft cotton prayer set dyed with natural pigments. Includes a loose-fitting khimar and matching skirt.",
    origin: "Cairo, Egypt",
    auditDate: "Dec 2025",
    variations: [
      { type: 'Size', options: ['Petite', 'Standard', 'Tall'] },
      { type: 'Material', options: ['Organic Cotton', 'Bamboo Blend'] }
    ]
  },
  {
    id: "4",
    name: "Embroidered Kaftan",
    price: 150,
    category: "Kaftans",
    tags: ["Artisan Made", "Ethically Sourced"],
    image: "/images/product-kaftan.png",
    description: "Intricately embroidered kaftan using traditional techniques. Each piece takes 12 days to hand-stitch.",
    origin: "Amman, Jordan",
    auditDate: "Jan 2026",
    variations: [
      { type: 'Size', options: ['One Size (Relaxed Fit)'] },
      { type: 'Color', options: ['Cream/Gold', 'Royal Blue/Silver'] }
    ]
  },
  {
    id: "5",
    name: "Organic Cotton Kimono",
    price: 95,
    category: "Kimonos",
    tags: ["Ethically Sourced"],
    image: "/images/product-kimono.png",
    description: "Breathable organic cotton kimono for everyday wear. Ideal for layering during transitional seasons.",
    origin: "Izmir, Turkey",
    auditDate: "Nov 2025",
    variations: [
      { type: 'Size', options: ['Small', 'Medium', 'Large'] },
      { type: 'Color', options: ['Dusty Rose', 'Slate', 'Sage'] }
    ]
  }
];
