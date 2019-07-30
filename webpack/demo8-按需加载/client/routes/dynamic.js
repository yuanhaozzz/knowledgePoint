
import React from 'react'
export default async function (importComponent) {
    let dynamicComponent = await importComponent()
    console.log(dynamicComponent)

    return <dynamicComponent/>


}