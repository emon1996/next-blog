// lib/blogs.js


export const blogs = [
  {
    id: 1,
    title: 'The Rise of Artificial Intelligence in Everyday Life',
    description: 'Artificial Intelligence (AI) is transforming various industries, from healthcare to finance. This post explores how AI is integrated into daily activities and its impact on our lives.',
    image: '/images/blog1.jpg', // Ensure you have this image in the public folder
    date: 'August 1, 2024',
    author: {
      name: 'John Doe',
      avatar: '/images/avatar1.jpg' // Ensure you have this image in the public folder
    },
    comments: [
      { author: 'Jane Smith', text: 'An insightful read on AI!' },
      { author: 'Tom Brown', text: 'AI is indeed shaping our future.' }
    ]
  },
  {
    id: 2,
    title: 'The Evolution of Cloud Computing',
    description: 'Cloud computing has revolutionized how businesses and individuals store and manage data. This post delves into the evolution of cloud technology and its significance in the modern tech landscape.',
    image: '/images/blog2.jpg',
    date: 'August 5, 2024',
    author: {
      name: 'Emily Johnson',
      avatar: '/images/avatar2.jpg'
    },
    comments: [
      { author: 'Alice Davis', text: 'A comprehensive overview of cloud computing.' },
      { author: 'Bob White', text: 'Cloud technology is indeed crucial for today’s businesses.' }
    ]
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for 2024',
    description: 'With increasing cyber threats, it’s essential to stay ahead with the best cybersecurity practices. This post provides tips and strategies to protect your digital assets in 2024.',
    image: '/images/blog3.jpg',
    date: 'August 10, 2024',
    author: {
      name: 'Michael Brown',
      avatar: '/images/avatar3.jpg'
    },
    comments: [
      { author: 'Laura Wilson', text: 'Great tips on cybersecurity!' },
      { author: 'David Miller', text: 'I’ll definitely be following these practices.' }
    ]
  },
  {
    id: 4,
    title: 'The Future of Quantum Computing',
    description: 'Quantum computing holds the promise of solving problems that are currently beyond the reach of classical computers. This post discusses the potential and future of quantum technology.',
    image: '/images/blog4.jpg',
    date: 'August 15, 2024',
    author: {
      name: 'Sophia Lee',
      avatar: '/images/avatar4.jpg'
    },
    comments: [
      { author: 'Linda Clark', text: 'Fascinating insights into quantum computing!' },
      { author: 'James Martinez', text: 'Looking forward to the future of this technology.' }
    ]
  }
];
