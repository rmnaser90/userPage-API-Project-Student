//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    _getQuote() {
        $.ajax({
            method: 'GET',
            url: 'https://api.kanye.rest',
            success: (response) => {
                this.data.mainUser.quote = response.quote + " - Kanye West"
                console.log('Quote is loaded')
            },
            error: () => console.log('error loading quote'),
        })
    }

    _getPokemon() {
        $.ajax({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*100)}`,
            success: (response) => {
                console.log('Pokemon is loaded');
                console.log(response);
                const name = response.name.split('')[0].toUpperCase()+response.name.split('').slice(1,response.name.lengt).join('') // Capitalize first letter
                this.data.mainUser.pokemon={name, url: response.sprites.front_shiny}
            },
            error: () => console.log('error loading Pokemon'),
        })
    }

    loadUser() {
        $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api/?results=7',
            success: (response) => {
                console.log('User is Loaded');
                this.data.mainUser = response.results[0]
                this.data.friends = response.results.slice(1, 7)
                this._getQuote()
                this._getPokemon()
            },
            error: () => { console.log('error loading Users'); }
        })
    }

    getUser(){
        return this.data
    }
}






