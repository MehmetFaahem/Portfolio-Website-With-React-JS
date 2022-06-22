/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://i.ibb.co/yp1KGMR/screen1.png',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://i.ibb.co/d2KKp55/screen1-1.png',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://i.ibb.co/1K5g4nG/screen1-2.png',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}

export default function Intro() {

    return (
        <div className="bg-black mb-20" id='Intro'>
            <div className="">
                <div className='flex flex-col'>
                    <div className=''>
                        <img
                            src={product.images[0].src}
                            alt={product.images[0].alt}
                            className="h-auto w-auto border-blue-600 border-2 shadow-2xl shadow-white"
                        />
                    </div>
                    <img
                        src={product.images[1].src}
                        alt={product.images[1].alt}
                        className="h-auto w-auto"
                    />
                    <img
                        src={product.images[2].src}
                        alt={product.images[2].alt}
                        className="h-auto w-auto"
                    />
                </div>
            </div>
        </div>
    )
}
