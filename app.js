const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            // entry.target.classList.add('show-left')
            // entry.target.classList.add('show-right')


        } else {
            entry.target.classList.remove('show')
            // entry.target.classList.remove('show-right')
        }
    })
})


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));