import lessonStyle from "./lesson.module.scss"
import data from "../../data"
import { useState } from "react"

const LessonCard = () => {

  console.log(data[0].id)
  const [props, setLesson] = useState(data);
  const handleClear = () => setLesson([])
  

  return (
    <div className={lessonStyle.container}>
      {
        data.map((props) =>   (  
      <main>
        <div className="lesson-today">
              <p></p>
        </div>
        <div className={lessonStyle.lessons}>
          <img src={props.image} alt={props.name} />
          <div>
              <p>Lesson Name: {props.name}</p>
              <p>Lesson Hour: {props.hour}</p>
          </div>
        </div>
      </main>
        ))
      }
      <div>
         <button onClick={handleClear}>ne var</button>
      </div>
     
    </div>
  )
}

export default LessonCard
