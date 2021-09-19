import { FC } from 'react'
import Image from 'next/image'
import { Paper, Typography, IconButton } from '@material-ui/core'
import CommentsIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import RepostIcon from '@material-ui/icons/RepeatOutlined'
import FavoriteIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ShareIcon from '@material-ui/icons/ShareOutlined'

import styles from './Post.module.scss'

const Post: FC = () => {
  return (
    <Paper elevation={0} className="p-20">
      <Typography
        variant="h5"
        className={styles.title}
        classes={{ root: styles.paper }}>
        МВД признало «пожизненно нежелательным» пребывание комика Идрака
        Мирзализаде в России. Он обязан покинуть страну
      </Typography>
      <Typography className="mt-10 mb-15">
        Ведомство считает, что комик будет «угрожать общественному порядку».
      </Typography>
      <Image
        src="https://leonardo.osnova.io/d693db9f-c6c1-553d-af1d-52fcd4c2d44a/-/preview/800/-/format/webp/"
        width={700}
        height={365}
      />
      <ul className={styles.actions}>
        <li>
          <IconButton>
            <CommentsIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <RepostIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </li>
        <li>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </li>
      </ul>
    </Paper>
  )
}

export default Post
