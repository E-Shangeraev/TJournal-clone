import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import styles from './AddCommentForm.module.scss'
import { Button } from '@material-ui/core'

interface AddCommentFormProps {}

const AddCommentForm: React.FC<AddCommentFormProps> = () => {
  const [clicked, setClicked] = useState(false)
  const [text, setText] = useState('')

  const onAddComment = () => {
    setClicked(false)
    setText('')
  }

  return (
    <div className={styles.form}>
      <Input
        onChange={e => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        minRows={clicked ? 5 : 1}
        classes={{ root: styles.fieldRoot }}
        placeholder="Написать комментарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary">
          Опубликовать
        </Button>
      )}
    </div>
  )
}

export default AddCommentForm
