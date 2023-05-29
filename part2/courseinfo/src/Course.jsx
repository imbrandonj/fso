/* eslint-disable react/prop-types */

// imported components:
import Content from './Content.jsx';
import Header from './Header.jsx';

// `course` arg contains properties:
// `id`: int, `name`: string, `parts`: array of obj
export default function Course({ course }) {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  );
}
