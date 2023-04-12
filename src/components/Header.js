const Header = () => {

    const getTheMonth = () => {
        const newDate = new Date();
        return newDate.toLocaleDateString('default', {month: 'long', year: 'numeric'});
    }

    return (
        <>
            <div>{getTheMonth()}</div>
        </>
    )
}

export default Header;

