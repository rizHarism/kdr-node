/**
 * Make any changes you need to make to the database here
 */

const { Articles } = require("./../utils/db");

async function up() {
  // Write migration here
  await Articles.insertMany([
    {
      title: "Exploring the Depths of Artificial Intelligence",
      slug: "exploring-the-depths-of-artificial-intelligence",
      author: "John Doe",
      publication_date: "2024-08-01",
      content:
        "<p>Artificial Intelligence (AI) has made significant strides in recent years. It is transforming industries and creating new opportunities for innovation.</p><p>With advancements in machine learning and natural language processing, AI is becoming more sophisticated and capable of performing complex tasks.</p><p>In the future, AI will continue to evolve and integrate into various aspects of daily life, shaping how we interact with technology.</p>",
      excerpt: "Artificial Intelligence (AI) has made significant strides in recent years.",
      tag: ["AI", "Technology", "Innovation"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 99,
    },
    {
      title: "The Rise of Remote Work: Trends and Predictions",
      slug: "the-rise-of-remote-work-trends-and-predictions",
      author: "Alice Johnson",
      publication_date: "2024-08-02",
      content:
        "<p>Remote work has become increasingly popular due to advancements in technology and changing work preferences. Companies are adopting flexible work arrangements to attract talent.</p><p>As remote work continues to grow, it is important to understand the trends shaping this movement, including the use of collaboration tools and the shift towards results-oriented work.</p><p>Looking ahead, remote work will likely become a standard option for many professionals, offering greater flexibility and work-life balance.</p>",
      excerpt: "Remote work has become increasingly popular due to advancements in technology.",
      tag: ["Remote Work", "Trends", "Technology"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 66,
    },
    {
      title: "Understanding Blockchain Technology and Its Applications",
      slug: "understanding-blockchain-technology-and-its-applications",
      author: "Michael Brown",
      publication_date: "2024-08-03",
      content:
        "<p>Blockchain technology is revolutionizing various industries by providing a secure and transparent way to record transactions. Its decentralized nature ensures that data is not easily manipulated.</p><p>Applications of blockchain extend beyond cryptocurrency, including supply chain management, digital identity verification, and smart contracts.</p><p>As blockchain technology continues to evolve, it has the potential to create new opportunities for innovation and efficiency in multiple sectors.</p>",
      excerpt: "Blockchain technology is revolutionizing various industries by providing a secure and transparent way to record transactions.",
      tag: ["Blockchain", "Technology", "Cryptocurrency"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 54,
    },
    {
      title: "The Evolution of Digital Marketing Strategies",
      slug: "the-evolution-of-digital-marketing-strategies",
      author: "Sarah Miller",
      publication_date: "2024-08-04",
      content:
        "<p>Digital marketing has evolved significantly over the years, adapting to new technologies and changing consumer behaviors. The rise of social media and data analytics has transformed how businesses reach their audience.</p><p>Effective digital marketing strategies now include a mix of content marketing, SEO, social media engagement, and targeted advertising.</p><p>Looking forward, digital marketing will continue to evolve with emerging technologies and new platforms, offering innovative ways to connect with consumers.</p>",
      excerpt: "Digital marketing has evolved significantly over the years, adapting to new technologies and changing consumer behaviors.",
      tag: ["Digital Marketing", "Strategy", "Social Media"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 49,
    },
    {
      title: "The Future of Renewable Energy Technologies",
      slug: "the-future-of-renewable-energy-technologies",
      author: "Robert Lee",
      publication_date: "2024-08-05",
      content:
        "<p>Renewable energy technologies are at the forefront of efforts to combat climate change and reduce reliance on fossil fuels. Innovations in solar, wind, and hydroelectric power are driving the transition to cleaner energy sources.</p><p>Advancements in energy storage and grid integration are also crucial for maximizing the efficiency and reliability of renewable energy systems.</p><p>As technology continues to advance, renewable energy will play an increasingly important role in shaping a sustainable future.</p>",
      excerpt: "Renewable energy technologies are at the forefront of efforts to combat climate change and reduce reliance on fossil fuels.",
      tag: ["Renewable Energy", "Technology", "Sustainability"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 2,
    },
    {
      title: "The Impact of Artificial Intelligence on Healthcare",
      slug: "the-impact-of-artificial-intelligence-on-healthcare",
      author: "Emma Johnson",
      publication_date: "2024-08-06",
      content:
        "<p>Artificial Intelligence is making a significant impact on healthcare by improving diagnostics, personalizing treatment plans, and enhancing patient care. AI-powered tools are helping medical professionals make more accurate decisions.</p><p>From predictive analytics to robotic surgery, AI is transforming how healthcare is delivered and managed.</p><p>As AI technology continues to advance, it promises to further revolutionize the healthcare industry, leading to better outcomes and more efficient processes.</p>",
      excerpt: "Artificial Intelligence is making a significant impact on healthcare by improving diagnostics, personalizing treatment plans, and enhancing patient care.",
      tag: ["AI", "Healthcare", "Technology"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 2,
    },
    {
      title: "Exploring the Benefits of Smart Home Technology",
      slug: "exploring-the-benefits-of-smart-home-technology",
      author: "James Taylor",
      publication_date: "2024-08-07",
      content:
        "<p>Smart home technology is transforming the way we live by offering convenience, security, and energy efficiency. From voice-controlled assistants to automated lighting, these technologies enhance daily life.</p><p>With the integration of IoT devices, smart homes can provide better control over various aspects of home management, such as temperature, security, and entertainment.</p><p>As smart home technology continues to evolve, it will become an integral part of modern living, offering even more benefits and capabilities.</p>",
      excerpt: "Smart home technology is transforming the way we live by offering convenience, security, and energy efficiency.",
      tag: ["Smart Home", "Technology", "IoT"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 2,
    },
    {
      title: "Innovations in Autonomous Vehicle Technology",
      slug: "innovations-in-autonomous-vehicle-technology",
      author: "Sophia Wilson",
      publication_date: "2024-08-08",
      content:
        "<p>Autonomous vehicles are revolutionizing transportation by offering the promise of safer and more efficient travel. Innovations in sensors, machine learning, and data processing are making self-driving cars a reality.</p><p>These advancements are not only improving vehicle safety but also enhancing the overall driving experience.</p><p>As autonomous vehicle technology continues to develop, it will likely lead to significant changes in how we travel and interact with transportation systems.</p>",
      excerpt: "Autonomous vehicles are revolutionizing transportation by offering the promise of safer and more efficient travel.",
      tag: ["Autonomous Vehicles", "Technology", "Innovation"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 2,
    },
    {
      title: "Advances in Quantum Computing Technology",
      slug: "advances-in-quantum-computing-technology",
      author: "Olivia Brown",
      publication_date: "2024-08-09",
      content:
        "<p>Quantum computing represents a significant leap forward in computational power and capabilities. By leveraging quantum bits or qubits, quantum computers can solve complex problems that are currently beyond the reach of classical computers.</p><p>Recent advancements in quantum computing are paving the way for breakthroughs in fields such as cryptography, materials science, and artificial intelligence.</p><p>As the technology continues to advance, quantum computing will likely play a crucial role in addressing some of the most challenging problems facing science and industry.</p>",
      excerpt: "Quantum computing represents a significant leap forward in computational power and capabilities.",
      tag: ["Quantum Computing", "Technology", "Science"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 87,
    },
    {
      title: "The Role of Big Data in Modern Business",
      slug: "the-role-of-big-data-in-modern-business",
      author: "Ethan Smith",
      publication_date: "2024-08-10",
      content:
        "<p>Big Data is transforming the way businesses operate by providing valuable insights into customer behavior, market trends, and operational efficiency. Analyzing large volumes of data helps companies make informed decisions and stay competitive.</p><p>With the help of advanced analytics tools and techniques, businesses can uncover patterns and trends that were previously hidden.</p><p>The continued growth of Big Data will likely lead to even more innovative applications and opportunities for businesses across various industries.</p>",
      excerpt: "Big Data is transforming the way businesses operate by providing valuable insights into customer behavior, market trends, and operational efficiency.",
      tag: ["Big Data", "Business", "Analytics"],
      image: "https://demirsondaj.com.tr/wp-content/uploads/demo/placeholder.svg",
      hit: 46,
    },
  ]);
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  // Write migration here
  Articles.collection.drop();
}

module.exports = { up, down };
