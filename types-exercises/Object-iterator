const iterationObj= {}

iterationObj[Symbol.iterator] = function() {
    let obj = this
    let properties = Object.getOwnPropertyNames(obj)
    let index = 0
    
    return {
        next: function() {
            if (index < properties.length)
                return {
                    value: obj[ properties[index++] ],
                    done: false
                }
            else
                return {
                    value: obj[properties[index]],
                    done: true
                }
        }
    }
}

let user = Object.create(iterationObj)

Object.assign(user, { name: "Eulier", lastName: "Gonzalez", address: "CABA", country: "Argentina" })

for (const value of user) {
    console.log(value)
}
