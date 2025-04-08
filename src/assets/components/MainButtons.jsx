

function MainButtons({title, isStatusTrue, onToggle}){

    // const [isTrue, fnStatus] = useState(false);
    // let changeStatus = () => fnStatus(status => !status);

    return <>
        {isStatusTrue ? <button onClick={onToggle} className="btn btn-warning p-2">{title}</button> : <button onClick={onToggle} className="btn btn-primary p-2">{title}</button>}

        </>
}

export default MainButtons