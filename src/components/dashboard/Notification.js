import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import moment from 'moment';

const Notifications = ({ notifications }) => {
  return (
    <div className="notifications">
      <h3>Notifications</h3>
      <ListGroup>
        { notifications && notifications.map(notification => {
          return (
            <ListGroup.Item action key={notification.id}>
              {notification.user} {notification.content}
              <div>{moment(notification.time.toDate()).fromNow()}</div>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    </div>
  )
}

export default Notifications;