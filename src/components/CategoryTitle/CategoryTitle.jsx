// Functions
import { getFileName } from "../../js/functions"
import JBL_exclam from "/public/catalogue/JBL_exclam.png"

const CategoryTitle = ({title}) => {
    return(
        <>
            <h2 className="m-2 p-0 category_title">
                <img className="px-1 pb-1" src={JBL_exclam} alt={getFileName(JBL_exclam)} width={"50"} />
                {title}
            </h2>
        </>
    )
}

export default CategoryTitle