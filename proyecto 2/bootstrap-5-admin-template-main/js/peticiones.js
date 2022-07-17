cargarDatos = () => {


    fetch("./pokeapi.json")
        .then(response => response.json())
        .then(data => {
            let pokemons = data.pokemons
            let pokemonsPorTipo = new Map() //mapa que contiene a los pokemons dividido por tipo
            pokemonsPorTipo.set('general', [])
            let claves = Object.keys(pokemons)
            let typeSet = new Set() //set para validar que tipos no han sido añadidos al select
            let totalPok = claves.length
            document.querySelector('select').innerHTML += `<option value = "general">general</option>`
            for (let i = 0; i < totalPok; i++) {
                let clave = claves[i]
                let pokemon = pokemons[clave]
                let tipos = pokemon.types
                pokemonsPorTipo.get('general').push(pokemon)
                for (let i2 = 0; i2 < tipos.length; i2++) {
                    let nombreTipo = tipos[i2].type.name
                    if (!typeSet.has(nombreTipo)) {
                        typeSet.add(nombreTipo)
                        let plantillaOption = `<option value = "${nombreTipo}">${nombreTipo}</option>`
                        let etiquetaSelect = document.querySelector('select')
                        etiquetaSelect.innerHTML += plantillaOption
                        pokemonsPorTipo.set(nombreTipo, [pokemon])
                    } else {
                        pokemonsPorTipo.get(nombreTipo).push(pokemon)
                    }

                }
            }

            //grafico 1
            let clavesTipo = pokemonsPorTipo.keys()
            let c
            for (let t of pokemonsPorTipo.keys()) {
                if (t != 'general') {
                    let plantillaGrafico1 = `<tr>
                <th scope="row">${t}</th>
                <td style="--size: calc( ${pokemonsPorTipo.get(t).length} / ${totalPok} )"> <span class="data"> ${(pokemonsPorTipo.get(t).length) * 100 / totalPok}% </span> </td>
              </tr>`
                    let grafico1 = document.getElementById('grafico-1')
                    grafico1.innerHTML += plantillaGrafico1
                }
            }



            let etiquetaSelect = document.querySelector('select')
            etiquetaSelect.addEventListener('change', (event) => {
                let grafico2 = document.getElementById('grafico-2')
                grafico2.innerHTML = ""
                if (etiquetaSelect.value != -1) {
                    let tipo = pokemonsPorTipo.get(etiquetaSelect.value)
                    //promedio de estadisticas del tipo de pokemon
                    let base_exp = 0
                    let max_base_exp = 0
                    let namePok_baseMax = ""

                    let height = 0
                    let max_height = 0
                    let namePok_hMax = ""

                    let hp = 0
                    let max_hp = 0
                    let namePok_hpMax = ""

                    let attack = 0
                    let max_attack = 0
                    let namePok_attMax = ""

                    let defense = 0
                    let max_defense = 0
                    let namePok_defMax = ""

                    let special_att = 0

                    let special_def = 0

                    let speed = 0
                    let max_speed = 0
                    let namePok_speMax = ""

                    let max_weight = 0
                    let namePok_wMax = ""
                    // let weight = 0
                    let i3
                    for (i3 = 0; i3 < tipo.length; i3++) {
                        bexp = tipo[i3].base_experience
                        base_exp = base_exp + bexp
                        if (max_base_exp < bexp) {
                            max_base_exp = bexp
                            namePok_baseMax = tipo[i3].name
                        }
                        bhei = tipo[i3].height
                        height = height + tipo[i3].height
                        if (max_height < bhei) {
                            max_height = bhei
                            namePok_hMax = tipo[i3].name
                        }
                        let i4
                        let stats = tipo[i3].stats
                        for (i4 = 0; i4 < stats.length; i4++) {
                            if (i4 === 0) {
                                bhp = stats[i4].base_stat
                                hp = hp + bhp
                                if (max_hp < bhp) {
                                    max_hp = bhp
                                    namePok_hpMax = tipo[i3].name
                                }
                            }
                            if (i4 === 1) {
                                batt = stats[i4].base_stat
                                attack = attack + batt
                                if (max_attack < batt) {
                                    max_attack = batt
                                    namePok_attMax = tipo[i3].name
                                }
                            }
                            if (i4 === 2) {
                                bdef = stats[i4].base_stat
                                defense = defense + bdef
                                if (max_defense < bdef) {
                                    max_defense = bdef
                                    namePok_defMax = tipo[i3].name
                                }
                            }
                            if (i4 === 3) {
                                special_att = special_att + stats[i4].base_stat
                            }
                            if (i4 === 4) {
                                special_def = special_def + stats[i4].base_stat
                            }
                            if (i4 === 5) {
                                bs = stats[i4].base_stat
                                speed = speed + bs
                                if (max_speed < bs) {
                                    max_speed = bs
                                    namePok_speMax = tipo[i3].name
                                }

                            }
                        }

                    }

                    document.getElementById('exp-pok-name').innerText = namePok_baseMax
                    document.getElementById('exp-num').innerText = max_base_exp
                    document.getElementById('hei-pok-name').innerText = namePok_hMax
                    document.getElementById('hei-num').innerText = max_height
                    document.getElementById('hp-pok-name').innerText = namePok_hpMax
                    document.getElementById('hp-num').innerText = max_hp
                    document.getElementById('att-pok-name').innerText = namePok_attMax
                    document.getElementById('att-num').innerText = max_attack
                    document.getElementById('def-pok-name').innerText = namePok_defMax
                    document.getElementById('def-num').innerText = max_defense
                    document.getElementById('vel-pok-name').innerText = namePok_speMax
                    document.getElementById('vel-num').innerText = max_speed

                    let prom_base_exp = Math.round(base_exp / (i3))
                    let prom_height = Math.round(height / (i3))
                    let prom_hp = Math.round(hp / (i3))
                    let prom_attack = Math.round(attack / (i3))
                    let prom_defense = Math.round(defense / (i3))
                    let prom_special_att = Math.round(special_att / (i3))
                    let prom_special_def = Math.round(special_def / (i3))
                    let prom_speed = Math.round(speed / (i3))

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

                    grafico2.innerHTML = plantilla
                }
            })

        })
        .catch(console.error);
}

window.addEventListener("DOMContentLoaded", (cargarDatos))
