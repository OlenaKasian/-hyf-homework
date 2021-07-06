//In this exercise, I used Braedon's example from explanation in class.

const marks = document.querySelectorAll('.marks > li')

async function moveOneByOne() {
    await moveElement(marks[0], { x: 17, y: 310 }).catch((e) =>
        console.log('Error')
    )
    console.log('first element moved')

    await moveElement(marks[1], { x: 400, y: 300 }).catch((e) =>
        console.log('Error')
    )
    console.log('second element moved')

    await moveElement(marks[2], { x: 400, y: 20 }).catch((e) =>
        console.log('Error')
    )
    console.log('third element')
}

function moveAllAtOnce() {
    Promise.all([
        moveElement(marks[0], { x: 20, y: 300 }),
        moveElement(marks[1], { x: 400, y: 300 }),
        moveElement(marks[2], { x: 400, y: 20 }),
    ])
}

moveAllAtOnce()