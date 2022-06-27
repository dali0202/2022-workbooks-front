import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Item } from './QuestionCart.styles';

function QuestionCart({
  question,
  selectedQuestionList,
  setSelectedQuestionList,
}) {
  const [isHovering, setIsHovering] = useState(0);
  const deleteCart = () => {
    setSelectedQuestionList(
      selectedQuestionList.filter((item) => item !== question)
    );
  };
  return (
    <Item
      onMouseOver={() => setIsHovering(1)}
      onMouseOut={() => setIsHovering(0)}
    >
      <div style={{ width: '40%' }}>{question.id}</div>
      <div style={{ width: '40%' }}>
        {(question.answerRate * 100).toFixed(2)}%
      </div>
      <div>{question.point}점</div>
      {isHovering === 1 ? (
        <IconButton
          color='primary'
          size='small'
          style={{ marginLeft: 'auto' }}
          onClick={deleteCart}
        >
          <ClearIcon fontSize='inherit' />
        </IconButton>
      ) : (
        ''
      )}
    </Item>
  );
}

export default QuestionCart;
