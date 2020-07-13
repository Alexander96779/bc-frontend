/* eslint-disable import/no-duplicates */
import bookIcon from './icons/icons8-hotel-check-in-30.png';
import trip from './icons/icons8-trekking-26.png';
import accomodations from './icons/icons8-hotel-check-in-30.png';
import users from './icons/icons8-user-group-30.png';

export const requesterDashboard = {
  head: 'REQUESTER',
  topLeftHeader: {
    head: 'Trip requests',
    description: 'All my trip requests',
  },
  links: [
    {
      name: 'My Bookings',
      path: 'booking',
      icon: bookIcon
    },
    {
      name: 'Trip Requests',
      path: 'request',
      icon: trip
    },
    {
      name: 'Accommodations',
      path: 'accommodation',
      icon: accomodations
    },
  ]
};

export const adminDashboard = {
  head: 'ADMIN',
  topLeftHeader: { head: 'Dashboard' },
  links: [
    {
      name: 'Users',
      path: 'user',
      icon: users
    },
    {
      name: 'Trip Requests',
      path: 'request',
      icon: trip
    },
    {
      name: 'Accommodations',
      path: 'accommodation',
      icon: accomodations
    },
  ]
};
