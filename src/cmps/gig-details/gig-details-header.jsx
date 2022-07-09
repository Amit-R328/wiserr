import Swal from 'sweetalert2'
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { useState } from 'react';

export const GigDetailsHeader = ({gig}) => {
    const [shareModal, setShareModal] = useState(false)

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


    return (
        <section className="gig-details-header">
            <div className="nav-details-container">
                <nav className="details-menu-scroll">
                    <ul className="nav-details-sections">
                        {sections.map(section =>
                            <li onClick={() => onScroll(section.sectionElement)} key={section.sectionTitle}>{section.sectionTitle}</li>)}
                        <aside>
                            <button onClick={()=>setShareModal(!shareModal)} className="details-menu-share"></button>
                        </aside>
                    </ul>
                </nav>
            </div>
            {shareModal && <section className="share-modal">
                <FacebookShareButton
                    url={`https://wiserr-app.herokuapp.com/categories/${gig._id}`}
                    className="Demo__some-network__share-button"
                >
                    <FacebookIcon size={32} round /> Facebook share
                </FacebookShareButton>
                <br />
                <TwitterShareButton
                    title={"test"}
                    url={`https://wiserr-app.herokuapp.com/categories/${gig._id}`}
                >
                    <TwitterIcon size={32} round />
                    Twitter share
                </TwitterShareButton>
            </section>}
        </section>
    )
}