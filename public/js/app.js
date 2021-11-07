function shutdown() {

    content = {
        'passwd': 'admin'
    }

    fetch("/shutdown", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
}

function script() {
    content = {
        'passwd': 'admin'
    }

    fetch("/script", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
}

function port() {
    let port = prompt('Enter the panel port')
    if (port == null) return
    if (isNaN(port)) {
        alert('The number entered is not valid !')
        return
    }

    if (port > 65535){
        alert('The number can\'t be higher than 65535')
        return
    }
    
    content = {
        'passwd': 'admin',
        'port' : parseInt(port)
    }

    fetch("/port", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
    })
}