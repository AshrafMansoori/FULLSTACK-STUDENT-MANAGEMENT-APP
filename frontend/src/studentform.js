import './App.css'

export function StudentForm({ onSubmit }) {
    
    // Create a custom handler function
    const handleSubmit = (e) => {
        e.preventDefault(); // 1. CRITICAL: Stops the page from refreshing

        const form = e.target;

        // 2. Gather the values typed into the inputs
        const newStudentData = {
            name: form.name.value,
            age: form.age.value,
            course: form.course.value,
            city: form.city.value
        };

        // 3. Pass the bundled data back up to App.js
        onSubmit(newStudentData);

        // 4. Clear the input boxes so they are ready for the next student
        form.reset();
    };

    return (
        <div id="form">
            <h2 id="addtext">ADD STUDENT.....</h2>
            
            {/* 5. Point the form to our new custom handler */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">NAME:</label>
                    <input type="text" id="name" name="name" required />
                </div>

                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" min="0" required />
                </div>

                <div>
                    <label htmlFor="course">Course:</label>
                    <input type="text" id="course" name="course" required />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" required />
                </div>
                <div id="addbutton">
                    <button id="add-button" type='submit'>ADD STUDENT</button>
                </div>
            </form>
        </div>
    );
};