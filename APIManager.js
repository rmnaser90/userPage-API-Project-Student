//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {
            mainUser: {},
            friends: [],
            pokemon: {},
            quote: {},
            meatQuote: ''

        }
    }

    _getMeatQuote() {

        $.ajax({
            method: 'GET',
            url: 'https://baconipsum.com/api/?type=meat-and-filler',
            success: (response) => {
                this.data.meatQuote = response[Math.floor(Math.random() * 5)]
                console.log('meat quote is loaded')
            },
            error: () => console.log('error loading meat quote'),
        })

    }

    _getQuote() {

        $.ajax({
            method: 'GET',
            url: 'https://api.kanye.rest',
            success: (response) => {
                this.data.quote = response.quote + " - Kanye West"
                console.log('Quote is loaded')
            },
            error: () => console.log('error loading quote'),
        })

    }

    _getPokemon() {

        $.ajax({
            method: 'GET',
            url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100)}`,
            success: (response) => {
                console.log('Pokemon is loaded');
                const name = response.name.split('')[0].toUpperCase() + response.name.split('').slice(1, response.name.lengt).join('') // Capitalize first letter
                this.data.pokemon = { name, url: response.sprites.front_shiny }
            },
            error: () => console.log('error loading Pokemon'),
        })

    }

    _getUser() {

        $.ajax({
            method: 'GET',
            url: 'https://randomuser.me/api/?results=7',
            success: (response) => {
                console.log('User is Loaded');
                this.data.mainUser = response.results[0]
                this.data.friends = response.results.slice(1, 7)
            },
            error: () => { console.log('error loading Users'); }
        })

    }

    loadUser() {

        this._getUser()
        this._getQuote()
        this._getPokemon()
        this._getMeatQuote()
        
    }





    getUser() {
        return this.data
    }
}






