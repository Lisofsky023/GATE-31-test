let input = document.querySelector('.site-search'); // Disabled enter on input
input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
    }
    
});

fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
.then(response => response.json())
.then(arr => {
    const headerItem = arr.map( item => { // Rendering data and creating elements
        const li = document.createElement('li');
        const title = document.createElement('h2');
        const textItem = document.createElement('p');
        const checkBox = document.createElement("input");

        li.classList.add("test__item");
        title.classList.add("test__title");
        textItem.classList.add("test__text");
        checkBox.classList.add("test__checkbox");
        checkBox.setAttribute("type", "checkbox");

        li.appendChild(title);
        li.appendChild(textItem);
        li.appendChild(checkBox);

        textItem.innerText = item.body;
        title.innerText = item.title;

        checkBox.addEventListener('change', function(e) { // Change color item and text
            if (checkBox.checked){
                li.style.backgroundColor = "black";
                li.style.color = "white"
            }   else {
                li.style.backgroundColor = "white";
                li.style.color = "black";
            }
        });
        return li;
    });
    const ul = document.createElement('ul');
    const wrapper = document.querySelector('.test__wrapper');
    ul.classList.add("test__list");
    headerItem.forEach( li => ul.appendChild(li));
    document.body.appendChild(ul);
    wrapper.appendChild(ul);
});

let buttonSearch = document.querySelector('.test__button'); // Filter search headers
buttonSearch.addEventListener('click', (e) => {
    function filter(e) {
        e.preventDefault();
        let input = document.querySelector('#site-search');
        let inputValue = input.value.toUpperCase();	
        let cards = document.querySelectorAll('.test__item');
        
        cards.forEach(
            function getMatch(info) {
                let heading = info.querySelector('.test__title');
                let headingContent = heading.innerHTML.toUpperCase();
                
                if (headingContent.includes(inputValue)) {
                    info.classList.add('show');
                    info.classList.remove('hide');	
                    location.replace(`#${inputValue}`); //   Add input value in URL
                }
                else {
                    info.classList.add('hide');
                    info.classList.remove('show');
                }
            }
        )
    };
    filter(e);
});




    









