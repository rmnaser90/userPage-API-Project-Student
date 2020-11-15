
class Renderer {
    
    render(data){

        $('.container').empty()
        const source = $('#user-template').html()
        const template = Handlebars.compile(source)
       const newUser = template(data)
       $('.container').append(newUser)

    }

    renderUsers(data){

        $('#saved-users').empty()
        const source = $('#users-dropdown').html()
        const template = Handlebars.compile(source)
       const newUser = template({data: data})
       $('#saved-users').append(newUser)
       
    }
}
