const Payload = props => {
  return (
    <>
      <h2 className="header">Payload</h2>
      <div className="row">
        {props.payload.map(item => {
          return (
            <div className="col s6 m6" key={item.payload_id}>
              <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                  <span className="card-title">Customer: {item.customers}</span>
                  <p>Payload Type: {item.payload_type} </p>
                </div>
                <div className="card-action white-text">
                  <span>Nationality: {item.nationality}</span>&nbsp;&nbsp;
                  <span>Manufacturer: {item.manufacturer}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Payload;
