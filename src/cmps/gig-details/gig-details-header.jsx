import Swal from 'sweetalert2'

export const GigDetailsHeader = () => {

    const sections = [
        {
            sectionElement: '.gig-details-container',
            sectionTitle: 'Overview'
        },
        {
            sectionElement: '.about-details',
            sectionTitle: 'Description'
        },
        {
            sectionElement: '.about-seller',
            sectionTitle: 'About the Seller'
        },
        {
            sectionElement: '.reviews',
            sectionTitle: 'Reviews'
        }
    ]
    
    
    const onScroll = (el) => {
        const section = document.querySelector(el)
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }


    const onShareModal = (ev) => {
        Swal.fire({
            className: "share-modal",
            width: 620,
            height: 285,
            padding: '45px',
            color: '#62646',
            background: '#fff',
            backdrop: 'rgba(0,0,0,0.4)',
            title: 'Share This Gig',
            text: 'Spread the word about this Gig on Wiserr',
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: '<i className="fa fa-thumbs-up"></i> OK',
            confirmButtonAriaLabel: 'OK',
            allowOutsideClick: true,
            allowEscapeKey: true,
        })
    }
    return (
        <section className="gig-details-header">
             <div className="nav-details-container">
                    <nav className="details-menu-scroll">
                        <ul className="nav-details-sections">
                            {sections.map(section =>
                                <li onClick={() => onScroll(section.sectionElement)} key={section.sectionTitle}>{section.sectionTitle}</li>)}
                            <aside>
                                <button onClick={() => onShareModal()} className="details-menu-share"></button>
                            </aside>
                        </ul>
                    </nav>
                </div>
        </section>
    )
}