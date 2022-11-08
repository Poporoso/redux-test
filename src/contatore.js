import { useSelector, useDispatch } from 'react-redux'
import { incrementa, decrementa } from './action'

const Contatore = () => {

    const {statoContatore}  = useSelector(state => state);
    const dispatch = useDispatch()
    
    return (
        <>
            <h1>{statoContatore.contatore}</h1>
            <button onClick={() => dispatch(incrementa(4))}>Incrementa</button>
            <button onClick={() => dispatch(decrementa(1))}>Decrementa</button>
        </>
    )
}

export default Contatore
