function Button() {

    const imgUrl = './src/assets/larvitar.png'
    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imgUrl}></img>
    );
}

export default Button