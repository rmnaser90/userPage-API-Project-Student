
class Renderer {
    constructor(data) {
        this.data = data
    }
    render(){
        $('.container').empty()
        const source = $('#user-template').html()
        const template = Handlebars.compile(source)
       const newUser = template(this.data)
       $('.container').append(newUser)
        
    }

}
