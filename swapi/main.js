let getResidentsBtn = document.querySelector("#residents")

const residents = () => {
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets?search=alderaan')
    .then((response) => {
        let data = response.data
        let residents = data.results[0].residents
        
        for (let i = 0; i < residents.length; i++) {
            console.log(residents[i])
            axios.get(residents[i])
            .then((response) => {
                let data = response.data
                let name = data.name
                const header = document.createElement("h2")
                const text = document.createTextNode(name)
                header.appendChild(text)
                const element = document.getElementById('body')
                element.appendChild(header)
                console.log(name)
            })
        }
    })
}

getResidentsBtn.addEventListener('click', residents)