import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import FlipCard from '../components/FlipCard'; // Import the FlipCard component

const Home = () => {
  const cardsData = [
    {
      image: 'images/vehicle.jpg',
      title: "Mercedes-Benz Glc ",
      price:"37,000,000",
      year: "2016",
      kilometers: "68,500",
      description: 'A well-maintained Volkswagen Polo with a single owner.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car2.jpg',
      title: "Ford Mustang",
      year: "2015",
      kilometers: "35,000",
      description: 'A classic Ford Mustang in pristine condition.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car3.jpg',
      title: "Tesla Model S",
      year: "2020",
      kilometers: "15,000",
      description: 'A brand new Tesla Model S with autopilot features.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car4.jpg',
      title: "Toyota Corolla",
      year: "2017",
      kilometers: "60,000",
      description: 'A reliable Toyota Corolla with low mileage.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car5.jpg',
      title: "Honda Civic",
      year: "2016",
      kilometers: "40,000",
      description: 'A sporty Honda Civic in excellent condition.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car6.jpg',
      title: "BMW 3 Series",
      year: "2019",
      kilometers: "25,000",
      description: 'An elegant BMW 3 Series with advanced features.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car7.jpg',
      title: "Audi A4",
      year: "2018",
      kilometers: "35,000",
      description: 'A luxurious Audi A4 with low mileage.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car8.jpg',
      title: "Mercedes-Benz C-Class",
      year: "2017",
      kilometers: "50,000",
      description: 'A stylish Mercedes-Benz C-Class with premium features.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car9.jpg',
      title: "Chevrolet Camaro",
      year: "2014",
      kilometers: "45,000",
      description: 'A powerful Chevrolet Camaro with a sleek design.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car10.jpg',
      title: "Nissan Altima",
      year: "2015",
      kilometers: "40,000",
      description: 'A reliable Nissan Altima with comfortable interior.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car11.jpg',
      title: "Hyundai Sonata",
      year: "2016",
      kilometers: "35,000",
      description: 'A fuel-efficient Hyundai Sonata with modern features.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car12.jpg',
      title: "Subaru Outback",
      year: "2017",
      kilometers: "30,000",
      description: 'A versatile Subaru Outback ready for any adventure.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car13.jpg',
      title: "Jeep Wrangler",
      year: "2018",
      kilometers: "25,000",
      description: 'An iconic Jeep Wrangler perfect for off-road enthusiasts.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car14.jpg',
      title: "Ford Explorer",
      year: "2016",
      kilometers: "40,000",
      description: 'A spacious Ford Explorer with advanced safety features.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car15.jpg',
      title: "Kia Sportage",
      year: "2017",
      kilometers: "35,000",
      description: 'A reliable Kia Sportage with a comfortable ride.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car16.jpg',
      title: "Mazda CX-5",
      year: "2018",
      kilometers: "30,000",
      description: 'A stylish Mazda CX-5 with agile handling.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car17.jpg',
      title: "Volvo XC90",
      year: "2019",
      kilometers: "20,000",
      description: 'A luxurious Volvo XC90 with cutting-edge safety technology.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car18.jpg',
      title: "Lexus RX",
      year: "2017",
      kilometers: "35,000",
      description: 'An elegant Lexus RX with a smooth ride.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car19.jpg',
      title: "Infiniti QX60",
      year: "2018",
      kilometers: "25,000",
      description: 'A luxurious Infiniti QX60 with a spacious interior.',
      buttonText: 'Learn more'
    },
    {
      image: 'images/car20.jpg',
      title: "Acura MDX",
      year: "2016",
      kilometers: "30,000",
      description: 'A reliable Acura MDX with advanced technology.',
      buttonText: 'Learn more'
    }
  ];
  
    // Add more card objects as needed


  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Hero />
      <SearchBar />
      <main className="shadow-xl flex flex-wrap justify-center items-center gap-4 p-4">
        {cardsData.map((data, index) => (
          <FlipCard key={index} data={data} /> // Pass data as prop to FlipCard
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
