import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useEffect, useState, useParams } from "react";

const CompFireBase = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", "Ey6qkXGscohkQhS5Ebok")
    
        getDoc(docRef).then((docFirebase) => {
                if (docFirebase.exists()) {
                    setItems({id:docFirebase.id, ...docFirebase.data()})
                } else {
                    console.error("No existe el elemento")
                }
            })
    }, [])


    return(
        <>
        
        </>
    )
}

export default CompFireBase