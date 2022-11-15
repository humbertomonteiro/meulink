import './Links.css'
import { useState, useEffect } from 'react'
import { FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { getlinksSaves, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../components/LinkItem'

export default function Links() {

    const [ myLink, setMyLink ] = useState([])

    const [ data, setData ] = useState({})
    const [ showModal, setShowModal ] = useState(false)

    const [ emptyList, setEmptyList ] = useState(false)

    useEffect(() => {
        async function getlinks() {
            const result = await getlinksSaves('@encurtalink')

            if(result.length === 0) {
                setEmptyList(true)
            }

            setMyLink(result)
        }

        getlinks()
    }, [])

    function handleOpenLink(link) {
        setData(link)
        setShowModal(true)
    }

    async function handleDelete(id) {
        const result = await deleteLink(myLink, id)

        if(result.length === 0) {
            setEmptyList(true)
        }

        setMyLink(result)
    }

    return (
      <div className="container-links">
        <div className='links-header'>
            <Link to="/">
                <FiArrowLeft size={38} color='#fff'/>
            </Link>
            
            <h1>Meus Links</h1>
        </div>

        { emptyList && (
            <div className='link-item'>
                <h2 className="empty-text">Sua lista está vazia...</h2>
            </div>
        )}

        { myLink.map( link => (
        <div key={link.id} className='links-item'>
            <button className='link' onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color='#fff' />
            {link.long_url}
            </button>
            <button className='link-delete' onClick={() => handleDelete(link.id)}>
                <FiTrash size={24} color='#ff5454' />
            </button>
        </div>
        ))}

        { showModal && (
            <LinkItem 
            closeModal={ () => setShowModal(false) }
            content={data}
            />
        )}
      </div>
    )
}