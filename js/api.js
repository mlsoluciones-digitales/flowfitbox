async function obtenerDatos(){

    const response = await fetch("https://script.google.com/macros/s/AKfycbxsY7hsH2jg-c_NsWeR15HUUGj03Y9teb3uBbha2pUwLZqB-4uJ3WTFWCCzb4ICBOzy/exec");

    if(!response.ok){
        throw new Error("No se pudieron cargar los datos");
    }

    const datos = await response.json();

    return datos; 
}