function solve(selector) {
    const element = document.querySelector(selector);

    function highlight(element) {
        element.classList.add('highlight');
        const childWithMostChildren = Array.from(element.children)
            .sort((a, b) => b.children.length - a.children.length)[0];
            if(element.children.length > 0){
                 highlight(childWithMostChildren);
            }
    }

    highlight(element)
}

solve('#content');

// function solve (selector) {
//     let children = $(selector)
//       .addClass('highlight')
//       .children()

//     while (children.children().length) {
//       children = children.children()
//     }

//     children
//       .first()
//       .addClass('highlight')
//       .parentsUntil($(selector))
//       .addClass('highlight')
//   }