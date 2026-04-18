import './view.css'
export function ViewStudent({ students, onDelete }) {
  return (<>

 <div id="viewtext"><h2 >VIEW STUDENTS.....</h2></div> 
    <table border="1" cellPadding="10">

      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s, index) => (
          <tr key={s._id}>
            <td>{index + 1}</td>
            <td>{s.name}</td>
            <td>{s.age}</td>
            <td>{s.course}</td>
            <td>{s.city}</td>
             <td>
              <button onClick={() => onDelete(s._id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table></>
  );
}