function solve(commandsData) {
    const commands  = (function() {
        let innerList = [];
    
        return {
            add(text) {
                innerList.push(text);
            },
    
            remove(text) {
                innerList = innerList.filter(e => e !== text);
            },
    
            print() {
                console.log(innerList.join(','))
            }
        }
    })();
    
    commandsData.forEach(cd => {
        const [command, text] = cd.split(' ');
        commands[command](text);
    })
}

//test:
//solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);