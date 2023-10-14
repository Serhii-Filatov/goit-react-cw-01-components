import { Head } from "./Head";
import data from '../data.json';

export const Card = () => {
  return data.map(photo => {
    return (
      <div
        key={photo.id}
        className="card mx-auto my-5"
        style={{ width: '18rem' }}
      >
        <img src={photo.url} className="card-img-top" alt={photo.title} />
        <div className="card-body">
          <h5 className="card-title">Card name: {photo.title}</h5>
          {/* {Head({clas: "card-title", id: 'id-123'})} */}
          { <Head clas="card-title" id='id-123' /> }
          <a href="http" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  });
};