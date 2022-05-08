
    // Toggle đóng mở bars
const Bars = document.querySelector('.mobile-menu-btn')
const Header = document.querySelector('.header')
const navItems = document.querySelectorAll('.nav-header-item')

let heightheader = Header.clientHeight;

function showHeader (){
    if(Header.clientHeight === heightheader)
    {
        Header.classList.add('header-js')
    }else {
        Header.classList.remove('header-js')
        Header.classList.remove('header-visible')
        subNav.style.display = 'none'
    }
}

function hideHeader(){
    Header.classList.remove('header-js')
    Header.classList.remove('header-visible')
    subNav.style.display = 'none'
}

Bars.addEventListener('click', showHeader)

for(const navItem of navItems)
            {
                navItem.addEventListener('click', hideHeader)              
            }

// show More && close , open More

    const subNav = document.querySelector('.subnav')
    const navSubItem = document.querySelector('.nav-sub-item')

    function showSubnav(event) {
        if( subNav.style.display === 'none')
        {
        Header.classList.add('header-visible')
        subNav.style.display = 'block'
        event.preventDefault();
        }
        else {
            Header.classList.remove('header-visible')
            subNav.style.display = 'none'
            event.preventDefault();
        }
    }

    navSubItem.addEventListener('click', showSubnav)


