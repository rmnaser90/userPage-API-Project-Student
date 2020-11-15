const loader = new APIManager



$('#load-btn').click(function () {
    loader.loadUser()
})

$('#display-btn').click(function () {
    const data = loader.getUser()
    const renderer = new Renderer(data)
    renderer.render()
})

$('#save-btn').click(function () {
    const data = JSON.stringify(loader.getUser())
    localStorage.data=data
    console.log(`${loader.getUser().mainUser.name.first}'s data saved to local srorage`);
})

$('#display-saved-btn').click(function () {
    const data =JSON.parse(localStorage.data)
    const renderer = new Renderer(data)
    renderer.render()
})