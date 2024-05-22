import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FlipCard from '../components/FlipCard'; // Import the FlipCard component

const Home = () => {
  const cardsData = [
    {
      image: 'images/vehicle.jpg',
      title: "The King's Man",
      rating: '9.0 Rating',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis itaque assumenda saepe animi maxime libero non quasi, odit natus veritatis enim culpa nam inventore doloribus quidem temporibus amet velit accusamus.',
      buttonText: 'Watch Now'
    },
    // Add more card objects as needed
  ];

  return (
    <div className="bg-white min-h-screen flex flex-col">

      <Hero />
      <SearchBar />

      <main className="flex flex-wrap justify-center items-center gap-4 p-4">
        {cardsData.map((data, index) => (
          <FlipCard key={index} data={data} /> // Pass data as prop to FlipCard
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
