const EmployeeList = (props) => {
    console.log(props)
    const renderEmployee = () => {
        return (props.employees.map((emp, index) => {
            return <tr key={index}>
                <td>{emp.empid}</td>
                <td>{emp.ename}</td>
                <td>{emp.sal}</td>
            </tr>
        }))
    }


    return (
        <div style={{ marginLeft: "30%", borderRadius: "6px" }} >
            <h3>From Employeelist Component</h3>
            <table border="2">
                <thead>
                    <tr key=[{emp.empid},{emp.ename},{emp.sal}]>
                        <th>{emp.empid}</th>
                        <th>{emp.ename}</th>
                        <th>{emp.sal}</th>
                    </tr>
                </thead>
                <tbody>
                    {renderEmployee()}
                </tbody>
            </table>
        </div>
    );
}
export default EmployeeList;