class localStorageData {

    constructor() {

        if (localStorage.data == undefined) {
            localStorage.data = "[]"
        }
        
    }

    saveData(data) {

        const oldData = JSON.parse(localStorage.data)
        const index = oldData.length
        data.index=index
        oldData.push(data)
        const dataJSON = JSON.stringify(oldData)
        localStorage.data = dataJSON
        console.log(`${data.mainUser.name.first}'s data saved to local srorage`);
    
    }

    loadData(index) {

        const data = JSON.parse(localStorage.data)
        if (index==undefined) {
            return data
        }else {
            return data[index]
        }

    }
}