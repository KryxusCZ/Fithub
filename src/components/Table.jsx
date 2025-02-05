import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

const List = ({ data, type }) => {

  const navigate = useNavigate();
  
    if (!data || data.length === 0) {
        return <p>No data available</p>;
      }
      
    return (
        <Table striped bordered hover variant='dark'>
          <thead className='bg-dark'>
            {type === 'plans' && (
              <tr>
              <th>#</th>
              <th>Název</th>
            </tr>
            )}

          {type === 'meal_plans' && (
              <tr>
              <th>#</th>
              <th>Název</th>
            </tr>
            )}

          {type === 'users' && (
              <tr>
              <th>#</th>
              <th>Jméno</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
            )}
            
          </thead>
          <tbody>
            {type === 'plans' && (
               (data || []).map((item, index) => {
                return (
                  <tr key={item.id} onClick={()=>navigate(`/training-detail/${item.id}`)}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                </tr>
                );
              })
            )   
            }

          {type === 'meal_plans' && (
               (data || []).map((item, index) => {
                return (
                  <tr key={item.id} onClick={()=>navigate(`/meal-planner/${item.id}`)}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                </tr>
                );
              })
            )   
            }

            {type === 'users' && (
               (data || []).map((item, index) => {
                return (
                  <tr key={item.id} onClick={()=>navigate(`/user-detail/${item.id}`)}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
                );
              })
            )   
            }

  
          </tbody>
        </Table>
      );
}

export default List;