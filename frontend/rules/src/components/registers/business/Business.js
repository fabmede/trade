import 'bootstrap/dist/css/bootstrap.min.css';

function Business() {

    console.log("userLOgged",JSON.parse(window.localStorage.getItem("userLogged")));
    return (
        <>
            Register Business!
        </>

    )
}

export default Business