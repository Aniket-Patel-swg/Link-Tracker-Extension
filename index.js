const inputBtn = document.getElementById('input-btn');
let myLeads = []
let oldLeads =[]
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById('save-tab');
// Difference between const and let is, const can't be reassigned
// If possible use const, if not use let.

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage);

if(leadsFromLocalStorage){
    // myLeads = JSON.parse(localStorage.getItem("myLeads"))
    myLeads = leadsFromLocalStorage 
    console.log("True");
    render(myLeads);
}

// const tabs = [
//     {url:"https://github.com/Aniket-Patel-swg"}
// ]

tabBtn.addEventListener('click',function(){
    // Grab the URL of the current tab!
    // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    //     console.log(tabs[0].url);

    //     let activeTab = taba[0]
    //     let activeTabId = activeTab.id 
    // })
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        // this function will be triggered when above both conditions are true
        console.log(tabs[0].url)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads",JSON.stringify(myLeads))
        render(myLeads)

    })
    // console.log(tabs[0])    
    // When we write tabs[0] we get object with key url and value: link
    // so when we write tabs[0].url we can get url
})

function render(leads){
    let listItems = "";
    for(let i = 0; i < leads.length; i++){
        // ulEl.textContent += "<li>"+ myLeads[i] + "</li>"
        // this will simply print out string
    
        // but if we use innerHTML
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
        // What we did here was
        // (1) created element 
        // (2) set text content
        // (3) append to ul 
    
        // so we can use alternate method
        // const li = document.createElement("li")
        // li.textContent = myLeads[i]
        // ulEl.append(li);
    
        // This above 2 ways are not performance friendly, as we've to DOM manipulation on every single iteration
        // Remeber DOM manipulation comes with the cost, and it'll be more costly to do at every iteration
        // listItems += "<li><a target='_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        // Template strings, to hide above complexity
        listItems += `
            <li>
                <a target="_blank" href="${leads[i]} ">
                    ${leads[i]}
                </a>
            </li>   
        `
        // we use $ sign, to write javascript in string.
        console.log(listItems)
    }
    ulEl.innerHTML =  listItems
    }
deleteBtn.addEventListener("dblclick", function(){
    // clearing local storage
    localStorage.clear()
    // clearing out myLeads array
    myLeads =[]
    console.log(myLeads)
    // clearing out DOM object, in other words clearing our list items
    render(myLeads)
})

// let myLeads = `["https://github.com/Aniket-Patel-swg"]`
// below code will conver myLeads string into array objects, and we can implement functions like push,pop,etc.
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.preetsojitra.me");
// console.log(typeof myLeads)
// console.log(myLeads)

// let myLeads = ["https://github.com/Aniket-Patel-swg"]
// Below code will conver array obejct into strings and then we can store them into local storage
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
// console.log(myLeads)

// Types in which we can add event listner
// function saveButton(){
//     console.log('Button Clicked from onclick attribute')
// }
inputBtn.addEventListener("click", function(){
    // we can also do like
    // myLeads.push(document.getElementById('input-el').value)
    myLeads.push(inputEl.value)
    inputEl.value =""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))

    // to clear space after user has clicked button
    render(myLeads);
})

// Below code will literally add button and css as well from javascript only, 
// it's one of use case of innerHTML
// also we can pass onClick event, and do some changes as well 


// let checkEl = document.getElementById('test');
// checkEl.innerHTML += "<button onclick='buy()'>" + "BUY!" + "</button>"

// function buy(){
//     checkEl.innerHTML += "\n <p>Thank you for buying!</p>"
// }

// (1) practice template strings

// write below expression of const email, into template string

// const recipient = "James"
// const sender = "Aniket"
// const email = "Hey " + recipient + " !How is it going? Cheers Per"
// template sting/literals for above String concatenation
// const email = `Hey ${recipient} 
//                 !How is it going? Cheers
//                 ${sender}`
// console.log(email); 



// (2) local storage

// localStorage.setItem(key,value)
// localStorage.getItem(key)
// localStoreage.clear()
// PS: both key and value need to be string

// console.log(localStorage.getItem("Link tracker"))
// localStorage.clear()


// (3) truthy and falsy value

// falsy values in javaScript
// false
// 0
// ""
// null : how you as a developer signalize emptiness
// undefined : how javaScript signalizes emptiness 
// NaN

// to check if value is truthy or falsy
// if it's true it's truth, if false then falsy
// console.log(Boolean(""))
// console.log(Boolean("0"))
// console.log(Boolean(100))
// console.log(Boolean( null))
// console.log(Boolean([0]))
// console.log(Boolean(-0))



// (4) functions with parameters

                    // parameters
// function getFirst(arr){
//     return arr[2];
// }                    arguments
// console.log(getFirst([2,4,51,1]))