const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

const Header = (p) => {
  console.log(p.course)
  return <h1>{p.course.name}</h1>
}

const Part = (p) => {
  return(
    <>
      <p>
        {p.name} {p.exercises}
      </p>
    </>
  )
}
const Content = (p) => {
  
  return(
    <>
      <Part name={p.course.parts[0].name} exercises={p.course.parts[0].exercises} />
      <Part name={p.course.parts[1].name} exercises={p.course.parts[1].exercises} />
      <Part name={p.course.parts[2].name} exercises={p.course.parts[2].exercises} />
     </>
      )
}

const Total = (p) => {
  const sum = (parts) => {
    return parts.reduce((acum,actual_part) => acum + actual_part.exercises, 0)
  }
  return(
    <>
      <p>Number of exercises {sum(p.course.parts)}</p>
    </>
  )
}

export default App