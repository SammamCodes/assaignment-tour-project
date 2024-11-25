
import NewsCard from './NewsCard'; // Assuming NewsCard is in the same directory
import eventsData from 'public/data/AddEvent.JSON'; // Assuming AddEvent.json is in the same directory

const Home = () => {
  return (
    <div className="event-list">
      {eventsData.map((event) => (
        <NewsCard key={event.id} news={event} />
      ))}
    </div>
  );
};

export default Home;
