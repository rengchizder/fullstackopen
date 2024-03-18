const Notification = ({message}) => {
    const notificationStyle = {
        color: 'green', 
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5, 
        padding: 10, 
        marginBottom: 10
    }

    const errorStyle = {
        color: 'red', 
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5, 
        padding: 10, 
        marginBottom: 10
    }

    if (message === null) {
        return null
    } else if (message.startsWith('Information of ')) {
        return (
            <div style={errorStyle} className='error'>{message}</div>
        )
    } else {
        return (
            <div style={notificationStyle} className='error'>{message}</div>
        )
    }
}

export default Notification