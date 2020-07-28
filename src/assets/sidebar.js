/* eslint-disable import/no-duplicates */
import bookIcon from './icons/icons8-hotel-check-in-30.png';
import trip from './icons/icons8-trekking-26.png';
import accomodations from './icons/icons8-hotel-check-in-30.png';
import users from './icons/icons8-user-group-30.png';

export const requesterDashboard = {
  head: 'REQUESTER',
  topLeftHeader: {
    head: 'Dashboard',
    description: 'Requester user dashboard',
  },
  links: [
    {
      name: 'New incident',
      path: 'create',
      icon: bookIcon
    },
    {
      name: 'My incidents',
      path: 'incidents',
      icon: trip
    },
    {
      name: 'Rejected',
      path: 'rejectedIncidents',
      icon: accomodations
    },
  ]
};

export const adminDashboard = {
  head: 'ADMIN',
  topLeftHeader: {
    head: 'Dashboard',
    description: 'System Administrator'
  },
  links: [
    {
      name: 'Users',
      path: 'changeRole',
      icon: users
    },
    {
      name: ' All incidents',
      path: 'incidents',
      icon: trip
    },
    {
      name: 'Accepted',
      path: 'accommodation',
      icon: accomodations
    },
    {
      name: 'Rejected',
      path: 'accommodation',
      icon: accomodations
    },
  ]
};
