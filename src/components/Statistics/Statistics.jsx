import PropTypes from 'prop-types';
import { List, P, Span, Item } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <List>
      <Item>
        <P>
          Good: <Span>{good}</Span>
        </P>
      </Item>
      <Item>
        <P>
          Neutral: <Span>{neutral}</Span>
        </P>
      </Item>
      <Item>
        <P>
          Bad: <Span>{bad}</Span>
        </P>
      </Item>
      <Item>
        <P>
          Total: <Span>{total}</Span>
        </P>
      </Item>
      <Item>
        <P>
          positive feedback: <Span>{positiveFeedback}%</Span>
        </P>
      </Item>
    </List>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};