import "./History.css";
const HistoryComponent = props => {
  return (
    <>
      <h2 className="header">History</h2>
      <div className="row">
        {props.history.map(item => {
          return (
            <div className="col s6 m6" key={item.id}>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">{item.title}</span>
                  <p>{item.details} </p>
                </div>
                <div className="card-action">
                  <a href={item.links.article}>Article</a>
                  <a href={item.links.wikipedia}>Wikipedia</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HistoryComponent;
