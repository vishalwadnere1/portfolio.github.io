// ---------------- Filter tabs ---------------------

const tabs = document.querySelectorAll('[data-target]'),
tabcontents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabcontents.forEach(tc => {
            tc.classList.remove('filters__active')
        })

        target.classList.add('filters__active')

        

// --------------active button -----------------------

        tabs.forEach(t => {
            t.classList.remove('filter-tab-active')
        })

        tab.classList.add('filter-tab-active')
    })
})