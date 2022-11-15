export async function getlinksSaves(key) {
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks)|| []

    return linksSaves
}

export async function saveLink(key, newLink) {
    let linkStored = await getlinksSaves(key)

    const hasLink = linkStored.some(link => link.id === newLink.id)

    if(hasLink) {
        console.log('Esse link ja existe na sua lista')
        return
    }

    linkStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linkStored))
    console.log('link salvo com sucesso')
}

export function deleteLink(links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id)
    })

    localStorage.setItem('@encurtalink', JSON.stringify(myLinks))
    console.log('link deletado com sucesso')

    return myLinks
}