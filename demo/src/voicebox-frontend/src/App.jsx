import React, { useState, useEffect } from 'react';
import './App.css';
import { userAPI, feedbackAPI, voteAPI } from './services/api';

// Import components
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostCard from './components/PostCard';

// Import modal components
import CreateSuggestionModal from './components/modals/CreateSuggestionModal';
import ViewPostModal from './components/modals/ViewPostModal';
import UpdateUserModal from './components/modals/UpdateUserModal';
import ChangePasswordModal from './components/modals/ChangePasswordModal';

const VoiceBox = () => {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  
  const [loginForm, setLoginForm] = useState({ idNumber: '', password: '' });
  const [signupForm, setSignupForm] = useState({
    firstName: '',
    lastName: '',
    userType: '',
    idNumber: '',
    password: ''
  });
  
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [newSuggestion, setNewSuggestion] = useState({
    title: '',
    category: '',
    description: ''
  });
  
  const [passwordForm, setPasswordForm] = useState({
    password: '',
    confirmPassword: ''
  });
  
  const [updateUserForm, setUpdateUserForm] = useState({
    firstName: '',
    lastName: '',
    userType: '',
    idNumber: ''
  });

  // Load users and posts from backend on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load users
        const usersData = await userAPI.getAll();
        setUsers(usersData);

        // Load feedback/posts
        const feedbackData = await feedbackAPI.getAll();
        // Map backend data to frontend format
        const mappedPosts = feedbackData.map(fb => ({
          id: fb.feedbackId,
          userId: fb.userId,
          title: fb.title,
          description: fb.feedbackDesc,
          category: fb.category,
          author: fb.author,
          upvotes: fb.upVotesCount,
          downvotes: fb.downVotesCount,
          votedBy: [] // We'll handle votes separately
        }));
        setPosts(mappedPosts);

        // Check if user is logged in (from localStorage)
        const savedCurrentUser = localStorage.getItem('voicebox_current_user');
        if (savedCurrentUser) {
          setCurrentUser(JSON.parse(savedCurrentUser));
          setIsLoggedIn(true);
          setCurrentPage('home');
        }
      } catch (error) {
        console.error('Error loading data:', error);
      }
    };

    loadData();
  }, []);

  // Save current user to localStorage when it changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('voicebox_current_user', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  const handleSignup = async () => {
    if (!signupForm.firstName || !signupForm.lastName || !signupForm.userType || !signupForm.idNumber || !signupForm.password) {
      alert('Please fill all fields');
      return;
    }

    try {
      const newUser = {
        firstName: signupForm.firstName,
        lastName: signupForm.lastName,
        userType: signupForm.userType,
        idNumber: signupForm.idNumber,
        userPassword: signupForm.password
      };

      const createdUser = await userAPI.create(newUser);
      setUsers([...users, createdUser]);
      
      setSignupForm({
        firstName: '',
        lastName: '',
        userType: '',
        idNumber: '',
        password: ''
      });
      setCurrentPage('login');
      alert('Account created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating account. Please try again.');
    }
  };

  const handleLogin = async () => {
    try {
      const allUsers = await userAPI.getAll();
      const user = allUsers.find(u => u.idNumber === loginForm.idNumber && u.userPassword === loginForm.password);
      
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);
        setCurrentPage('home');
        setLoginForm({ idNumber: '', password: '' });
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
    setCurrentPage('login');
    localStorage.removeItem('voicebox_current_user');
    setShowSidebar(false);
  };

  const handleCreateSuggestion = async () => {
    if (!newSuggestion.title || !newSuggestion.category || !newSuggestion.description) {
      alert('Please fill all fields');
      return;
    }

    try {
      const newFeedback = {
        userId: currentUser.userId,
        title: newSuggestion.title,
        feedbackDesc: newSuggestion.description,
        category: newSuggestion.category,
        author: `${currentUser.firstName} ${currentUser.lastName}`,
        status: 'Pending',
        upVotesCount: 0,
        downVotesCount: 0
      };

      const createdFeedback = await feedbackAPI.create(newFeedback);
      
      // Map to frontend format
      const newPost = {
        id: createdFeedback.feedbackId,
        userId: createdFeedback.userId,
        title: createdFeedback.title,
        description: createdFeedback.feedbackDesc,
        category: createdFeedback.category,
        author: createdFeedback.author,
        upvotes: createdFeedback.upVotesCount,
        downvotes: createdFeedback.downVotesCount,
        votedBy: []
      };

      setPosts([newPost, ...posts]);
      setNewSuggestion({ title: '', category: '', description: '' });
      setShowModal(null);
      alert('Suggestion created successfully!');
    } catch (error) {
      console.error('Error creating feedback:', error);
      alert('Error creating suggestion. Please try again.');
    }
  };

  const handleVote = async (postId, voteType) => {
    try {
      // Check if user already voted
      const post = posts.find(p => p.id === postId);
      const hasVoted = post.votedBy?.includes(currentUser.userId);
      
      if (hasVoted) {
        return;
      }

      // Create vote record
      const voteData = {
        userId: currentUser.userId,
        feedbackId: postId,
        voteType: voteType === 'upvotes' ? 'upvote' : 'downvote'
      };

      await voteAPI.create(voteData);

      // Update feedback vote count
      const updatedFeedback = {
        ...post,
        upVotesCount: voteType === 'upvotes' ? post.upvotes + 1 : post.upvotes,
        downVotesCount: voteType === 'downvotes' ? post.downvotes + 1 : post.downvotes
      };

      // Map to backend format
      const backendFeedback = {
        userId: post.userId,
        title: post.title,
        feedbackDesc: post.description,
        category: post.category,
        author: post.author,
        status: 'Pending',
        upVotesCount: updatedFeedback.upVotesCount,
        downVotesCount: updatedFeedback.downVotesCount
      };

      await feedbackAPI.update(postId, backendFeedback);

      // Update local state
      setPosts(posts.map(p => {
        if (p.id === postId) {
          return {
            ...p,
            [voteType]: p[voteType] + 1,
            votedBy: [...(p.votedBy || []), currentUser.userId]
          };
        }
        return p;
      }));
    } catch (error) {
      console.error('Error voting:', error);
      alert('Error voting. Please try again.');
    }
  };

  const handleUpdateUserInfo = async () => {
    if (!updateUserForm.firstName || !updateUserForm.lastName || !updateUserForm.userType || !updateUserForm.idNumber) {
      alert('Please fill all fields');
      return;
    }

    try {
      const updatedUser = {
        firstName: updateUserForm.firstName,
        lastName: updateUserForm.lastName,
        userType: updateUserForm.userType,
        idNumber: updateUserForm.idNumber,
        userPassword: currentUser.userPassword
      };

      const updated = await userAPI.update(currentUser.userId, updatedUser);
      setCurrentUser(updated);
      setUsers(users.map(u => u.userId === currentUser.userId ? updated : u));
      setShowModal(null);
      alert('User information updated successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating information. Please try again.');
    }
  };

  const handleChangePassword = async () => {
    if (!passwordForm.password || !passwordForm.confirmPassword) {
      alert('Please fill all fields');
      return;
    }
    if (passwordForm.password !== passwordForm.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const updatedUser = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        userType: currentUser.userType,
        idNumber: currentUser.idNumber,
        userPassword: passwordForm.password
      };

      const updated = await userAPI.update(currentUser.userId, updatedUser);
      setCurrentUser(updated);
      setUsers(users.map(u => u.userId === currentUser.userId ? updated : u));
      setPasswordForm({ password: '', confirmPassword: '' });
      setShowModal(null);
      alert('Password changed successfully!');
    } catch (error) {
      console.error('Error changing password:', error);
      alert('Error changing password. Please try again.');
    }
  };

  const openUpdateUserModal = () => {
    setUpdateUserForm({
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      userType: currentUser.userType,
      idNumber: currentUser.idNumber
    });
    setShowModal('updateUser');
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const latestPost = posts[0];

  if (currentPage === 'login' && !isLoggedIn) {
    return (
      <LoginPage
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        handleLogin={handleLogin}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  if (currentPage === 'signup' && !isLoggedIn) {
    return (
      <SignupPage
        signupForm={signupForm}
        setSignupForm={setSignupForm}
        handleSignup={handleSignup}
        setCurrentPage={setCurrentPage}
      />
    );
  }

  return (
    <div className="main-container">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="main-flex">
        <div className="main-content">
          <div className="latest-activity-section">
            <div className="section-header">
              <h2 className="section-title">Latest Activity</h2>
              <button
                onClick={() => setShowModal('createSuggestion')}
                className="create-suggestion-button"
              >
                CREATE SUGGESTION
              </button>
            </div>
            {latestPost ? (
              <div className="latest-post">
                <h3 className="latest-post-title">{latestPost.title}</h3>
                <p className="latest-post-author">By: {latestPost.author}</p>
                <p className="latest-post-description">{latestPost.description}</p>
              </div>
            ) : (
              <div className="empty-state">
                <p className="empty-state-text">No Recent Activity Yet!</p>
                <button
                  onClick={() => setShowModal('createSuggestion')}
                  className="create-suggestion-button"
                >
                  CREATE SUGGESTION
                </button>
              </div>
            )}
          </div>

          <div className="all-posts-section">
            <div className="all-posts-header">
              <h2 className="all-posts-title">All Posts</h2>
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="posts-list">
              {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    onClick={() => setShowModal({ type: 'viewPost', post })}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <p className="no-posts-message">No posts yet. Create the first one!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {showSidebar && (
          <Sidebar
            currentUser={currentUser}
            setShowModal={setShowModal}
            handleLogout={handleLogout}
            openUpdateUserModal={openUpdateUserModal}
          />
        )}
      </div>

      {showModal === 'createSuggestion' && (
        <CreateSuggestionModal
          newSuggestion={newSuggestion}
          setNewSuggestion={setNewSuggestion}
          handleCreateSuggestion={handleCreateSuggestion}
          onClose={() => setShowModal(null)}
        />
      )}

      {showModal?.type === 'viewPost' && (
        <ViewPostModal
          post={showModal.post}
          currentUser={currentUser}
          handleVote={handleVote}
          onClose={() => setShowModal(null)}
          updateModalPost={(updatedPost) => setShowModal({ type: 'viewPost', post: updatedPost })}
        />
      )}

      {showModal === 'updateUser' && (
        <UpdateUserModal
          updateUserForm={updateUserForm}
          setUpdateUserForm={setUpdateUserForm}
          handleUpdateUserInfo={handleUpdateUserInfo}
          onClose={() => setShowModal(null)}
        />
      )}

      {showModal === 'changePassword' && (
        <ChangePasswordModal
          passwordForm={passwordForm}
          setPasswordForm={setPasswordForm}
          handleChangePassword={handleChangePassword}
          onClose={() => setShowModal(null)}
        />
      )}
    </div>
  );
};

export default VoiceBox;