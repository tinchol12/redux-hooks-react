export const agregarCitaAction = cita =>
{
    return {
        type: 'AGREGAR_CITA',
        payload: cita
    }
}

export const borrarCitaActions = id =>
{
    return {
        type: 'BORRAR_CITA',
        payload: id
    }
}