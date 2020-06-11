import React , {useEffect}from 'react'
import SemisectionBlocks from './../SemiSectionBlock'
import styles from './../SemiSection.module.scss'
import Preloader from './../../../common/Preloader/Preloader'


const ShowerHardware = ({SemiSections , isLoading , getSemiSections}) => {

    useEffect(() => {
        getSemiSections()
    }, [])
    
    const Sections = SemiSections.map( (section, i) => ( <SemisectionBlocks key={i} link={section.link} header={section.header} src={section.src} /> ))

    return (
        <div className={styles.semiSectionsContainer}>
            {isLoading ? <Preloader /> : Sections}
        </div>
    )
}

export default ShowerHardware