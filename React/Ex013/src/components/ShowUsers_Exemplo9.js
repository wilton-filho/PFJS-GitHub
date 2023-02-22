const ShowUsers_Exemplo9 = (props) => {

    return (
        <>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                </tr>
                {props.usuarios.map((user) => (
                    <tr key={user.id}>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                    </tr>
                ))}
            </table>
        </>
    );
}

export default ShowUsers_Exemplo9;