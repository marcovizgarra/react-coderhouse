import loader_animation from '/public/img/loader/loader.gif'
import { getFileName } from '/src/js/functions.js';

const Loader = () => {
    return(
        <>
            <div id="loader_animation">
                <img src={loader_animation} alt={getFileName(loader_animation)} width={"95px"}/>
                <p className='animate__animated animate__flash animate__infinite p-1'>CARGANDO</p>
                
            </div>
        </>
    )
}

export default Loader