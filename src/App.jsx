
import Navbar from './components/Navbar';
import StudentCard from './components/StudentCard';
import Footer from './components/Footer';

const students = [
  {
    id: 101,
    name: 'Ali Khan',
    major: 'Computer Science',
    year: 2,
    gpa: 3.8,
  },
  {
    id: 102,
    name: 'Sara Ahmed',
    major: 'Information Technology',
    year: 3,
    gpa: 3.6,
  },
  {
    id: 103,
    name: 'Usman Malik',
    major: 'Software Engineering',
    year: 1,
    gpa: 3.5,
  },
];

function App() {
  return (
    <>
      <Navbar />

      <main className="container py-4">
        <h3 className="mb-4">Student Directory</h3>

        <div className="row g-4">
          {students.map((student) => (
            <div className="col-md-6 col-lg-4" key={student.id}>
              <StudentCard student={student} />
            </div>
          ))}
                <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
