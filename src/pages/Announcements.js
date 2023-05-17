import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import Footer from '../components/Footer';

import '../App.css';
import Announcement from './Announcement';
import { Link } from 'react-router-dom';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // Check the user's authentication status
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setSignedIn(true);
        // Load the announcements that the user has made
        const userAnnouncementsRef = db.collection('announcements').where('userId', '==', user.uid);
        userAnnouncementsRef.onSnapshot((snapshot) => {
          const announcementsList = [];
          snapshot.forEach((doc) => {
            announcementsList.push({ id: doc.id, ...doc.data() });
          });
          setAnnouncements(announcementsList);
        });
      } else {
        setSignedIn(false);
      }
      setLoading(false);
    });

    // Clean up the authentication listener when the component unmounts
    return unsubscribe;
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!signedIn) {
    return (
      <>
      <div>
        Please <Link to='/signin'>sign in</Link> to view announcements.
      </div>
      <Footer/>
      </>
    );
  }

  return (
    <div className='announcements'>
      <h1>Announcements</h1>
      {announcements.length === 0 ? (
        <div>No announcements to display.</div>
      ) : (
        announcements.map((announcement) => (
          <Announcement key={announcement.id} announcement={announcement} />
        ))
      )}
    </div>
  );
};

export default Announcements;
