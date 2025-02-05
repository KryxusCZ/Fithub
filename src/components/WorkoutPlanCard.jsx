const WorkoutPlanCard = ({ title, description }) => {
    return (
      <div className="card shadow-sm p-3 rounded-4 bg-light" style={{ width: '82%' }}>
        <div className="card-body">
          <h5 className="card-title fw-bold text-primary">{title}</h5>
          <p className="card-text text-secondary">{description}</p>
          <button className="btn btn-outline-primary w-100">Zobrazit plán</button>
        </div>
      </div>
    );
  };
  
  export default WorkoutPlanCard;