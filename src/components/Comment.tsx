
// components/Comment.tsx

import React from 'react';

interface Comentario {
  user: string;
  userImage: string;
  text: string;
}

const Comment: React.FC<Comentario> = ({ user, userImage, text }) => {
  return (
    <div className="flex items-start gap-2 p-2">
      <img src={userImage} alt={user} className="w-10 h-10 rounded-full" />
      <div>
        <p className="font-bold">{user}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
