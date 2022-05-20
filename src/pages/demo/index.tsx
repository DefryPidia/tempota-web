import type { NextPage } from 'next'
import Image from 'next/image'
import { DemoComponent } from '../../components/demo/demo-component'
import { LayoutsMain } from '../../layouts/layouts-main.component'
import styles from '../styles/Home.module.css'

const HomePages: NextPage = () => {
    return (
        <LayoutsMain
            title='New Tempora'
            page='Create Tempora'
        >
            <DemoComponent />
        </LayoutsMain>
    )
}

export default HomePages
