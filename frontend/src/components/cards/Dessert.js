import { useParams } from 'react-router-dom';
import desserts_data from '../data/desserts';
import Ingredients from './Ingredients';
import pic from '../data/no_image.png';
import './Dessert.css';

function Dessert() {
  const { id } = useParams();
  const [dessert, setDessert] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  // для тестов!
  /* const result = desserts_data.filter(function (element) {
    if (element.id == id) {
      return element;
    } else {
      return false;
    }
  });
  const data = { ...result[0] }; */
  // для тестов!
  useEffect(() => {
    fetch(`/api/desserts/${id}/`, { method: 'GET' })
      .then((response) => response.json())
      .then((json) => setDessert(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div className="dessert-item">
      {isLoading ? (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      ) : (
        <>
          <img
            className="img"
            src={dessert.image !== undefined ? dessert.image : pic}
            alt="изображение отсутствует("
          />
          <p className="dessert-title">{dessert.name}</p>
          <p className="dessert-description">{dessert.text}</p>
          <div className="ingredients-container">
            <div className="ingredients">
              {'Состав:\n'}
              <Ingredients {...dessert.ingredients} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dessert;
