import { FC } from 'react'
import { Button } from '@material-ui/core'
import FireIcon from '@material-ui/icons/WhatshotOutlined'
import MessageIcon from '@material-ui/icons/TextsmsOutlined'
import TrendingIcon from '@material-ui/icons/TrendingUpOutlined'
import ListIcon from '@material-ui/icons/ListOutlined'

import styles from './LeftMenu.module.scss'

const LeftMenu: FC = () => {
  return (
    <aside className={styles.menu}>
      <ul>
        <li>
          <Button>
            <FireIcon />
            Лента
          </Button>
        </li>
        <li>
          <Button>
            <MessageIcon />
            Сообщения
          </Button>
        </li>
        <li>
          <Button>
            <TrendingIcon />
            Рейтинг TJ
          </Button>
        </li>
        <li>
          <Button>
            <ListIcon />
            Подписки
          </Button>
        </li>
      </ul>
    </aside>
  )
}

export default LeftMenu
