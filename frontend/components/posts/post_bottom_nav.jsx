import React from 'react';

export default class PostBottomNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ul className='post-bottom-nav'>
        <li>3,777 Notes</li>
        <li>
          <ul className='post-bottom-nav-icons'>
            <li className='post-control' alt='Share'>&#59906;</li>
            <li className='post-control'>&#60054;</li>
            <li className='post-control'>&#60047;</li>
            {/* show cog for configure post if user's otherwise show like button */}
            <li className='post-control'>&#59982;</li>
          </ul>
        </li>
      </ul>
    );
   }
}