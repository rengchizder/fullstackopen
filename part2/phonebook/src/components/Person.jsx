const Person = ({ name, number, handleDelete }) => {
    return (
        <>
            {name} {number} <button onClick={handleDelete}>delete</button><br />
        </>
    )
}

export default Person