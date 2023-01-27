import newslist from '../data/newslist';
import NewsCard from './NewsCard';
import './NewsCards.css';

function NewsCards() {
  return (
    <div className="news-cards">
      {newslist.map((news) => {
        return <NewsCard {...news} key={news.id} />;
      })}
    </div>
  );
}

export default NewsCards;
