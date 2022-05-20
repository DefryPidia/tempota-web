import type { NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { HomeComponent } from '../components/home/home-component'
import { Card } from '../core/base-components/card/card.component'
import { LayoutsMain } from '../layouts/layouts-main.component'
import styles from '../styles/Home.module.css'

const HomePages: NextPage = () => {
  return (
    <LayoutsMain
      page='Home'
      title='Home adalah home'
    >

      <div className='relative flex left-1/2 top-1/2 align-items-center'>
        <div className='text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores animi facere autem ipsa. Eveniet rem reprehenderit voluptas nihil, totam labore, obcaecati quisquam beatae tenetur vero distinctio, nobis quia facere? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi impedit reprehenderit possimus quia molestiae alias placeat maxime aliquid. Ullam aliquam itaque totam officiis quam hic rerum tempore necessitatibus illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptates aperiam perferendis, tempore impedit repellat doloremque quas dolore itaque, dolorum deserunt laborum sequi ipsa excepturi! Dicta delectus nulla maxime porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni ipsam, maxime eaque, sequi debitis architecto deleniti, et hic veniam vero perspiciatis in saepe totam numquam sunt sint quaerat fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestias incidunt tempore laudantium impedit voluptate cum unde minima itaque! Sapiente fuga corrupti quo? Nobis, eligendi hic non soluta repudiandae earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima enim debitis neque nulla excepturi nobis modi eum ea tempore cupiditate adipisci, aspernatur expedita distinctio iste dolore quos, tempora voluptates dolores?
        </div>
      </div>
    </LayoutsMain>
  )
}

export default HomePages
