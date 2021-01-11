let url = "https://www.w3schools.com/angular/customers.php";
let placeHolderApiUrl = "https://jsonplaceholder.typicode.com/posts";

let data = function () {
    return fetch(url).then(res => res.json()).then(item => item.records)
}

function getData() {
    return new Promise((resolve, reject) => {
        return fetch(url).then(res => res.json).then(data => {
            if (data.records) {
                resolve(data.records)
            } else {
                reject('Error')
            }
        })
    })
}

function getMockApi(){
    fetch(placeHolderApiUrl)
        .then(res => res.json()
        .then(data => {
            if(data){
                data;
            }
        })
    )
}

let w3_mock = {
    "records": [{
        "Name": "Alfreds Futterkiste",
        "City": "Berlin",
        "Country": "Germany",
        "completed" : true
    }, {
        "Name": "Ana Trujillo Emparedados y helados",
        "City": "México D.F.",
        "Country": "Mexico",
        "completed" : false
    }, {
        "Name": "Antonio Moreno Taquería",
        "City": "México D.F.",
        "Country": "Mexico",
        "completed" : false
    }, {
        "Name": "Around the Horn",
        "City": "London",
        "Country": "UK",
        "completed" : false
    }, {
        "Name": "B's Beverages",
        "City": "London",
        "Country": "UK",
        "completed" : false
    }, {
        "Name": "Berglunds snabbköp",
        "City": "Luleå",
        "Country": "Sweden",
        "completed" : false
    }]
}


export { getData, data, w3_mock, getMockApi }