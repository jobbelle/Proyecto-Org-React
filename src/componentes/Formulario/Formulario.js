import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) =>{

    const [nombre,actualizarNombre] = useState("")

    const [puesto,actualizarPuesto] = useState("")

    const [foto,actualizarFoto] = useState("")

    const[equipo,actualizarEquipo] = useState("")

    const[titulo, actualizarTitulo] = useState("")

    const[color, actualizarColor] = useState ("")

    const {registrarColaborador, crearEquipos} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
        console.log("Manejar el Evento")
        
        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo,
            
        }

        registrarColaborador(datosAEnviar)
        

    }


    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipos({titulo,colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <Campo 
                titulo="Nombre" 
                placeholder = "Ingrese su Nombre" 
                required valor={nombre} 
                actualizarValor={actualizarNombre}
            />

            <Campo 
                titulo="Puesto" 
                placeholder = "Ingrese su Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}

            />

            <Campo 
                titulo ="Foto" 
                placeholder = "Ingrese enlace de Foto" 
                required
                valor={foto} 
                actualizarValor={actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />

            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo }>
            <h2>Rellena el formulario para crear el Equipo.</h2>

            <Campo 
                titulo="Titulo" 
                placeholder = "Ingrese el Titulo" 
                required valor={titulo} 
                actualizarValor={actualizarTitulo}
            />

            <Campo 
                titulo="Color" 
                placeholder = "Ingrese el color en HEX" 
                required
                valor={color} 
                actualizarValor={actualizarColor}
                type = "color"

            />

            <Boton>Registrar Equipo</Boton>
        </form>
        
    </section>
}

export default Formulario