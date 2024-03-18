const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <b><p>total of {sum} exercises</p></b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => <>{parts.map(part => <Part part={part} key={part.id}></Part>)}</>

const Course = ({course}) => {
  const id = course.id
  const name = course.name
  const parts = course.parts
  const sum = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total sum={sum} />
    </div>
  )
}

export default Course