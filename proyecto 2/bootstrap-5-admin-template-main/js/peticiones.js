cargarDatos = () => {


    fetch("./pokeapi.json")
        .then(response => response.json())
        .then(data => {
            let pokemons = data.pokemons
            let pokemonsPorTipo = new Map()
            let claves = Object.keys(pokemons)
            let typeSet = new Set() //set para validar que tipos no han sido añadidos al select
            for (let i = 0; i < claves.length; i++) {
                let clave = claves[i]
                let pokemon = pokemons[clave]
                let tipos = pokemon.types
                for (let i2 = 0; i2 < tipos.length; i2++) {
                    let nombreTipo = tipos[i2].type.name
                    if (!typeSet.has(nombreTipo)) {
                        typeSet.add(nombreTipo)
                        let plantillaOption = `<option value = "${nombreTipo}">${nombreTipo}</option>`
                        let etiquetaSelect = document.querySelector('select')
                        etiquetaSelect.innerHTML += plantillaOption
                        pokemonsPorTipo.set(nombreTipo,[pokemon])
                    } else{
                        pokemonsPorTipo.get(nombreTipo).push(pokemon)
                    }
                    
                }
            }
            let etiquetaSelect = document.querySelector('select')
            etiquetaSelect.addEventListener('change', (event) => {
                let grafico1 = document.getElementById('grafico-1')
                grafico1.innerHTML = ""
                if(etiquetaSelect.value!=-1){
                let tipo = pokemonsPorTipo.get(etiquetaSelect.value)
                //promedio de estadisticas del tipo de pokemon
                let base_exp = 0
                let height = 0
                let hp = 0
                let attack = 0
                let defense = 0
                let special_att = 0
                let special_def = 0
                let speed = 0
               // let weight = 0
                let i3
                for(i3 = 0; i3<tipo.length; i3++){
                    base_exp = base_exp + tipo[i3].base_experience
                    height = height +tipo[i3].height
                    let i4
                    let stats = tipo[i3].stats
                    for(i4 = 0; i4<stats.length; i4++){
                        if(i4===0){
                            hp = hp + stats[i4].base_stat
                        }
                        if(i4===1){
                            attack = attack + stats[i4].base_stat
                        }
                        if(i4===2){
                            defense = defense + stats[i4].base_stat
                        }
                        if(i4===3){
                            special_att = special_att + stats[i4].base_stat
                        }
                        if(i4===4){
                            special_def = special_def + stats[i4].base_stat
                        }
                        if(i4===5){
                            speed = speed + stats[i4].base_stat
                        }
                    }
                    //weight = weight + tipo[i3].weight

                }
                let prom_base_exp = Math.round(base_exp/(i3))
                let prom_height = Math.round(height/(i3))
                let prom_hp = Math.round(hp/(i3))
                let prom_attack = Math.round(attack/(i3))
                let prom_defense = Math.round(defense/(i3))
                let prom_special_att = Math.round(special_att/(i3))
                let prom_special_def = Math.round(special_def/(i3))
                let prom_speed = Math.round(speed/(i3))
                //let prom_weight = Math.round(weight/(i3))
                
                let max = Math.max(prom_base_exp, prom_height, prom_hp, prom_attack, prom_defense, prom_special_att, prom_special_def, prom_speed)
                
                let plantilla = `<tbody>
                <tr>
                  <th scope="row">Exp</th>
                  <td style="--size: calc( ${prom_base_exp} / ${max} )"> <span class="data"> ${prom_base_exp} </span> </td>
                </tr>
                <tr>
                  <th scope="row">Altura</th>
                  <td style="--size: calc( ${prom_height} / ${max} )"> <span class="data"> ${prom_height} </span> </td>
                </tr>
                <tr>
                  <th scope="row">Vida</th>
                  <td style="--size: calc( ${prom_hp} / ${max} )"> <span class="data"> ${prom_hp} </span> </td>
                </tr>
                <tr>
                  <th scope="row">Ataque</th>
                  <td style="--size: calc( ${prom_attack} / ${max} )"> <span class="data"> ${prom_attack} </span> </td>
                </tr>
                <tr>
                  <th scope="row">Defensa</th>
                  <td style="--size: calc( ${prom_defense} / ${max} )"> <span class="data"> ${prom_defense} </span> </td>
                </tr>
                <tr>
                  <th scope="row">Ataque-e</th>
                  <td style="--size: calc( ${prom_special_att} / ${max} )"> <span class="data"> ${prom_special_att} </span> </td>
                </tr>
                <tr>
                  <th scope="row">Defensa-e</th>
                  <td style="--size: calc( ${prom_special_def} / ${max} )"> <span class="data"> ${prom_special_def} </span> </td>
                </tr>
                <tr>
                  <th scope="row">Velocidad</th>
                  <td style="--size: calc( ${prom_speed} / ${max} )"> <span class="data"> ${prom_speed} </span> </td>
                </tr>
              </tbody>`
                
              grafico1.innerHTML = plantilla
            } 
            })

        })
        .catch(console.error);
}

window.addEventListener("DOMContentLoaded", (cargarDatos))
