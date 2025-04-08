function MainDescription({isStatusTrue, description}){
    return <>
            {isStatusTrue && <div className="d-block">{description}</div>}
        </>
}

export default MainDescription