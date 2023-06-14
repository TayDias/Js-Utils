const today = new Date()

let dataAtualSistema = {}

dataAtualSistema.dtInicio = formatDate(addOrSubDays(today, "sub", 60))
dataAtualSistema.dtFim = formatDate(addOrSubDays(today, "add", 15))

console.log(dataAtualSistema)


function addOrSubDays(today, op, days) {
    let baseDate = new Date(today)

    if (op == "add") baseDate.setDate(baseDate.getDate() + days)
    if (op == "sub") baseDate.setDate(baseDate.getDate() - days)

    return baseDate
}

function formatDate(date){
    const baseDate = new Date(date)

    const yyyy = baseDate.getFullYear()
    let mm = baseDate.getMonth() + 1 // Months start at 0!
    let dd = baseDate.getDate()

    if (dd < 10) dd = '0' + dd
    if (mm < 10) mm = '0' + mm

    const formattedDate = mm + '/' + dd + '/' + yyyy

    return formattedDate
}
