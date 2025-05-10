import { Route } from "wouter"
import { Bank } from "../pages/Bank"
import { Apertura } from "../pages/Apertura"
import { Operaciones } from "../pages/Operaciones"
import { Prestamos } from "../pages/Prestamos"
import { Consultas } from "../pages/Consultas"

export function Routes() {

    return(
        <>
            <Route path="/" component={Bank}></Route>
            <Route path="/apertura-cuenta" component={Apertura}></Route>
            <Route path="/operaciones" component={Operaciones}></Route>
            <Route path="/prestamos" component={Prestamos}></Route>
        </>
    )
}