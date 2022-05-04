import React, { useEffect } from "react"
// import PropTypes from "prop-types"
import { getRandomMessage } from '../redux/greetings/greetings'
import { useSelector, useDispatch } from 'react-redux'
const HelloReactRails = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMessage());
  }, [dispatch]);

  const message = useSelector((state) => state.message)


    return (
    <div>
      <h1>Greeting</h1>
      <div>Message: {message.message}</div>
    </div>
    );

}

// HelloReactRails.propTypes = {
//   greeting: PropTypes.string
// };
export default HelloReactRails
