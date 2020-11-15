const loader = new APIManager
const storageData = new localStorageData
const renderer = new Renderer
renderer.renderUsers(storageData.loadData())

$('#load-btn').click(function () {

    loader.loadUser()

})

$('#display-btn').click(function () {

    const data = loader.getUser()
    renderer.render(data)

})

$('#save-btn').click(function () {

    storageData.saveData(loader.getUser())
    renderer.renderUsers(storageData.loadData())

})

$('#display-saved-btn').click(function () {

    const index = $('#saved-users').val()
    renderer.render(storageData.loadData(index))

})



