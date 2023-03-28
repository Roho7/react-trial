import { useState } from "react"
import * as Icon from 'react-bootstrap-icons';
import { PersonBadgeFill } from "react-bootstrap-icons";


const Employees = () =>{

    const [selectedTeam, setTeam] = useState('A');

    const [employees, setEmployees] = useState([
  {
    id: 1,
    name: "John Smith",
    company: "ABC Company",
    age: 28,
    role: "Developer",
    teamName: "A",
  },
  {
    id: 2,
    name: "Jane Doe",
    company: "XYZ Inc.",
    age: 35,
    role: "Manager",
    teamName: "A",
  },
  {
    id: 3,
    name: "Bob Johnson",
    company: "Acme Corporation",
    age: 42,
    role: "Director",
    teamName: "A"
  },
  {
    id: 4,
    name: "Sara Lee",
    company: "Bakery Co.",
    age: 24,
    role: "Sales Associate",
    teamName: "B",
  },
  {
    id: 5,
    name: "Mark Davis",
    company: "Marketing Pro",
    age: 31,
    role: "Marketing Specialist",
    teamName: "B",
  },
  {
    id: 6,
    name: "Karen White",
    company: "Software Solutions",
    age: 27,
    role: "QA Tester",
    teamName: "B",
  },
  {
    id: 7,
    name: "Mike Thompson",
    company: "Engineering Co.",
    age: 39,
    role: "Engineer",
    teamName: "C",
  },
  {
    id: 8,
    name: "Emily Rodriguez",
    company: "IT Services",
    age: 29,
    role: "IT Consultant",
    teamName: "C",
  },
  {
    id: 9,
    name: "Tom Jackson",
    company: "Design Studio",
    age: 33,
    role: "Graphic Designer",
    teamName: "C",
  },
  {
    id: 10,
    name: "Lisa Wang",
    company: "Consulting Group",
    age: 26,
    role: "Consultant",
    teamName: "C",
  }
])

function handleTeamSelectionChange(event)
    {
        console.log(event.target.value)
        setTeam(event.target.value)
    }


function handleEmployeeCardClick(some){
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(some.currentTarget.id)
        ?(employee.team === selectedTeam)?{...employee, teamName: ''}:{...employee, teamName: selectedTeam}
        :employee);

        setEmployees(transformedEmployees);
    }

    return(
        <main className="d-flex flex-column align-items-center">

            <select className="form-select form-select-lg w-25" value={selectedTeam} onChange={handleTeamSelectionChange}>
                <option value='A' href="#">Team A </option>
                <option value='B' href="#">Team B </option>
                <option value='C' href="#">Team C </option>
            </select>
            
            <div className="d-flex flex-wrap border container-fluid justify-content-center">
            {
                employees.map((employee) => (
                    <div className={(employee.teamName === selectedTeam ? 'employees pd-1 p-3 w-25 m-3 rounded border border-2 border-success' : 'employees pd-1 p-3 w-25 m-3 rounded')} onClick={handleEmployeeCardClick}>                                                                                           
                        <PersonBadgeFill color="#517ec2" fontSize={'2rem'}/>
                        <p className="h3">{employee.name}</p>
                        <p className="h6">{employee.role}</p>
                        <p className="display">{employee.company}</p> 
                        <p className="display">Age: {employee.age}</p>
                        <p className="display">Team {employee.teamName}</p>
                    </div>
                ))
                
            }
            </div>
        </main>
    )
}

export default Employees