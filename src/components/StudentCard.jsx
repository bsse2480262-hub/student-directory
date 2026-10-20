import { useState } from 'react';

function StudentCard({ student }) {
const [showProfile, setShowProfile] = useState(false);
const [viewCount, setViewCount] = useState(0);

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="text-center mb-3">
       
<div className="text-center mb-3">
  
<img
  src="/profile.png"
  alt="Student profile"
  className="rounded-circle"
  style={{
    width: "80px",
    height: "80px",
    objectFit: "cover"
  }}
/>

</div>

        </div>

        <h5 className="card-title text-center">
          {student.name}
        </h5>

        <p className="text-muted text-center">
          Student ID: {student.id}
        </p>

       
<hr />

<p><strong>Major:</strong> {student.major}</p>
<p><strong>Year:</strong> {student.year}</p>
<p><strong>GPA:</strong> {student.gpa}</p>
{showProfile && (
  <div className="mt-3">
    <hr />
    <p><strong>Email:</strong> {student.name.toLowerCase().replace(" ", ".")}@student.com</p>
    <p><strong>Profile Views:</strong> {viewCount}</p>
  </div>
)}
<button
  className="btn btn-outline-primary w-100"
  onClick={() => {
    if (!showProfile) {
      setViewCount(count => count + 1);
    }
    setShowProfile(!showProfile);
  }}
>
  {showProfile ? "Hide Profile" : "View Profile"}
</button>


      </div>
    </div>
  );
}

export default StudentCard;
