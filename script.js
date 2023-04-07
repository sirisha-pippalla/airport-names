// console.log("sireesha")

const inputId = document.getElementById('inputId');
let result=[]
inputId.addEventListener('input', handleChange)

function handleChange(e) {
    // console.log(e.target.value)
        // console.log(result) 
    let data = result.filter(res => res.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(data)
    let tableData = '';

    data.map((name) => {
        tableData += `<h4>${name}</h4>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
}

fetch('https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json')

.then((data) => {
    // console.log(data)  this data in json format
    return data.json();  //converted to object
}).then((objectData) => {
    // console.log(objectData)
    
    // console.log(objectData[0].name)
    let tableData = '';
    objectData.map((values) => {
        result.push(values.name)
        tableData += `<h4>${values.name}</h4>`;
    });
    document.getElementById("table_body").innerHTML = tableData;
}).catch((err) => {
    console.log(err);
})