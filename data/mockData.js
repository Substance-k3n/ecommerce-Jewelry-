export const mockProducts = [
    {
      id: 'product-1',
      name: 'Wireless Bluetooth Headphones',
      price: 89.99,
      category: 'electronics',
      description: 'High-quality wireless headphones with noise cancellation and 20-hour battery life.',
      image: 'https://via.placeholder.com/300x300?text=Headphones',
      sellerId: 'seller@example.com'
    },
    {
      id: 'product-2',
      name: 'Smartphone Stand',
      price: 24.99,
      category: 'electronics',
      description: 'Adjustable smartphone stand compatible with all phone sizes.',
      image: 'https://via.placeholder.com/300x300?text=Phone+Stand',
      sellerId: 'seller@example.com'
    },
    {
      id: 'product-3',
      name: 'Cotton T-Shirt',
      price: 19.99,
      category: 'clothing',
      description: '100% premium cotton t-shirt, available in multiple colors and sizes.',
      image: 'https://via.placeholder.com/300x300?text=T-Shirt',
      sellerId: 'seller@example.com'
    }
  ];
  
  export const mockSellers = [
    {
      id: 'seller-1',
      email: 'seller@example.com',
      password: 'password123', // In a real app, this would be hashed
      name: 'John Seller',
      products: [1, 2, 3]
    }
  ];
  
  export const mockCategories = [
    'electronics',
    'clothing',
    'books',
    'home',
    'sports'
  ];