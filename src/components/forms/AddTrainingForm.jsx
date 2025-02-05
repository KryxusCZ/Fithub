import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function AddTrainingForm({handleSubmitData}) {
  const [trainingPlan, setTrainingPlan] = useState({
    name: "",
    description: "",
    days: [],
  });

  // Přidání nového dne do plánu
  const handleAddDay = () => {
    setTrainingPlan((prevPlan) => ({
      ...prevPlan,
      days: [
        ...prevPlan.days,
        {
          day: "Pondělí", // Výchozí den
          description: "",
          exercises: [{ name: "", repetitions: "" }], // Prázdný seznam cviků
        },
      ],
    }));
  };

  // Změna hodnot ve formuláři (název plánu, popis, dny, cviky)
  const handleInputChange = (e, dayIndex, exerciseIndex) => {
    const { name, value } = e.target;

    if (dayIndex === undefined) {
      // Změny na úrovni názvu plánu nebo popisu
      setTrainingPlan((prevPlan) => ({
        ...prevPlan,
        [name]: value,
      }));
    } else {
      // Změny na úrovni dnů nebo cviků
      setTrainingPlan((prevPlan) => {
        const updatedDays = [...prevPlan.days];
        if (exerciseIndex === undefined) {
          // Změna dne (např. popis dne nebo den)
          updatedDays[dayIndex] = {
            ...updatedDays[dayIndex],
            [name]: value,
          };
        } else {
          // Změna cviku
          const updatedExercises = [...updatedDays[dayIndex].exercises];
          updatedExercises[exerciseIndex][name] = value;
          updatedDays[dayIndex].exercises = updatedExercises;
        }
        return { ...prevPlan, days: updatedDays };
      });
    }
  };

  // Přidání cviku do určitého dne
  const handleAddExercise = (dayIndex) => {
    setTrainingPlan((prevPlan) => {
      const updatedDays = prevPlan.days.map((day, index) => {
        if (index === dayIndex) {
          // Přidání cviku pouze k odpovídajícímu dni
          return {
            ...day,
            exercises: [...day.exercises, { name: "", repetitions: "" }],
          };
        }
        return day;
      });
      return { ...prevPlan, days: updatedDays };
    });
  };

  // Odebrání cviku
  const handleRemoveExercise = (dayIndex, exerciseIndex) => {
    setTrainingPlan((prevPlan) => {
      const updatedDays = [...prevPlan.days];
      updatedDays[dayIndex].exercises.splice(exerciseIndex, 1); // Odebere cvik
      return { ...prevPlan, days: updatedDays };
    });
  };

  // Odebrání dne
  const handleRemoveDay = (dayIndex) => {
    setTrainingPlan((prevPlan) => {
      const updatedDays = [...prevPlan.days];
      updatedDays.splice(dayIndex, 1); // Odebere den
      return { ...prevPlan, days: updatedDays };
    });
  };

  // Odeslání formuláře (zobrazení v konzoli)
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitData(trainingPlan);
    console.log("Celý tréninkový plán:", trainingPlan);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {/* Název a popis plánu */}
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Název plánu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Zadej název plánu"
            name="name"
            value={trainingPlan.name}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Label>Popis plánu</Form.Label>
          <Form.Control
            type="text"
            placeholder="Popis plánu"
            name="description"
            value={trainingPlan.description}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Group>
      </Row>

      {/* Dynamické přidávání dnů */}
      {trainingPlan.days.map((day, dayIndex) => (
        <div key={dayIndex} style={{ marginBottom: "20px" }}>
          <h5>Den {dayIndex + 1}</h5>
          <Row className="mb-3">
            <Form.Group as={Col} controlId={`formGridDay${dayIndex}`}>
              <Form.Label>Den</Form.Label>
              <Form.Select
                name="day"
                value={day.day}
                onChange={(e) => handleInputChange(e, dayIndex)}
              >
                <option>Pondělí</option>
                <option>Úterý</option>
                <option>Středa</option>
                <option>Čtvrtek</option>
                <option>Pátek</option>
                <option>Sobota</option>
                <option>Neděle</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId={`formGridDayDescription${dayIndex}`}>
              <Form.Label>Popis dne</Form.Label>
              <Form.Control
                type="text"
                placeholder="Popis dne"
                name="description"
                value={day.description}
                onChange={(e) => handleInputChange(e, dayIndex)}
              />
            </Form.Group>
          </Row>

          {/* Cviky pro daný den */}
          <h6>Cviky:</h6>
          {day.exercises.map((exercise, exerciseIndex) => (
            <Row className="mb-3" key={exerciseIndex}>
              <Form.Group as={Col} controlId={`formExerciseName${dayIndex}-${exerciseIndex}`}>
                <Form.Label>Název cviku</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Název cviku"
                  name="name"
                  value={exercise.name}
                  onChange={(e) => handleInputChange(e, dayIndex, exerciseIndex)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId={`formExerciseReps${dayIndex}-${exerciseIndex}`}>
                <Form.Label>Opakování</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Počet opakování"
                  name="repetitions"
                  value={exercise.repetitions}
                  onChange={(e) => handleInputChange(e, dayIndex, exerciseIndex)}
                />
              </Form.Group>

              {/* Tlačítko pro odebrání cviku */}
              <Button
                variant="danger"
                type="button"
                onClick={() => handleRemoveExercise(dayIndex, exerciseIndex)}
                style={{ width:'100px', alignSelf:'end', height: '40px'}}
              >
                Odebrat
              </Button>
            </Row>
          ))}
            <div className="flex button-container">
            <Button
            variant="secondary"
            type="button"
            onClick={() => handleAddExercise(dayIndex)}
          >
            Přidat cvik
          </Button>

          {/* Tlačítko pro odebrání dne */}
          <Button
            variant="danger"
            type="button"
            onClick={() => handleRemoveDay(dayIndex)}
          >
            Odebrat den
          </Button>
            </div>
        </div>
      ))}
        <div className="flex button-container">
  {/* Přidání dalšího dne */}
  <Button variant="primary" type="button" onClick={handleAddDay}>
        Přidat den
      </Button>

      {/* Uložení plánu */}
      <Button variant="success" type="submit">
        Uložit plán
      </Button>
        </div>
    
    </Form>
  );
}

export default AddTrainingForm;

