const pointToComment = (point) => {
    let comment
    if ( point === 5)
        comment = 0
    else if (4.5 <= point && point < 5)
        comment = 1
    else if (3.5 <= point && point < 4.5)
        comment = 2
    else
        comment = 3
    
    return comment
    
}

export default pointToComment