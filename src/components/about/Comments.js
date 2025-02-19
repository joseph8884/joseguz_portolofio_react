import React, { useState, useEffect } from "react";
import firebaseManage from "../../Firebase/firebase_manage";
import ThreeDLoaderComponent from "../pre";
import { set } from "firebase/database";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); 
    const fetchComments = async () => {
      const fetchedComments = await firebaseManage.getCommentsFromDB();
      setComments(fetchedComments);
      setLoading(false);
    };

    fetchComments();
  }, []);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto({ file, preview: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostComment = async () => {
    if (name && message) {
      setLoading(true);
      let photoURL = null;
      if (profilePhoto) {
        const uniqueFileName = `${Date.now()}_${profilePhoto.file.name}`;
        photoURL = await firebaseManage.uploadImageToStorage(uniqueFileName, profilePhoto.file);
      }

      await firebaseManage.addComentToDB(name, message, photoURL);
      setComments([
        ...comments,
        { name, message, photoURL: photoURL, timestamp: new Date().toLocaleDateString() },
      ]);
      setName("");
      setMessage("");
      setProfilePhoto(null);
      setLoading(false);
    } else {
      alert("Please fill in both name and message fields.");
    }
  };

  return (
    <>
    {loading && <ThreeDLoaderComponent />}
    <div className="comments-container">
      <div className="comment-form">
        <h2 className="comment-title">Comments ({comments ? comments.length : "0"})</h2>
        <div className="form-fields">
          <div className="form-group">
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="form-input"
              rows="4"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="profilePhoto">Profile Photo (optional)</label>
            <input
              id="profilePhoto"
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="form-file"
            />
          </div>
          <button onClick={handlePostComment} className="post-btn">
            Post Comment
          </button>
        </div>
      </div>
      <div className="comentslist-container ">
        <div className="comments-list">
        {comments?.map((comment, index) => (
          <div key={index} className="comment-item">
            <div className="comment-photo">
              {comment.photoURL ? (
                <img
                  src={comment.photoURL}
                  alt="Profile"
                  className="photo"
                />
              ) : (
                <img
                  src={"/22_Profile.jpg"}
                  alt="Profile"
                  className="photo"
                />
              )}
            </div>
            <div className="comment-details">
              <h4 className="comment-name">{comment.name}</h4>
              <p className="comment-date">{comment.timestamp}</p>
              <p className="comment-text">{comment.message}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      
    </div>
    <div className="gab">.</div>
    </>
  );
};

export default Comments;
